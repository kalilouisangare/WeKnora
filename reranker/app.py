import os
import glob
import numpy as np
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
from transformers import AutoTokenizer
import onnxruntime as ort

app = FastAPI(title="WeKnora ONNX Reranker API")

MODEL_DIR = "/models/reranker"

# Recherche du fichier ONNX
onnx_files = glob.glob(f"{MODEL_DIR}/**/*.onnx", recursive=True)
if not onnx_files:
    onnx_files = glob.glob("./**/*.onnx", recursive=True)

if not onnx_files:
    raise FileNotFoundError("Aucun fichier .onnx trouvé dans /models/reranker")

MODEL_PATH = onnx_files[0]
print(f"Chargement du modèle ONNX depuis : {MODEL_PATH}")

# Chargement du tokenizer avec use_fast=False et du modèle ONNX
tokenizer = AutoTokenizer.from_pretrained(MODEL_DIR, use_fast=False)
session = ort.InferenceSession(MODEL_PATH, providers=['CPUExecutionProvider'])

class RerankRequest(BaseModel):
    query: str
    documents: List[str]
    top_n: Optional[int] = None

class DocumentInfo(BaseModel):
    text: str

class RankResult(BaseModel):
    index: int
    score: float
    relevance_score: float
    document: DocumentInfo

class RerankResponse(BaseModel):
    results: List[RankResult]

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

@app.post("/rerank", response_model=RerankResponse)
@app.post("/v1/rerank", response_model=RerankResponse)
def rerank(request: RerankRequest):
    if not request.documents:
        return {"results": []}

    pairs = [[request.query, doc] for doc in request.documents]

    # Tokenisation des paires (query, document)
    inputs = tokenizer(
        pairs,
        padding=True,
        truncation=True,
        max_length=512,
        return_tensors="np"
    )

    # Préparation des entrées ONNX
    input_names = [i.name for i in session.get_inputs()]
    onnx_inputs = {k: v.astype(np.int64) for k, v in inputs.items() if k in input_names}

    # Calcul de l'inférence
    outputs = session.run(None, onnx_inputs)
    logits = outputs[0].reshape(-1)
    
    # Normalisation des scores entre 0 et 1
    scores = sigmoid(logits).tolist()

    results = []
    for i, (doc_text, score_val) in enumerate(zip(request.documents, scores)):
        results.append(
            RankResult(
                index=i,
                score=float(score_val),
                relevance_score=float(score_val),
                document=DocumentInfo(text=doc_text)
            )
        )

    # Tri par ordre décroissant de pertinence
    sorted_results = sorted(results, key=lambda x: x.score, reverse=True)

    if request.top_n is not None and request.top_n > 0:
        sorted_results = sorted_results[:request.top_n]

    return {"results": sorted_results}

@app.get("/")
def health_check():
    return {"status": "Reranker is running"}
