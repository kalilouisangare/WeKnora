export default {
  localBrowser: {
    pipOpen: "Élargir l'affichage",
    pipReturn: "Revenir à la conversation",
    pipFailed: "Impossible d'ouvrir la fenêtre flottante. Veuillez réessayer.",

    captureScreenshot: "Prendre une capture d'écran",
    navigationIncomplete:
      "La navigation n'a pas atteint la phase de chargement demandée. Vérifiez la page actuelle.",
    noEntries: "Aucune entrée retournée.",
    stopping: "Tâche en cours d'arrêt…",
    elapsedSeconds: "{seconds} s",

    searchInstructionsTitle: "Instructions de recherche du navigateur",
    searchInstructionsDescription:
      "Définissez votre moteur de recherche préféré et l'URL de recherche.",
    searchInstructionsHint:
      "S'applique à votre prochain recherche. Laissez vide pour utiliser le par défaut.",
    searchInstructionsReset: "Rétablir les paramètres par défaut",
    searchInstructionsSaved: "Enregistré",

    sourceHint:
      "Use the local browser to look up and interact with pages this turn, alongside web search, knowledge bases and other tools.",
    pressKey: "Press key",
    hoverPage: "Hover over element",
    scrollPage: "Scroll page",
    focusElement: "Focus element",
    blurElement: "Remove focus",
    selectOption: "Select option",
    closeTab: "Close tab",
    runScript: "Run page script",
    readConsole: "Read console",
    readNetwork: "Inspect network requests",
    resizeWindow: "Resize window",
    emulateDevice: "Emulate device",
    actionPending: "Operating browser…",
    actionRecorded: "Browser action recorded",
    untitledTab: "Untitled tab",
    contentTruncated: "Only part of the page content is shown.",
    controlScope: "Controls this conversation’s browser only",
    pauseHint:
      "Interrupt the browser action and keep the pages for resuming. The conversation continues.",
    stopHint:
      "Close tabs created by this task and return borrowed tabs. Keep the browser open and paired.",
    openPage: "Open page",
    switchPage: "Switch page",
    readPage: "Read page",
    listTabs: "List tabs",
    clickPage: "Click element",
    fillPage: "Fill content",
    waitPage: "Wait for page",
    openTab: "Create task tab",
    switchTab: "Switch task tab",
    authorizeTab: "Request tab permission",
    returnTab: "Return tab",
    needHelp: "Needs your input",
    browserAction: "Browser action",
    actionFailed: "Incomplete",
    actionCompleted: "Action completed",
    commandBusy:
      "The previous browser command is still running. Wait before continuing.",
    invalidArguments:
      "Browser tool arguments are invalid or incomplete. The agent must correct them before proceeding.",
    commandInterrupted:
      "The browser action was interrupted. Check the page before resuming from the preview.",
    actionFailedHint:
      "The browser action did not finish. Check the page and try again.",
    previewStale: "Preview has not updated",
    previewIdle: "Last preview retained",
    previewLive: "Preview syncing",
    previewLoading: "Fetching preview",
    borrowHint:
      "Switch to the page being borrowed and choose Allow or Deny in the BrowserSkill confirmation. Approval continues automatically. Continue operation only resumes a paused task; it does not approve borrowing.",
    helpHint:
      "Open the browser from the preview, complete the requested step, then confirm completion in the browser help overlay.",

    settingsTitle: "Browser connection",
    settingsDescription:
      "Pair BrowserSkill with your local Chrome to operate real web pages from conversations.",
    openSettings: "Open browser settings",
    settingsHint:
      "Connect BrowserSkill in personal settings to use your local browser here.",
    unavailable:
      "Local browsing is not enabled on this server. Contact your administrator.",

    source: "Browser source",
    sandbox: "Sandbox browser",
    local: "Local browser",
    paused: "Paused",
    connected: "Connected",
    disconnected: "Disconnected",
    resume: "Resume browser",
    pause: "Pause browser",
    start: "Start task",
    stop: "End browser task",
    pairHint:
      "Paste the pairing link into Remote connection in the extension and confirm the server.",
    copyPairing: "Copy pairing link",
    copied: "Copied",
    windowHint:
      "Tasks run in a labeled Chrome tab group. Existing tabs require your permission.",
    preview: "Local browser task preview",
    waiting: "Waiting for a task page",
    startHint: "A browser request creates labeled task tabs in the background.",
    revoke: "Revoke device access",
    revokeConfirm:
      "You will need to pair again before using the local browser.",
    failed: "Operation failed. Please retry.",
    productDescription: "Run browser tasks in your Chrome",
    offline: "Offline",
    notPaired: "Not paired",
    lastSeen: "Last connected",
    readyHint:
      "Ready. Return to the conversation and describe your browser task.",
    reconnectHint:
      "Authorization is saved. Keep Chrome and BrowserSkill open to reconnect automatically.",
    replaceDevice: "Change browser",
    installExtension: "Install BrowserSkill",
    installHint:
      "Download the extension built for this server and install it in Chrome.",
    downloadExtension: "Download extension",
    pairBrowser: "Connect this browser",
    packageUnavailable:
      "Ask your administrator for the matching extension package; a download is not configured yet.",
    manualCopy:
      "Select and copy the link below. It expires in 5 minutes and can be used once.",
    pairingReady:
      "Link copied. Paste it in the extension within 5 minutes. Single use only.",
    copyAgain: "Copy again",
    usageTitle: "How to use",
    usageStep1Title: "Install the extension",
    usageStep1Text:
      "Unzip the package, enable Developer mode on the Chrome extensions page, and choose Load unpacked.",
    usageStep2Title: "Pair this browser",
    usageStep2Text:
      "Copy the pairing link and paste it into Remote connection in the extension. Pair once for all conversations in this space.",
    usageStep3Title: "Describe the task in chat",
    usageStep3Text:
      "Turn on the local browser in the input bar and describe the web task. It runs in a labeled tab group.",
    usageStep4Title: "Preview, locate, and resume",
    usageStep4Text:
      "A small preview appears in the conversation. Click it to find the task tab. Interrupted tasks stay paused after reconnect — resume them from the preview. Existing tabs require your permission.",
    running: "Running",
    locateWindow: "Show browser",
    reconnectShort: "Waiting to reconnect",
  },
  artifactLibrary: {
    title: "Permissions des rôles",
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    typeFilter: "Filtrer par type",
    searchPlaceholder: "Recherche par nom ou e-mail",
    categories: {
      all: "Tout",
      document: "Document",
      spreadsheet: "Feuilles de calcul",
      presentation: "Présentations",
      image: "Fichiers Image (.jpg/.jpeg/.png)",
      web: "Pages web",
      data: "Data",
    },
    groups: {
      today: "Aujourd\'hui",
      yesterday: "Hier",
      last7Days: "Les 7 derniers jours",
      last30Days: "Les 30 derniers jours",
      earlier: "Plus tôt",
    },
    total: "Exécutions",
    versions: "{count} versions",
    preview: "Aperçu",
    delete: "Supprimer",
    deleteTitle: "Supprimer une instance de stockage",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    deleteConfirmVersions:
      "Toutes les {count} versions de “{name}” et leur contenu seront supprimées de manière permanente. Cela ne peut pas être annulé.",
    deleted: "Point de terminaison supprimé",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
    download: "Télécharger l\'image",
    downloadFailed: "Échec du téléchargement de {name}",
    openSession: "Ouvrir la conversation",
    untitledSession: "Conversation Sans Titre",
    loadMore: "Charger davantage",
    loadFailed: "Échec du chargement des clés API de plateforme",
    retry: "Recommencer",
    clearFilters: "Effacer les filtres",
    empty: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    },
    noMatches: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    },
  },
  menu: {
    sessionInProgress: "Conversation en cours",
    knowledgeBase: "Base de connaissances",
    agents: "Ouvrir les agents",
    artifacts: "Artefacts",
    organizations: "Ouvrir les espaces partagés",
    newChat: "Nouvelle conversation",
    settings: "Ouvrir les paramètres",
    logout: "Déconnexion",
    clearMessages: "Effacer les messages",
    clearMessagesSuccess: "Messages effacés",
    clearMessagesFailed:
      "Échec de l\'effacement des messages, veuillez réessayer plus tard",
    renameSession: "Renommer",
    renameSessionSuccess: "Titre mis à jour",
    renameSessionFailed:
      "Échec de la mise à jour du titre, veuillez réessayer plus tard",
    batchManage: "Gestion en lots",
    newSession: "Nouvelle conversation",
    pin: "Fixer en haut",
    unpin: "Défixer",
    pinFailed: "Échec de l\'épinglage, veuillez réessayer plus tard",
    unpinFailed: "Échec du désépinglage, veuillez réessayer plus tard",
    search: "Rechercher",
    collapseSidebar: "Replier la barre latérale",
    expandSidebar: "Déployer la barre latérale",
    logoutSuccess: "Déconnexion réussie",
    myChats: "Mes conversations",
    apiChats: "Sessions API",
    noSessions: "Aucune conversation pour l’instant",
  },
  chatHeader: {
    moreActions: "Plus d’actions de conversation",
    toggleSandboxPanel: "Bouton de terminal de sandbox",
    copySessionId: "Copier l’ID de la session",
    copyLink: "Copier le lien d\\\'invitation",
    copyMarkdown: "Copier la conversation en Markdown",
    openNewWindow: "Ouvrir dans un nouvel onglet",
    deleteSession: "Supprimer la conversation",
    renamePlaceholder: "Nom du dossier",
    unpinSuccess: "Défixé",
    sessionIdCopied: "ID de session copié",
    linkCopied: "Lien de conversation copié",
    copyFailed:
      "La copie a échoué; veuillez sélectionner le texte manuellement",
    markdownCopied: "Conversation complète copiée en Markdown",
    markdownCopyFailed: "Échec de la copie en Markdown. Veuillez réessayer.",
    clearConfirmTitle: "Effacer les messages de conversation",
    clearConfirmBody:
      "Effacer tous les messages de cette conversation? La conversation restera, mais cela ne peut pas être annulé.",
    deleteConfirmTitle: "Supprimer l’espace partagé",
    deleteConfirmBody:
      'Supprimer le service MCP "{name}"? Cette action ne peut pas être annulée.',
    deleteSuccess: "Clé API de plateforme supprimée",
    markdown: {
      sessionId: "Identifiant de session",
      exportedAt: "Exporté le",
      user: "Initié par utilisateur",
      assistant: "Assistant",
      attachments: "Pièces jointes",
      references: "Références",
    },
  },
  newUserGuide: {
    stepOf: "{current} / {total}",
    skip: "Ignorer les éléments existants",
    prev: "Précédent",
    next: "Suivant",
    done: "Désinstallation complète",
    reopen: "Revoir le tutoriel du produit",
    steps: {
      welcome: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
      knowledge: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
      chat: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
      agents: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
      settings: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
      models: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
      done: {
        title: "Permissions des rôles",
        desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      },
    },
  },
  contextualGuide: {
    stepOf: "{current} / {total}",
    skip: "Ignorer les éléments existants",
    prev: "Précédent",
    next: "Suivant",
    done: "Désinstallation complète",
    interactHint: "Cliquez sur la zone mise en évidence pour continuer",
    kbList: {
      steps: {
        create: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
    tenantModels: {
      needChatModelFirst:
        "Ajoutez un modèle de chat (KnowledgeQA) avant de créer un agent.",
      steps: {
        intro: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        addModel: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        done: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
      stepsAgent: {
        intro: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        addModel: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        done: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
    kbCreate: {
      steps: {
        type: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        name: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        indexing: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navModels: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        llm: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        embedding: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        parser: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        chunking: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        storage: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navMultimodal: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        multimodalToggle: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        multimodalVllm: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        faq: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        submit: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
    agentList: {
      steps: {
        create: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
    agentCreate: {
      steps: {
        mode: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        agentType: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        name: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navModel: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        model: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navKnowledge: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        knowledge: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navWebsearch: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navMultimodal: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        multimodal: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        navTools: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        submit: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
    kbDetail: {
      steps: {
        intro: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        upload: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        done: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
    chat: {
      steps: {
        kb: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        input: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        send: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        done: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
  },
  batchManage: {
    selectAll: "Tout sélectionner",
    cancel: "Annuler",
    delete: "Supprimer",
    deleteConfirmTitle: "Supprimer l’espace partagé",
    deleteConfirmBody:
      'Supprimer le service MCP "{name}"? Cette action ne peut pas être annulée.',
    deleteAllConfirmBody:
      "Êtes-vous sûr de vouloir supprimer toutes les conversations? Cette action ne peut pas être annulée.",
    deleteSuccess: "Clé API de plateforme supprimée",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
  },
  listSpaceSidebar: {
    all: "Tout",
    workspace: "Workspace",
    spaces: "Partagés avec moi",
    favorites: "Favoris",
    recents: "Récents",
  },
  resourceOrigin: {
    mine: "Créé par moi",
    mineTooltip: "Créé par vous",
    tenant: "Espace de travail",
    tenantTooltip: "Créé par un autre membre de cet espace de travail",
    tenantTooltipWithCreator: "Créé par {creator}",
    space: "Espace Partagé",
    spaceTooltip: 'Partagé via l’espace "{space}"',
    spaceTooltipWithTenant: 'Partagé via l’espace "{space}" · de {tenant}',
    shared: "Prêté au noyau ou à l’enrichissement selon la file d’attente",
    sharedTooltip:
      "Accédé à partir d’un espace de travail externe via un espace partagé",
  },
  knowledgeBase: {
    tagAddAction: "Ajouter des balises",
    documentCount: "Documents",
    filters: "Filtres",
    clearFilters: "Effacer les filtres",

    title: "Permissions des rôles",
    fileContent: "Contenu du fichier",
    accessInfo: {
      myRole: "Mon rôle",
      roleOwner: "Propriétaire",
      permissionOwner:
        "Modifier, gérer les paramètres, supprimer la base de connaissances",
      permissionAdmin: "Modifier, gérer le partage",
      permissionEditor: "Modifier les documents et les balises",
      permissionViewer: "Afficher et rechercher uniquement",
      fromOrg: "À partir d’espace",
      sharedAt: "Partagé le",
      lastUpdated: "Dernière mise à jour: {time}",
    },
    infoCard: {
      tooltip:
        "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
      title: "Permissions des rôles",
      basic: "Fondamentaux",
      access: "Accès",
      binding: "Liens de stockage",
      capabilities: "Capacités",
      stats: "Statistiques",
      type: "Type",
      createdAt: "Créé",
      source: "Source",
      sharedTo: "Partagé avec",
      enabled: "Activer le canal",
      vectorStore: "Stockage de vecteurs",
      fileStorage: "Stockage de fichiers",
      documentCount: "Documents",
      faqCount: "{count} entrées Q&A",
      supportedFileTypes: "Formats Supportés",
      chunking: "Paramètres de découpage",
      parentShort: "parent",
      childShort: "enfant",
    },
    name: "Nom",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    settings: "Ouvrir les paramètres",
    tagUpdateSuccess: "Balise mise à jour avec succès",
    tagEditDialogHeading: "Modifier les balises",
    folderTree: {
      totalDocuments: "{count} documents au total",
      countHint:
        "{direct} documents dans ce dossier; {total} y compris les sous-dossiers",
      filteredCount: "{count} documents correspondants",
      title: "Permissions des rôles",
      rootRow: "Racine",
      rootRowTip:
        "Racine de la base de connaissances; les documents non placés dans un sous-dossier se trouvent ici",
      folderCardCount: "{count} documents",
      searchingSubtree: "(y compris les sous-dossiers)",
      emptyFolder: "Ce dossier n’a pas encore de documents",
      emptySearch: 'Aucun membre ne correspond à "{q}".',
      collapse: "Montrer moins",
      expand: "Développer",
      collapseFolder: "Réduire ce dossier",
      expandFolder: "Développer ce dossier",
      rename: "Renommer",
      renamePlaceholder: "Nom du dossier",
      renameSuccess: "Dossier renommé",
      renameFailed: "Impossible de renommer le dossier",
      renameInvalid:
        "Un dossier ne peut pas être déplacé à l’intérieur de lui-même",
    },
    moveToFolder: {
      action: "Action",
      newFolder: "Nouveau sous-dossier",
      newFolderPlaceholder: "Nom du nouveau dossier",
      newFolderCreate: "Créer",
      newFolderAddRoot: "Nouveau sous-dossier sous la racine",
      newFolderAddUnder: "Nouveau sous-dossier sous « {folder} »",
      newFolderHint: "Appuyez sur Entrée pour créer et déplacer",
      newFolderHintRoot: "Serait créé sous la racine",
      newFolderHintUnder: "Serait créé sous « {folder} »",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      duplicate: "Déjà existant",
    },
    tagFilterTitle: "Filtrer par étiquette",
    tagFilterPlaceholder: "Étiquettes",
    tagFilterMulti: "{count} étiquettes",
    tagManageTitle: "Gérer les étiquettes",
    tagManageDescription:
      "Créer, renommer ou supprimer des étiquettes de base de connaissances",
    tagManageLink: "Gérer les étiquettes…",
    tagManageListSection: "Étiquettes",
    tagManageDocCount: "{count} documents",
    tagManageFaqCount: "{count} entrées FAQ",
    tagPickerSelected: "Sélectionné",
    tagPickerUnselected: "Non sélectionné",
    tagSelectedCount: "{count} sélectionnées",
    tagPickerSearch: "Rechercher ou créer une étiquette",
    tagPickerInUse:
      "Cette étiquette est en cours d'utilisation. Supprimez ses associations de documents avant de la supprimer.",
    tagPickerDeleteConfirm: "Supprimer l'étiquette «{name}»?",
    untagged: "Aucune étiquette par défaut",
    tagCreateAction: "Créer une étiquette",
    tagSearchPlaceholder: "Taper pour filtrer les étiquettes",
    tagNamePlaceholder: "Entrez le nom de l\'étiquette",
    tagNameRequired: "Veuillez fournir un nom d\'étiquette",
    tagCreateSuccess: "Étiquette créée",
    tagEditSuccess: "Étiquette mise à jour",
    tagDeleteDescDoc:
      "Supprimer l\'étiquette «{name}»? Tous les documents sous cette étiquette seront également supprimés.",
    tagDeleteSuccess: "Étiquette supprimée",
    tagEditAction: "Renommer",
    tagDeleteAction: "Supprimer",
    tagEmptyResult: "Aucune étiquette correspondante",
    tagLabel: "Étiquette",
    tagPlaceholder: "Sélectionnez des tags",
    noTags: "Aucune étiquette",
    videosFilteredNoVLM:
      "Ignoré {count} fichier(s) vidéo (le téléchargement de vidéo n\'est pas pris en charge)",
    unsupportedTypesHint:
      "Certaines types de documents ({types}) n’ont pas de moteur d’analyse disponible et ne peuvent pas être traités",
    goToParserSettings: "Configurer",
    importURL: "Importer à partir d’une URL",
    addDocument: "Ajouter un Document",
    importURLTitle: "Importer à partir d’une URL",
    urlRequired: "Veuillez entrer l’URL du service",
    invalidURL: "Veuillez entrer une URL valide",
    urlImportSuccess: "URL importée avec succès!",
    urlImportFailed: "Échec de l’importation de l’URL!",
    urlExists: "Cette URL existe déjà",
    urlLabel: "URL du point d’accès",
    urlPlaceholder:
      "Entrez l’URL du site Web, par exemple, https://example.com",
    urlTip:
      "Supporte l’importation de différents contenus de sites Web. Le système extraîtra et analysera automatiquement le contenu de texte du site Web",
    typeURL: "URL",
    typeManual: "Manuel",
    typeFile: "Fichier",
    channelLabel: "Canal Source",
    channelWeb: "Web",
    channelApi: "API",
    channelBrowserExtension: "Extension de navigateur",
    channelWechat: "WeChat",
    channelWecom: "WeCom",
    channelFeishu: "Feishu",
    channelFeishuDrive: "Feishu Drive",
    channelLarkDrive: "Lark Drive",
    channelDingtalk: "DingTalk",
    channelSlack: "Slack",
    channelIm: "IM",
    channelNotion: "Notion",
    channelConfluence: "Confluence",
    channelYuque: "Yuque",
    channelGitLab: "GitLab",
    channelIma: "Tencent IMA",
    channelUpload: "Upload",
    channelManual: "Manuel",
    channelUrl: "Web",
    channelUnknown: "Inconnu",
    urlSource: "Source URL",
    webContent: "Contenu Web",
    documentContent: "Contenu Document",
    importTime: "Heure d’importation",
    createTime: "Heure de création",
    createdAt: "Créé",
    updatedAt: "Mis à jour à {value}",
    clickToViewFull:
      "Cliquez sur la carte pour afficher le texte complet et les segments",
    characters: "caractères",
    segment: "Segment",
    chunkCount: "Total {count} segments",
    viewChunks: "Voir les morceaux",
    viewMerged: "Texte complet",
    generatedQuestions: "Questions générées",
    viewParentContext: "Voir le contexte parent",
    parentContextLoadFailed: "Échec du chargement du contexte parent",
    confirmDeleteQuestion:
      "Êtes-vous sûr de vouloir supprimer cette question? L’index de vecteur correspondant sera également supprimé.",
    legacyQuestionCannotDelete:
      "Les questions au format hérité ne peuvent pas être supprimées. Veuillez régénérer les questions.",
    customMetadata: "Custom metadata",
    metadataCapabilityHint:
      "Used for document summaries and as document-level context after retrieval; it is not indexed and does not affect retrieval ranking",
    noCustomMetadata: "No custom metadata",
    addMetadataField: "Add metadata field",
    metadataKeyPlaceholder: "Field name",
    metadataValuePlaceholder: "Field value",
    metadataTypeText: "Text",
    metadataTypeNumber: "Number",
    metadataTypeBoolean: "Boolean",
    metadataTypeNull: "Null",
    metadataKeyRequired: "Metadata field name is required",
    metadataKeyDuplicate: "Duplicate metadata field: {key}",
    metadataNumberRequired: "Metadata field {key} must be a valid number",
    regenerateSummary: "Regenerate summary",
    generateSummary: "Générer des résumés de documents",
    noDocumentSummary: "No document summary",
    summaryRefreshed: "Summary refreshed",
    summaryRefreshQueued:
      "Summary refresh queued; it will update automatically when ready",
    indexFailed: "Index sync failed",
    chunkSavedIndexFailed:
      "Content saved, but index sync failed. Use Retry index.",
    chunkEditConflict:
      "This chunk was modified by someone else. The list was refreshed; please try again.",
    retryIndex: "Retry index",
    indexRetrySuccess: "Index synchronized",
    chunkHistory: "Chunk edit history",
    currentVersion: "Current version",
    noChunkHistory: "No edit history",
    compareRevisionWithCurrent:
      "Content changes from v{revision} to current v{current}",
    diffAddedInCurrent: "Added in current",
    diffRemovedFromCurrent: "Removed from current",
    noContentChanges: "No content changes; this revision only changed status",
    revertRevision: "Revert revision",
    revertRevisionConfirm:
      "Revert to v{revision}? A new revision will be created.",
    chunkReverted: "Chunk reverted",
    chunkContentRequired: "Chunk content is required",
    disableChunk: "Disable",
    enableChunk: "Enable",
    enabledStatus: "Enabled",
    disabledStatus: "Disabled",
    editChunkContent: "Edit chunk content",
    addGeneratedQuestion: "Add retrieval question",
    regenerateQuestions: "Regenerate questions",
    questionsRegenerated: "Retrieval questions refreshed",
    staleGeneratedQuestions:
      "Generated from an earlier version; regenerate if needed",
    noGeneratedQuestions: "No retrieval questions",
    notInitialized:
      "Knowledge base is not initialized. Please configure models in settings before uploading files",
    missingStorageEngine:
      "This knowledge base has no storage engine selected. Please configure a storage engine in settings before uploading content.",
    missingStorageEngineUpload:
      "Please configure a storage engine before uploading content",
    goToStorageSettings: "Go to Settings",
    getInfoFailed:
      "Failed to get knowledge base information, file upload is not possible",
    missingId: "L\'ID de la base de connaissances est manquant",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
    uploadTime: "Upload Time",
    newSession: "Nouvelle conversation",
    editDocument: "Edit Document",
    rebuildDocument: "Rebuild Document",
    rebuildConfirm:
      'Rebuild document "{fileName}"? This will clear existing chunks and parse it again.',
    rebuildSubmitted: "Rebuild task submitted",
    rebuildFailed: "Rebuild failed. Please try again later",
    rebuildInProgress:
      "This document is currently being parsed. Please try again later",
    cancelParse: "Stop parsing",
    cancelParseConfirmBody:
      'Stop parsing "{title}"? Already-written chunks are kept and can be re-parsed later via "Rebuild"; pending optimization tasks (summary / Q&A / knowledge graph) will be dropped immediately.',
    cancelParseSubmitted: "Parsing stopped",
    cancelParseFailed: "Failed to stop, please try again later",
    draft: "Draft",
    draftTip: "Temporarily saved and not included in retrieval",
    untitledDocument: "Document sans titre",
    deleteDocument: "Delete Document",
    moveDocument: "Move to...",
    moveToKnowledgeBase: "Move to Knowledge Base",
    moveNoTargets:
      "No compatible knowledge bases found (same type and embedding model required)",
    moveModeReuseVectors: "Reuse Vectors (Fast)",
    moveModeReuseVectorsDesc:
      "Directly move chunks and vector indices. Use when chunking config is the same.",
    moveModeReparse: "Re-parse",
    moveModeReparseDesc:
      "Re-parse documents using the target knowledge base's chunking config.",
    moveConfirm: 'Déplacer vers "{target}"?',
    moveConfirmTitle: "Confirmer le déplacement",
    moveStarted: "Move task submitted",
    moveFailed: "Move failed",
    moveCompleted: "Move completed",
    moveCompletedWithErrors:
      "Move completed: {success} succeeded, {failed} failed",
    parsingFailed: "Parsing failed",
    parsingInProgress: "Parsing...",
    generatingSummary: "Generating summary...",
    documentSummary: "Résumé du document",
    detailSectionMeta: "Basic info",
    confirmDeleteDocument:
      'Confirm deletion of document "{fileName}", recovery will be impossible after deletion',
    confirmDelete: 'Supprimer le modèle "{name}"?',
    viewModeGrid: "Mode grille",
    viewModeList: "Mode liste",
    viewModeToggle: "Basculer la vue du répertoire",
    columnName: "Nom",
    columnTag: "Tag",
    columnSize: "Taille",
    columnSource: "Source",
    columnStatus: "Statut",
    columnUpdatedAt: "Mis à jour",
    columnActions: "Actions",
    selectAll: "Tout sélectionner",
    selectedCount: "{count} sélectionnés",
    clearSelection: "Désélectionner tout",
    batchDelete: "Suppression en bloc",
    batchDownload: "Télécharger la sélection",
    batchDownloading: "Préparation du téléchargement...",
    batchDownloadHint:
      "Téléchargez un ZIP de jusqu\'à 200 documents et 512 Mo de contenu original par lot. La sélection inclut uniquement les documents chargés; les pages Web sans fichiers originaux sont ignorées. Le ZIP conserve les dossiers de la base de connaissances.",
    batchDownloadStarted:
      "Enregistrement du ZIP démarré. Extraire-le, puis téléchargez les fichiers et dossiers.",
    batchDownloadFailed:
      "Le téléchargement en lot a échoué. Veuillez essayer à nouveau.",
    batchDownloadSkipped:
      "Sauté {count} documents qui n’ont pas de fichier original.",
    batchDownloadNoFiles:
      "Aucun des documents sélectionnés n’a de fichier original à télécharger.",
    batchDownloadTooLarge:
      "Les fichiers sélectionnés totalisent plus de 512 Mo. Choisissez moins de documents et essayez à nouveau.",
    selectLoaded: "Sélectionner les chargés",
    confirmBatchDeleteDocument:
      "Supprimer {count} documents sélectionnés? Cette action ne peut pas être annulée.",
    deleteSubmitted: "Requête de suppression soumise. Attente de la fin.",
    deletePending:
      "La suppression est toujours en attente. Actualisez plus tard pour vérifier le résultat.",
    deleteTaskFailed:
      "La suppression a échoué. Vérifiez les détails d’erreur du document et essayez à nouveau.",
    deleteStatusUnavailable:
      "Impossible de confirmer le résultat de la suppression. Actualisez plus tard pour vérifier l’état du document.",
    batchDeleteSuccess: "Supprimées {count} entrées FAQ",
    batchDeleteFailed: "La suppression en lot a échoué",
    batchTag: "Balise en lot",
    batchTagDialogHeading: "Balise en lot",
    batchTagSubtitle:
      "Définissez des balises pour {count} documents sélectionnés (remplace les balises existantes)",
    batchTagSuccess: "Balises appliquées à {count} documents",
    batchTagFailed: "La balise en lot a échoué",
    confirmBatchReparseDocument:
      "Reconstruire {count} documents sélectionnés? Le contenu existant sera effacé et chaque document sera re-parse.",
    confirmBatchReparse: "Confirmer et reparser",
    batchReparseSuccess: "Tâches de relecture {count} soumises",
    batchReparseFailed: "La relecture en lot a échoué",
    batchReparseSkippedInFlight:
      "Sauté {count} document(s) en cours de traitement",
    statusCompleted: "Terminé",
    statusProcessing: "En cours",
    statusFinalizing: "Optimisation",
    statusFailed: "Échec",
    statusCancelled: "Annulé",
    statusDraft: "Brouillon",
    noDescription: "Aucune description",
    emptyKnowledgeDragDrop:
      "Le savoir est vide, faites glisser et déposez pour télécharger",
    pdfDocFormat: "fichiers pdf, doc, max 10M",
    textMarkdownFormat: "fichiers texte, markdown, max 200K",
    dragFileNotText:
      "Veuillez faire glisser des fichiers au lieu de texte ou de liens",
    searchPlaceholder: "Recherche par nom ou e-mail",
    docSearchPlaceholder: "Recherchez les noms des documents...",
    fileTypeFilter: "Type de fichier",
    allFileTypes: "Tous les types",
    allTags: "Toutes les étiquettes",
    parseStatusFilter: "Statut",
    allParseStatuses: "Tous les statuts",
    parseStatusPending: "En attente",
    parseStatusProcessing: "En cours",
    parseStatusCompleted: "Terminé",
    parseStatusFinalizing: "Optimisation",
    parseStatusFailed: "Échec",
    parseStatusCancelled: "Annulé",
    parseStatusDraft: "Brouillon",
    sourceFilter: "Source",
    allSources: "Toutes les sources",
    sourceApi: "API",
    sourceBrowserExtension: "Extension du navigateur",
    sourceUpload: "Télécharger",
    sourceUrl: "Import URL",
    sourceManual: "Manuel",
    updatedTimeFrom: "De",
    updatedTimeTo: "À",
    noMatch: "Aucun espace de travail correspondant trouvé",
    noKnowledge: "Aucune base de connaissances disponible",
    loadingFailed: "Échec du chargement des bases de connaissances",
    operationNotSupportedForType:
      "Cette opération n\'est pas supportée pour le type actuel de base de connaissances",
    allFilesSkippedNoEngine:
      "Tous les fichiers sélectionnés ont été ignorés en raison de l\'absence d\'engine de parsing",
    filesSkippedNoEngine:
      "{count} fichiers ont été ignorés en raison de l\'absence d\'engine de parsing",
    deleteSuccess: "Clé API de plateforme supprimée",
    chunkLoadFailed: "Échec du chargement des morceaux",
  },
  uploadConfirm: {
    documentSummary: "Résumé du document",
    documentSummaryDescription:
      "Déterminez si vous souhaitez que des résumés de documents soient générés automatiquement lors de cette importation.",
    generateSummary: "Générer des résumés de documents",
    generateSummaryHint:
      "Activé par défaut. Désactivez cette option pour ignorer les résumés pendant le traitement, l'indexation et autres étapes configurées continue.",

    title: "Permissions des rôles",
    parseConfig: "Paramètres de parsing",
    configNav: "Navigation des paramètres de parsing",
    navParserDefault: "Défaut",
    navParserCustomized: "Personnalisé",
    moreOptions: "Plus d\'options de traitement",
    summaryParentChildShort: "Parent-enfant",
    summaryParserForceScanned: "Mode scanné",
    summaryQuestionCountValue: "{count}",
    summaryGraphTagsValue: "{count}",
    navChunkingSummary: "Faire en morceaux {size}",
    statusOn: "Activé",
    statusOff: "Désactivé",
    notSet: "Non définie",
    summaryNoTags: "Non défini",
    summaryTagsCount: "{count} balises",
    confirm: "Révoquer",
    cancel: "Annuler",
    tabTags: "Balises du document",
    tagsDescription:
      "Définissez les étiquettes de types de relations à extraire, séparées par des virgules",
    tagsPlaceholder:
      "Entrez les types de relations, par exemple: works_at, colleague, friend",
    tagsEmpty:
      "Cette base de connaissances n\'a pas de balises. Vous pouvez les créer dans la gestion des balises après l\'upload.",
    tagsLoadFailed:
      "Échec du chargement des balises. Vous pouvez les définir plus tard à partir de la liste des documents.",
    noItems: "Ajoutez au moins un fichier ou une URL",
    urlItemLabel: "URL",
    urlAdded: "URL ajoutée",
    urlDuplicate: "Cette URL est déjà dans la liste",
    statusNeedsSetup: "A besoin d\'être configuré",
    multimodalSetupHint:
      "Images détectées. Activez le multimodal et sélectionnez un modèle.",
    asrSetupHint:
      "Audio détecté. Activez la reconnaissance vocale et sélectionnez un modèle.",
    vlmModelRequired:
      "Un modèle VLM est requis lorsque l’upload d’images est activé",
    asrModelRequired: "Configurez un modèle de reconnaissance vocale",
    vlmModelSelectRequired:
      "Le multimodal est activé. Veuillez sélectionner un modèle VLM.",
    asrModelSelectRequired:
      "La reconnaissance vocale est activée. Veuillez sélectionner un modèle ASR.",
    pdfForceScanned: {
      label: "Changer le mot de passe",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    },
    continueAdd: "Ajouter plus",
    destinationLabel: "Emplacement de téléchargement",
    destinationChange: "Changer l\'emplacement de téléchargement",
    destinationToRoot: "Utiliser la racine",
    folderUploadTitle: "Dossier « {name} »",
    folderUploadHint:
      "{count} fichiers; la structure locale du dossier sera conservée",
    filesAdded: "Ajouté {count} fichier(s)",
    filesAllDuplicate: "Les fichiers sélectionnés sont déjà dans la liste",
    titleManual: "Confirmer la publication en ligne",
    confirmManual: "Publier et analyser",
    titleReparse: "Confirmer la réanalyse",
    confirmReparse: "Confirmer et réanalyser",
    reparseSource: "Document à réanalyser",
    reparseHint:
      "Réutilise les paramètres de dernière analyse; ajustez-les ici",
    manualCharCount: "{count} caractères",
  },
  knowledgeStages: {
    title: "Permissions des rôles",
    root: "Traitement du connaissance",
    processConfig: {
      title: "Permissions des rôles",
      kbDefault:
        "Utilisation des valeurs par défaut de la base de connaissances",
      graph: "Extraction de graphes au niveau des morceaux",
    },
    attempt: "Essai de traitement",
    retry: "Recommencer",
    notRun: "Non exécuté",
    stageFailed: "{stage} a échoué",
    copyError: "Copier les détails de l’erreur",
    stat: {
      duration: "Durée",
      attempt: "Essai de traitement",
      tasks: "Tâches en arrière-plan",
      tasksValue:
        "{running} en cours · {failed} échouées · {completed} terminées",
    },
    refresh: "Mettre à jour",
    copy: "Copier la clé",
    copyDetails: "Copier les détails",
    copied: "Copié dans le presse-papiers",
    close: "Fermer",
    live: "LIVE",
    liveTooltip:
      "Analyse en cours — actualisation automatique toutes les 2 secondes",
    autoRefreshOn: "Actualisation automatique active",
    fetchFailedShort: "Échec de la récupération",
    viewTrace: "Afficher la trace",
    expandBranch: "Afficher les enfants",
    collapseBranch: "Masquer les enfants",
    rowSelectHint:
      "Cliquez pour afficher les détails; utilisez les flèches pour afficher ou masquer les enfants",
    resizeDrawer: "Faire glisser pour redimensionner la largeur du panneau",
    justNow: "à l’instant",
    secondsAgo: "{n} s. ago",
    minutesAgo: "{n} min. ago",
    noActivity: "Aucune activité d’analyse pour le moment",
    totalDuration: "Total: {d}",
    head: {
      stagesDone: "Étapes principales",
      stagesProgress: "Étape en cours",
      attempt: "Essai de traitement",
      updated: "Point de terminaison mis à jour",
    },
    tab: {
      overview: "Aperçu",
      raw: "JSON brut",
    },
    detail: {
      started: "Débuté",
      finished: "Terminé",
      duration: "Durée",
      offset: "Décalage",
      timing: "Temps",
      identity: "Identité",
      stageBreakdown: "Décomposition des étapes",
      stageOrder: "Ordre des étapes",
      childCount: "Nombre d’enfants",
      kind: "Type",
      status: "Statut",
      name: "Nom",
      input: "Entrée",
      output: "Sortie",
      metadata: "Metadata",
      traceMetadata: "Trace metadata",
      metadataHint:
        "Auxiliary fields for observability (e.g. Langfuse trace ID). Stage/subspan payloads live under Input and Output.",
      metadataEmpty:
        "This span has no metadata. Use Input/Output for stage payloads; trace-level fields appear in Overview when Langfuse is connected.",
      error: "Erreur",
      empty: "Aucune clé API de plateforme",
      inProgress: "En cours",
      elapsed: "Temps écoulé",
      placeholderHint:
        "Cette étape n’a pas de registre de span détaillé; seule l’état inféré est affiché.",
      showJson: "Développer le JSON",
      hideJson: "Replier le JSON",
      includingChildren: "incl. enfants",
    },
    stage: {
      docreader: "Analyse du document",
      chunking: "Paramètres de découpage",
      embedding: "Embedding",
      multimodal: "OCR d’images, sous-titres visuels",
      postprocess: "Finalisation du parsing, diffusion de l’enrichissement",
    },
    status: {
      pending: "En attente",
      running: "Synchronisation en cours",
      finalizing: "Finalisation",
      done: "Désinstallation complète",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      skipped: "Ignorées",
      cancelled: "Annulé",
    },
    errorCode: {
      UNKNOWN_SUGGESTION:
        "Vérifiez les journaux de l\'application pour plus de détails.",
    },
  },
  agent: {
    taskLabel: "Tâche:",
    think: "Pensée profonde",
    copy: "Copier la clé",
    addToKnowledgeBase: "Ajouter à la base de connaissances",
    artifactDrawer: {
      buttonTitle: "Afficher les fichiers générés dans cette réponse",
      title: "Permissions des rôles",
      empty: "Aucune clé API de plateforme",
      preview: "Aperçu",
      previewBack: "Retourner à la liste",
      collecting: "Sauvegarde des fichiers générés...",
      delete: "Supprimer",
      deleteTitle: "Supprimer une instance de stockage",
      deleteConfirm:
        "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
      download: "Télécharger l\'image",
      downloadFailed: "Échec du téléchargement de {name}",
      inlinePreviewHint: "Cliquez pour prévisualiser",
      inlineMissing: "Fichier indisponible",
      inlineDeleted: "Fichier supprimé",
    },
    updatePlan: "Mettre à jour le plan",
    webSearchFound:
      "Trouvé <strong>{count}</strong> résultat(s) de recherche web",
    toolFallback: "Outil",
    stepsCompleted: "Terminé <strong>{steps}</strong> étape(s)",
    reasoningRounds: "<strong>{rounds}</strong> tour(s) de raisonnement",
    toolCalls: "<strong>{tools}</strong> appel(s) à l\\\'outil",
    durationSuffix: "<strong>{duration}</strong>",
    stepSummarySeparator: " · ",
    contextCompacted: "Contexte compacté",
    contextCompactedSummary: "{before} → {after} tokens",
    contextCompactedDegraded: "Aperçu non disponible, transcript brut conservé",
    title: "Permissions des rôles",
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    createAgent: "Créer un Agent",
    builtin: "Intégré",
    disabled: "Désactivé",
    disable: "Désactiver",
    enable: "Activer",
    noDescription: "Aucune description",
    selectAgent: "Sélectionner un Agent",
    noAgents: "Aucun agent",
    manageAgents: "Gérer",
    builtinAgents: "Agents Intégrés",
    customAgents: "Agents Personnalisés",
    capabilities: {
      kbCount: "{count} documents",
      kbAll: "Toutes les bases de connaissances",
      mcpEnabled: "Services MCP activés",
      multiTurn:
        "Lorsque activé, le contexte de conversation historique est conservé",
    },
    type: {
      normal: "Normal",
      agent: "Agent ReAct",
    },
    mode: {
      normal: "Normal",
      agent: "Agent ReAct",
    },
    features: {
      webSearch: "Recherche Web",
      knowledgeBase: "Base de connaissances",
      mcp: "Services MCP",
      multiTurn:
        "Lorsque activé, le contexte de conversation historique est conservé",
    },
    tabs: {
      sharedToMe: "Partagé avec moi",
    },
    sections: {
      builtin: "Intégré",
      mine: "Créé par moi",
      tenantOthers: "Espace de travail · Autres membres",
      tenantReadonly: "Espace de travail · Lecture seule",
      sharedByMe: "Partagé par moi",
      sharedEditable: "Partagé avec moi · Modifiable",
      sharedReadonly: "Partagé avec moi · Lecture seule",
    },
    empty: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      sharedTitle: "Aucune base de connaissances partagée pour le moment",
      sharedDescription:
        "Rejoignez un espace partagé ou demandez à d\'autres de partager des bases de connaissances avec vous",
      favoritesTitle: "Aucune base de connaissances préférée pour le moment",
      favoritesDescription:
        "Étoile une base de connaissances à partir de sa carte pour l’ajouter ici",
      recentsTitle: "Aucune base de connaissances récente pour le moment",
      recentsDescription:
        "Les bases de connaissances que vous avez récemment ouvertes apparaîtront ici",
    },
    detail: {
      title: "Permissions des rôles",
      useInChat: "Utiliser dans le chat",
    },
    shareScope: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      skillSecretsWarning:
        "Cet agent utilise des compétences. Lorsque les membres de l’espace l’utilisent, les compétences s’exécutent dans le sandbox de cet espace avec les variables d’environnement configurées par les administrateurs pour eux (comme les clés API), et les membres peuvent faire l’agent révéler ces valeurs. Partagez-le uniquement si cela est acceptable.",
      knowledgeBase: "Base de connaissances",
      chatModel: "Modèle de chat",
      rerankModel: "Modèle de rerank",
      webSearch: "Recherche Web",
      mcp: "Services MCP",
      kbAll: "Toutes les bases de connaissances",
      kbSelected: "{count} sélectionnées",
      kbNone: "Aucune",
      modelConfigured: "Configuré",
      modelNotSet: "Non défini",
      enabled: "Activer le canal",
      disabled: "Désactivé",
      mcpAll: "Tous les services",
      mcpSelected: "{count} sélectionnés",
      mcpNone: "Aucun",
    },
    delete: {
      confirmTitle: "Quitter ce workspace?",
      confirmMessage:
        'Êtes-vous sûr de vouloir supprimer la base de connaissances "{name}"? Cette action ne peut pas être annulée.',
      confirmButton: "Revenir",
    },
    messages: {
      created: "Point de terminaison créé",
      updated: "Point de terminaison mis à jour",
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      copied: "Copié dans le presse-papiers",
      copyFailed:
        "La copie a échoué; veuillez sélectionner le texte manuellement",
      disabled: "Désactivé",
      enabled: "Activer le canal",
    },
    editor: {
      reasoningEffortUnsupported:
        'Le modèle sélectionné ne peut pas penser; toutes les options sauf "Désactivé" sont ignorées.',
      reasoningEffortAlwaysOn:
        "Le modèle sélectionné raisonne toujours et ne peut pas être désactivé; seul le niveau d’effort peut être modifié.",
      createTitle: "Nouveau point de terminaison MCP",
      editTitle: "Modifier le point de terminaison MCP",
      buttons: {
        create: "Nouveau point de terminaison",
        saveAndClose: "Enregistrer et fermer",
      },
      postCreateHint: {
        title: "Permissions des rôles",
        footer:
          'Continuez à ajuster les paramètres, configurez le partage et les sources d\'information, puis cliquez sur "Enregistrer et fermer".',
        integrationDesc:
          "Accédez à l’Intégration pour configurer le chat, l’intégration web et d’autres canaux de publication",
      },
      basicInfo: "Informations de base",
      basicInfoDesc:
        "Configurez le nom de l’agent, sa description et le mode de fonctionnement",
      promptsConfig: "Prédictions",
      promptsConfigDesc:
        "Configurez les systèmes, le contexte, l’intention, la réécriture et les prédictions de rejet",
      modelConfig: "Configuration du modèle",
      modelConfigDesc:
        "Configurez le modèle de chat, les modèles auxiliaires (ReRank) et les paramètres de génération",
      toolsConfig: "Outils",
      toolsConfigDesc: "Configurez les outils disponibles pour l’Agent",
      knowledgeConfig: "Knowledge Base",
      knowledgeConfigDesc:
        "Configure knowledge base scope and FAQ strategy for the agent",
      webSearchConfig: "Recherche web",
      webSearchConfigDesc: "Configure web search capabilities for the agent",
      agentId: "Agent ID",
      agentIdDesc: "Use this ID to target the agent in API integrations",
      name: "Nom",
      namePlaceholder: "Par exemple: automatisation des opérations centrales",
      nameRequired: "Entrez un nom",
      systemPromptRequired: "System prompt is required",
      modelRequired: "Please select a model",
      queryMissingInRewrite:
        "Rewrite user prompt must contain {'{{'}query{'}}'} placeholder",
      queryMissingInFallback:
        "Fallback prompt must contain {'{{'}query{'}}'} placeholder",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      descriptionPlaceholder:
        "Optionnel: qui utilise cet point d\'accès et pourquoi",
      normalDesc: "Quick response, direct answers",
      agentDesc: "Multi-step thinking, deep analysis for complex questions",
      model: "Modèle Généré",
      modelPlaceholder: "Sélectionnez un modèle à tester",
      systemPrompt:
        "Prompt système personnalisé pour définir le comportement et le rôle de l\'agent",
      systemPromptPlaceholder: "Prompt système optionnel",
      contextTemplateRequired: "Context template is required",
      temperature:
        "Contrôlez la randomisation de la sortie, 0 est le plus déterministe, 1 est le plus aléatoire",
      thinking: "Pensée",
      citationEnabled: "Show Source Citations",
      citationEnabledDesc:
        "Show knowledge-base and web sources in final answers; retrieval and grounding still work when disabled",
      mode: "Mode de Connexion",
      webSearch: "Recherche Web",
      webSearchProvider:
        "Spécifiez un moteur de recherche pour cet agent. Laissez vide pour utiliser celui par défaut.",
      webSearchProviderPlaceholder: "Use default search engine",
      webSearchMaxResults:
        "Nombre maximum de résultats retournés par recherche",
      webFetchEnabled:
        "Après le classement, récupérez automatiquement le contenu complet des pages Web des résultats les plus élevés pour une meilleure réponse",
      webFetchTopN:
        "Nombre maximum de pages Web à récupérer après le classement",
      knowledgeBases: "Ouvrir les bases de connaissances",
      allKnowledgeBases: "Toutes les bases de connaissances",
      selectedKnowledgeBases: "Selected Knowledge Bases",
      noKnowledgeBase: "No Knowledge Base",
      selectKnowledgeBases: "Select Knowledge Bases",
      selectKnowledgeBasesDesc:
        "Select knowledge bases to associate (including collaborative ones)",
      myKnowledgeBases: "My Knowledge Bases",
      sharedKnowledgeBases: "Collaborative Knowledge Bases",
      retrieveKBOnlyWhenMentioned: "Retrieve Only When Mentioned",
      retrieveKBOnlyWhenMentionedDesc:
        "Off: auto-retrieve configured KBs; On: retrieve only when user {'@'} mentions",
      rerankModel: "Modèle de rerank",
      rerankModelDesc:
        "Used to rerank knowledge base retrieval results for better accuracy",
      rerankModelPlaceholder: "Select ReRank Model",
      rerankModelOptionalHint:
        "No RAG knowledge base in current scope, so this is optional. If a RAG knowledge base is added later, the workspace default rerank model will be used as a fallback. Configuring it explicitly is still recommended.",
      maxIterations:
        "Limite le nombre de pas de raisonnement que une tâche peut prendre. L’infini continue jusqu\'à ce que le modèle s’arrête par lui-même ou que vous l’arrêtez",
      maxIterationsLimit: "Limit",
      maxIterationsUnlimited: "Unlimited",
      allowedTools: "Allowed Tools",
      multiTurn:
        "Lorsque activé, le contexte de conversation historique est conservé",
      historyTurns: "History Turns",
      retainRetrievalHistory:
        "Conservez les résultats de la base de connaissances des tours précédents. Lorsque désactivé, chaque tour effectue une nouvelle recherche",
      memoryEnabled:
        "Permet à cet agent de lire et d’ajouter à votre mémoire à long terme. Lorsqu’il est désactivé, les conversations avec lui ne lisent pas vos mémoires et ne ajoutent pas de nouvelles. Activer-le ici n’affecte rien tant que le workspace ou le switch personnel n’est pas activé",
      retrievalStrategy: "Retrieval Strategy",
      embeddingTopK:
        "Nombre maximum de résultats de la récupération de vecteurs",
      keywordThreshold:
        "Score de pertinence minimum pour la récupération de mots-clés",
      vectorThreshold:
        "Score de similarité minimum pour la récupération de vecteurs",
      rerankTopK: "Nombre maximum de résultats conservés après le classement",
      rerankThreshold: "Score de pertinence minimum pour le classement",
      conversationSettings: "Conversation",
      contextTemplate:
        "Définissez la façon dont le contenu récupéré est formaté avant de passer au modèle",
      contextTemplatePlaceholder: "Custom context template...",
      enableQueryExpansion: "Query Expansion",
      enableRewrite: "Query Rewrite",
      queryUnderstandModel:
        "Modèle utilisé pour comprendre les requêtes (réécriture et détection d’intention). Laissez vide pour réutiliser le modèle de chat principal.",
      queryUnderstandModelPlaceholder:
        "Leave empty to reuse the main chat model",
      rewritePromptSystem: "Rewrite System Prompt",
      rewritePromptSystemPlaceholder: "Leave empty to use default prompt",
      rewritePromptUser: "Rewrite User Prompt",
      rewritePromptUserPlaceholder: "Leave empty to use default prompt",
      maxCompletionTokens: "Max Completion Tokens",
      maxCompletionTokensDefault: "Default",
      maxCompletionTokensCustom: "Custom",
      fallbackStrategy:
        "Comment gérer lorsque le contenu pertinent n\'est pas trouvé dans la base de connaissances",
      fallbackResponse:
        "Texte fixe retourné lorsqu’il n’est pas possible de répondre",
      fallbackResponsePlaceholder: "Sorry, I cannot answer this question.",
      fallbackPrompt:
        "Prompt pour guider la réponse du modèle lorsque la réponse n’est pas trouvée dans la base de connaissances",
      fallbackPromptPlaceholder: "Leave empty to use default prompt",
      skillsConfig: "Skills",
      skillsConfigDesc:
        "Select a running sandbox, then pick skills below. Skills not on that sandbox show Install and can only be checked after they are installed.",
      skillsSelection: "Skill list",
      skillsSelectionDesc:
        "All workspace skills are listed here. Installed ones can be used now; others need Install first.",
      skillsAll: "All",
      skillsSelected: "Selected",
      skillsNone: "Disabled",
      selectSkills: "Select skills",
      selectSkillsDesc:
        "Check the skills this agent should use. Uninstalled skills cannot be checked — click Install on the right first.",
      skillsAllListHint:
        "All only includes skills already installed on this sandbox. Uninstalled skills are not added until you install them.",
      skillsGroupAvailable: "Available",
      skillsGroupUnavailable: "Unavailable",
      noSkillsAvailable: "The workspace catalog has no skills yet.",
      skillsNeedSandbox: "Select a sandbox first.",
      goSandboxSettings: "Configurer les sandboxs",
      goSkillSettings: "Manage skills",
      installToThisSandbox: "Install onto this sandbox",
      upgradeOnThisSandbox: "Upgrade this sandbox to the catalog version",
      installShort: "Install",
      viewInstallProgress: "Afficher la progression",
      skillNotInstalled: "Non installé",
      skillNotReady: "Pas prêt encore",
      skillDisabledOnSandbox: "Désactivé sur ce sandbox",
      sandboxBackend: "Sandbox",
      sandboxBackendDefault: "Désactivé",
      sandboxBackendHint:
        "Les scripts des compétences ne s’exécutent pas jusqu’à ce qu’un sandbox soit sélectionné.",
      sandboxBackendMissing: "Configuration supprimée",
      sandboxNoConfigs:
        "Ce workspace n’a pas encore de sandbox, donc les scripts des compétences ne s’exécuteront pas.",
      skillsInfoTitle:
        "Comment les compétences et le sandbox fonctionnent ensemble",
      skillsInfoContent:
        "Les compétences sont des modules de connaissances dont les scripts s’exécutent dans le sandbox sélectionné. La liste provient des compétences installées là-bas. Une fois qu’un sandbox de session existe, ses pièces jointes, artefacts et débogage restent liés à la configuration sur laquelle il a été créé — modifier le sandbox n’affecte que les sessions ultérieures.",
    },
    selector: {
      title: "Permissions des rôles",
      current: "Actuel",
      goToSettings: "Aller aux paramètres",
      sharedLabel: "Partagé",
      notReadyHint: "Non prêt. Configurer: {items}",
      notReadyStatus: "Configuration nécessaire",
      configureAction: "Configurer",
      sharedNotReadyContact:
        "Demandez à l’administrateur de l’organisation partagée de terminer la configuration",
      capabilitiesSection: "Capacités",
      webSearchCapability: "Recherche web",
      imageUploadCapability: "Téléchargement d’images",
      capabilityEnabled: "Activé",
      capabilityDisabled: "Désactivé",
      capabilitySupported: "Supporté",
      capabilityUnsupported: "Non pris en charge",
      capabilityUnconfigured: "Non défini",
    },
  },
  settings: {
    modelManagement: "Gestion des modèles",
    webSearchConfig: "Recherche web",
    autoCheckUpdate: "Mise à jour automatique",
    autoCheckUpdateDesc:
      "Quand activée, vérifie et télécharge automatiquement la dernière version en arrière-plan.",
    vectorStoreEngine: "Engine de base de données vectorielle",
    parserEngine: "Engine de parsing",
    storageEngine: "Engine de stockage",
    sandbox: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      pageHintTitle: "Qu’est-ce qu’un sandbox?",
      pageHint:
        "Un sandbox est un environnement isolé où les scripts de compétences des agents s\'exécutent. Un espace de travail peut avoir plusieurs configurations (Docker, E2B, CubeSandbox); chaque agent choisit une. Les compétences sont installées sur la page Gestion des compétences dans l\'image de la configuration sélectionnée. Les scripts restent désactivés jusqu\'à ce qu’une configuration soit sélectionnée.",
      editorDescription:
        "Configure un runtime d’espace de travail. Docker, CubeSandbox et E2B utilisent le même flux de gestion.",
      stepConnection: "Connexion",
      stepTemplate: "Modèle",
      stepRuntime: "Runtime",
      stepSkills: "Compétences",
      stepSkillsLocked:
        "Les compétences sont installées dans l’image de cette configuration. Enregistrez d’abord la configuration, puis revenez à cette étape.",
      setupProgress: "Progression de la configuration du sandbox",
      stepDescriptions: {
        connection:
          "Configurez le backend et vérifiez la connexion avant de charger les modèles.",
        template: "Choisissez un modèle prêt renvoyé par le cluster connecté.",
        runtime:
          "Configurez les paramètres d’exécution, les variables d’environnement et quand les mises à jour des images de compétences s’appliquent, puis enregistrez-les.",
        skills:
          "Installez les compétences dans l’image du sandbox de cette configuration. Une fois la configuration enregistrée, vous pouvez revenir à tout moment.",
      },
      back: "Retour",
      connectAndContinue: "Connecter et continuer",
      loading: "Chargement...",
      loadFailed: "Échec du chargement des clés API de plateforme",
      backend: "Sandbox",
      backendType: "Type de sandbox",
      backendTypePlaceholder: "Sélectionnez un type de sandbox",
      scriptPolicyLabel:
        "Permettre l\'exécution des scripts de compétences dans les sandboxes",
      scriptPolicyDesc:
        "Lorsque cette option est désactivée, les agents de cet espace de travail peuvent uniquement lire le contenu des compétences. Les sandboxes distants en cours d\'exécution sont libérés une fois leurs sessions terminées.",
      backendDescriptions: {
        cube: "CubeSandbox",
        e2b: "E2B",
        docker: "Docker",
      },
      dockerDisabledAlert:
        "Le conteneur isolé Docker n\\\'est pas activé sur cette déploiement",
      dockerDisabledHint:
        "Un docker.sock local est équivalent au root sur l\\\'hôte. Pour une installation privée à un seul ordinateur, un administrateur système peut l\\\'activer sous Paramètres → Paramètres système → Sécurité réseau.",
      dockerDisabledCard:
        "Le conteneur isolé Docker est désactivé sur cette déploiement; cette configuration ne créera pas de conteneurs",
      dockerHostRisk:
        "Vide ou unix:// utilise le démon Docker sur le serveur WeKnora, ce qui est équivalent au root sur cette machine. Utilisez-le uniquement pour une installation privée à un seul nœud. Préférez Cube ou E2B lorsque plusieurs espaces de travail partagent un hôte. Les terminaux tcp:// distants nécessitent un répertoire de certificats TLS.",
      addConfig: "Ajouter un conteneur isolé",
      viewClusterGuide: "Guide de configuration du cluster",
      configName: "Nom de la configuration",
      configNamePlaceholder: "par ex. Environnement de production E2B",
      configNameRequired: "Veuillez entrer un nom de configuration",
      configDescription: "Description",
      configDescriptionPlaceholder:
        "Optionnel, aide à distinguer plusieurs configurations de même type",
      createTitle: "Nouveau point de terminaison MCP",
      editTitle: "Modifier le point de terminaison MCP",
      sectionBasic: "Fondamentaux",
      sectionConnection: "Connexion",
      sectionRuntimeEnvironment: "Environnement d’exécution",
      sectionTemplate: "Modèle d’exécution",
      sectionRuntime: "Paramètres d’exécution",
      sectionNetwork: "Politique réseau",
      sectionEnvironment: "Variables d’environnement",
      networkHint:
        "Contrôle la mise en réseau sortante pour chaque conteneur utilisant cette configuration. Les modifications affectent uniquement les nouveaux conteneurs; les conteneurs existants conservent leur politique jusqu’à ce qu’ils soient récupérés.",
      egressDefault: "Défaut de sortie",
      egressAllowAll: "Autoriser le réseau public (par défaut)",
      egressDenyAll: "Refuser par défaut",
      egressPrecedence:
        "Ordre d’évaluation: autoriser, refuser, puis le par défaut. Les règles autorisant ont la priorité sur les règles refusant.",
      allowOut: "Destinations autorisées",
      allowOutPlaceholder: "Domaine/IP/CIDR, par exemple *.example.com",
      allowOutHelp:
        "Supporte IPv4, CIDR, domaines et jokers à étiquette simple tels que *.example.com (qui ne correspondent pas au domaine racine).",
      denyOut: "Destinations refusées",
      denyOutPlaceholder: "IP/CIDR uniquement, par exemple 169.254.169.254/32",
      denyOutHelp:
        "Les règles de refus ne correspondent qu\'à l’adresse IP de destination, donc les domaines ne sont pas pris en charge.",
      domainAllowNeedsDenyAll:
        'Quand les destinations autorisées contiennent un domaine, sélectionnez également "Refuser par défaut" ou ajoutez 0.0.0.0/0 aux destinations refusées; sinon, la liste blanche n’est pas efficace.',
      cubeL7Rules: "Règles d’accès HTTP (L7)",
      cubeL7RulesHelp:
        "Chaque règle nécessite un nom d’hôte ou un SNI; la couche réseau dérive uniquement les cibles autorisées à partir de ces champs. Les champs sont ET-és et les méthodes sont OR-és. S’applique uniquement à HTTP 80 / HTTPS 443. Les règles sont appliquées en premier qui correspond le mieux du haut vers le bas.",
      e2bHostRules: "Transformations de requêtes d’hôte",
      e2bHostRulesHelp:
        "Injecte des en-têtes par nom d’hôte. Une règle ne décide pas d’autoriser l’émission; son nom d’hôte doit également apparaître parmi les destinations autorisées.",
      ruleUntitled: "Règle sans titre",
      expandRule: "Élargir la règle",
      collapseRule: "Réduire la règle",
      moveRuleUp: "Déplacer la règle vers le haut",
      moveRuleDown: "Déplacer la règle vers le bas",
      ruleName: "Nom de la règle",
      ruleScheme: "Schéma",
      ruleSni: "SNI",
      ruleHost: "Hôte",
      ruleMethods: "Méthodes HTTP",
      rulePath: "Chemin",
      ruleAction: "Action",
      ruleAllow: "Autoriser",
      ruleDeny: "Refuser",
      ruleAudit: "Niveau d’audit",
      ruleInject: "Injecter des en-têtes",
      headerName: "Nom d’en-tête",
      headerValue: "Valeur d’en-tête",
      addTarget: "Ajouter une destination",
      addRule: "Ajouter une règle",
      addHeader: "Ajouter un en-tête",
      removeRule: "Supprimer une règle",
      noConfigs:
        "Aucun bac à sable pour l’instant. Les agents sans configuration d’espace de travail ne seront pas en mesure d’exécuter les scripts de compétences.",
      identityFieldHint:
        "Bien que cette configuration détienne des bac à sable, ceux-ci ne peuvent pas être modifiés: le type de backend, le point de terminaison de l’API, la clé API, le domaine de bac à sable, le point de terminaison du proxy.",
      connectionLockedBySkills:
        "Ce bac à sable a déjà des compétences. La connexion, les informations d’identification et le DNS redirigeraient la capture instantanée de la compétence, et le DNS ne s’applique que après la reconstruction d’un modèle. Créez plutôt un nouveau bac à sable.",
      connectionLockedByInFlight:
        "Une compétence est toujours en cours d’installation ou de suppression. La connexion, les informations d’identification et le DNS ne peuvent pas être modifiés jusqu’à ce que cela soit terminé.",
      viewSandboxes: "Instances en cours d’exécution",
      inventoryTitle: "Instances en cours d’exécution",
      inventoryDrawerDesc:
        "Les bac à sable que cette configuration détient encore, ainsi que les sessions et les agents associés.",
      inventoryFailed: "Échec du chargement de l’utilisation des bac à sable",
      sandboxCount: "Bac à sable",
      sandboxCountUnknown: "Inconnu (backend inaccessible)",
      inventoryUnverifiableHint:
        "Le backend est inaccessible, donc le nombre de bac à sable est inconnu — ce n’est pas la même chose que zéro.",
      inventorySessions: "Sessions",
      inventorySessionKind: "Conversation",
      inventoryEmpty: "Aucune session en cours",
      inventoryAgentsTitle: "Agents associés",
      inventoryUntitledSession: "Session non nommée",
      sandboxesStillLive:
        "Cette configuration détient encore {count} bac à sable(s) en cours d’exécution ou en pause, donc les champs d’identification ne peuvent pas être modifiés pour l’instant.",
      blockedHint:
        "Terminez ou supprimez ces sessions (la suppression d’une session détruit son bac à sable), ou créez une deuxième configuration et faites pointer les agents vers elle.",
      unverifiableBlocked:
        "Le backend ne peut pas être atteint pour vérifier si les bac à sable restent, donc les informations d’identification stockées ne seront pas écrabouillées.",
      unverifiableSaveHint:
        "Restorez d’abord la connectivité; si le backend est perdu pour toujours, créez une deuxième configuration et faites pointer les agents vers elle.",
      affectedSessions: "{count} session(s) concernées.",
      affectedAgents: "Agents using this config: {names}",
      confirmDelete: 'Supprimer le modèle "{name}"?',
      confirmDeleteWithAgents:
        'Delete sandbox "{name}"? {agents}They will fail on their next skill execution.',
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
      deleted: "Point de terminaison supprimé",
      forceDeleteTitle: "Sandbox usage cannot be verified",
      forceDeleteConfirm:
        "The backend cannot be reached to verify whether sandboxes remain. If it is gone for good you can force-delete this config; if it is only temporarily unreachable, forcing it leaves any remaining sandboxes with nobody to reclaim them. Force delete anyway?",
      forceDelete: "Force delete",
      disableScripts: "Disable sandbox execution",
      enableScripts: "Enable sandbox execution",
      disableScriptsConfirm:
        "All agents in this workspace — will no longer run skill scripts in a sandbox. They can still read skill content. Existing remote sandboxes are not destroyed automatically; end or delete the related sessions to release them. Continue?",
      scriptsDisabled: "Sandbox execution disabled for this workspace",
      scriptsEnabled: "Sandbox execution restored for this workspace",
      policySaveFailed: "Failed to update sandbox execution policy",
      legacyConfig: "Deprecated",
      namedBackendHint:
        "Workspace configuration is the only runtime source. Agents without one cannot execute skill scripts.",
      weknoraTemplateTitle: "WeKnora standard template",
      weknoraDockerImage: "WeKnora standard image",
      weknoraDockerImageHint:
        "Each session gets its own long-lived container. Scripts, shell commands and files all share it until the session ends or the idle timeout reclaims it.",
      weknoraTemplateOverview:
        "WeKnora provides the standard runtime. Templates are discovered after connecting and the standard one is created when missing.",
      weknoraTemplateDescription:
        "Includes the Python, Node.js, CLI tools, workspace path, and non-root execution user expected by WeKnora skills.",
      recommendedTag: "Recommended",
      cardTemplateConfigured: "Template configured",
      cardCredentialMissing: "Clé API manquante",
      cardTimeout: "Expiration {sec}s",
      cardTtl: "Durée de vie de l\'espace de travail {sec}s",
      cardVolumeMounted: "Volume monté",
      cardEnvVars: "{count} variables d\'environnement",
      cardPrivateEndpoints: "Points d\\\'entrée privés autorisés",
      templateNotConfigured: "Modèle non configuré",
      imageNotConfigured: "Image non configurée",
      templateApplied: "Appliqué",
      refreshTemplates: "Actualiser les modèles",
      templateSelectHelp:
        "Les modèles sont chargés à partir de ce cluster. La configuration enregistrée stocke l\\\'ID automatiquement.",
      templateSelectPlaceholder:
        "Connectez-vous au cluster pour charger les modèles",
      templateLoadHint:
        "Entrez les informations de connexion au cluster et cliquez sur Actualiser. Les modèles WeKnora manquants sont générés à partir de l\\\'image officielle de l\\\'Hub. Les modèles de bureau sont plus lourds; créez-les en cliquant sur la ligne suivante. Après avoir modifié le DNS ou l\\\'image, reconstruisez ce modèle.",
      templateLoadFailed: "Échec du chargement des modèles",
      standardTemplateProvisioning:
        "Le modèle WeKnora standard est en cours de création. Actualisez rapidement pour voir son état.",
      standardTemplateReplaced:
        "Le modèle standard précédent a été supprimé et une réconversion a commencé. Attendez qu\\\'il soit prêt.",
      templateNotReady:
        "Le modèle sélectionné n\\\'est pas prêt. Actualisez et attendez la fin de la reconstruction.",
      connectionPassed:
        "Connexion vérifiée. Les modèles suivants sont chargés à partir de ce cluster.",
      connectionPassedTitle: "Cluster connecté",
      templateStepHint:
        "Cette étape liste les modèles de cluster et construit l\\\'image officielle de CLI si elle n\\\'est pas présente. Les modèles de bureau (XFCE) sont plus lourds et sont créés uniquement lorsque vous cliquez sur Créer. Après avoir modifié le DNS ou l\\\'image, reconstruisez ce modèle. Vous pouvez continuer une fois que le modèle est prêt.",
      loadingTemplates: "Chargement des modèles à partir du cluster...",
      templateBuildingHint:
        "Ce modèle est en cours de construction. La liste s\\\'actualisera.",
      templateUntaggedHint:
        "Les reconstructions sont terminées mais aucune ne porte la balise par défaut, donc la création de l\\\'espace de travail ne peut pas résoudre ce modèle. Supprimez-le dans E2B et actualisez; WeKnora le reconstruira.",
      templateFailedReason: "Échec de la construction: {reason}",
      noTemplates: "Aucun modèle disponible",
      weknoraStandardTemplate: "Modèle standard WeKnora",
      createStandardTemplate: "Créer",
      createStandardTemplateHint:
        "Construit avec les paramètres de connexion actuels, y compris le DNS. Après avoir modifié ces paramètres, reconstruire à partir de la carte.",
      weknoraDesktopTemplate: "Modèle de bureau WeKnora",
      createDesktopTemplate: "Créer",
      createDesktopTemplateHint:
        "Construit un bureau graphique XFCE à partir de l\\\'image officielle de bureau. C\\\'est beaucoup plus grand que le modèle CLI; créez-le seulement lorsque vous avez besoin d\\\'une interface graphique utilisateur.",
      replaceStandardTemplate: "Reconstruire",
      replaceStandardTemplateConfirm:
        "Reconstruire le modèle standard WeKnora avec les paramètres actuels, y compris le DNS. Le modèle précédent qui pouvait être instancié n\\\'est supprimé qu\\\'après que la nouvelle reconstruction soit prête.",
      desktopTemplateProvisioning:
        "Le modèle de bureau WeKnora est en cours de création. Actualisez rapidement pour voir son statut.",
      desktopTemplateReplaced:
        "Le modèle de bureau précédent a été supprimé et une nouvelle reconstruction a commencé. Attendez qu\\\'elle soit prête. Le modèle CLI n\\\'est pas modifié.",
      desktopTemplateTag: "Bureau",
      replaceDesktopTemplateConfirm:
        "Reconstruire le modèle de bureau WeKnora avec les paramètres actuels, y compris le DNS. Le modèle précédent qui pouvait être instancié n\\\'est supprimé qu\\\'après que la nouvelle reconstruction soit prête. Le modèle CLI n\\\'est pas modifié.",
      templateLockedBySkills:
        "Ce bac à sable déjà possède des compétences. L\\\'environnement de compétences est lié à la capture instantanée actuelle, donc le modèle d\\\'exécution ne peut pas être modifié ou reconstruit. Créez un nouveau bac à sable et installez des compétences à partir du nouveau modèle.",
      templateLockedByInFlight:
        "Une compétence est toujours en cours d\\\'installation ou de suppression. Le modèle d\\\'exécution ne peut pas être modifié ou reconstruit jusqu\\\'au terme de cette opération.",
      templateUnnamed: "Modèle non nommé",
      templateFieldImage: "Image",
      templateFieldVersion: "Version",
      templateFieldId: "ID",
      templateFieldCreated: "Créé",
      templateFieldInstance: "Type d\\\'instance",
      templateFieldNetwork: "Réseau",
      templateFieldInternet: "Accès à Internet",
      templateInternetOn: "Activé",
      templateInternetOff: "Désactivé",
      templateReadyHint: "Le modèle “{name}” est prêt et sélectionné.",
      templateProvisioningHint:
        "Un modèle est toujours en construction. L\\\'état se rafraîchit automatiquement.",
      templateStatuses: {
        ready: "Prêt",
        building: "En construction",
        untagged: "Aucune étiquette par défaut",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        unknown: "Inconnu",
      },
      allowPrivateEndpoints: "Autoriser les points de terminaison privés",
      allowPrivateEndpointsHint:
        "Utilisez-le pour les contrôleurs de cluster privés auto-hébergés. Les adresses IP de serveurs DNS link-local et métadonnées cloud restent bloquées.",
      howToBuildTemplate:
        "Guide de configuration du cluster de sandbox et de modèle",
      noEnvVars: "Aucune variable d\\\'environnement supplémentaire.",
      fieldRequired: "{field} est requis",
      cubeApiKeyOptional:
        "Facultatif — laissez vide pour un CubeSandbox non authentifié",
      cubeApiKeyWhere:
        "Comment activer l\\\'authentification sur un cluster auto-hébergé",
      cubeDnsServers: "Serveurs DNS",
      cubeDnsServersHelp:
        "Facultatif. Adresses IP des serveurs DNS insérées dans le modèle WeKnora standard. Laissez vide pour utiliser l\\\'adresse par défaut du cluster (généralement 119.29.29.29). Si UDP/53 est bloqué sur les résolveurs publics, utilisez des adresses accessibles à partir du Cube host\\\'s /etc/resolv.conf, en excluant 10/8, 172.16/12 et 192.168/16. Les modèles standards entrent en vigueur uniquement après une reconstruction sur la carte du modèle.",
      cubeDnsServersPlaceholder:
        "e.g. 8.8.8.8, appuyez sur Entrée pour ajouter",
      e2bApiKeyHelp:
        "Créez-en un sur la page des clés API de l\\\'interface de tableau de bord E2B; elle commence généralement par e2b_.",
      e2bApiKeyWhere:
        "Obtenez une clé API de l\\\'interface de tableau de bord E2B",
      apiKeyPlaceholder: "Entrez la clé API",
      secretConfigured:
        "Secret configuré (ne pas montré à nouveau); entrez une nouvelle valeur pour effectuer une rotation",
      secretKeepHint: "Configurée — laissez vide pour la conserver",
      e2bApiUrlOptional:
        "Facultatif — l\\\'URL par défaut du SDK est utilisée lorsque cette valeur est vide",
      e2bDomainOptional:
        "Facultatif — l\\\'URL par défaut du SDK est utilisée lorsque cette valeur est vide",
      e2bProxyUrlOptional:
        "URL de la passerelle data-plane d’un cluster E2B compatible hébergé localement. Laissez vide pour accéder aux sandboxes via le domaine sandbox, comme E2B Cloud le fait",
      backends: {
        disabled: "Désactivé",
        local: "e.g. llama2:latest",
        docker: "Docker",
        cube: "CubeSandbox",
        e2b: "E2B",
      },
      apiUrl: "Point de terminaison API",
      proxyUrl: "Point de terminaison proxy",
      sandboxDomain: "Domaine de sandbox",
      apiKey: "Clé API",
      templateId: "ID du modèle",
      httpTimeout: "Timeout HTTP (en secondes)",
      httpTimeoutHelp:
        "Durée maximale autorisée pour que l’appel de gestion au backend prenne avant d\'être considéré comme inatteignable. Laissez vide signifie 30 secondes",
      sandboxTtl: "Durée de vie du sandbox (en secondes)",
      sandboxTtlHelp: "Durée avant que le sandbox ne soit mis en pause",
      dockerImage: "Image Docker",
      dockerHost: "Point de terminaison du démon Docker",
      dockerHostHelp:
        'Laissez vide pour suivre la CLI Docker locale (DOCKER_HOST ou le contexte Docker actuel), ce qui vous permet de ne pas taper /var/run/docker.sock. Pour un démon distant, utilisez tcp://host:2376, remplissez le répertoire du certificat TLS et activez "permettre les points de terminaison privés" pour les adresses RFC1918',
      dockerTlsCertPath: "Répertoire du certificat TLS",
      dockerTlsCertPathHelp:
        "Répertoire sur l’hôte WeKnora contenant ca.pem, cert.pem et key.pem. Obligatoire pour un démon distant; les certificats sont montés par le déploiement, jamais stockés ici",
      dockerIdleTtl: "Reclamation inactif (en secondes)",
      dockerIdleTtlHelp:
        "Le démon Docker n’a pas de délai d’inactivité propre. Un conteneur inactif pendant ce temps est récupéré par WeKnora et reconstruit lorsqu’une session continue. Laisser vide signifie 1800 secondes.",
      dockerCpuLimit: "Noyaux CPU",
      dockerCpuLimitHelp:
        "Noyaux CPU disponibles pour un conteneur; 0 utilise la valeur par défaut intégrée.",
      dockerMemoryLimit: "Limite de mémoire (Mo)",
      dockerMemoryLimitHelp:
        "Limite de mémoire en Mo pour un conteneur; 0 utilise la valeur par défaut intégrée.",
      dockerPidsLimit: "Limite de processus",
      dockerPidsLimitHelp:
        "Nombre maximal de processus qu’un conteneur peut créer; 0 utilise la valeur par défaut intégrée.",
      dockerNetworkMode: "Mode réseau",
      dockerNetworkModeHelp:
        'Défini par défaut sur le pont, qui nécessite des paquets à installer. Choisissez "aucun" pour ne pas autoriser la sortie du réseau. Docker filtre par réseau uniquement; les règles par domaine ne sont pas possibles ici.',
      dockerNetworkBridge: "pont (sortie autorisée)",
      dockerNetworkNone: "aucun (pas de sortie)",
      defaultTimeout: "Temps d’expiration de l’exécution (s)",
      defaultTimeoutHelp:
        "Le plus long que peut s’exécuter un script unique avant qu’il soit tué. Laisser vide signifie 60 secondes.",
      terminalIdleDisconnect:
        "Déconnexion de terminal / bureau en inactivité (s)",
      terminalIdleDisconnectHelp:
        "Après l\'ouverture du terminal ou du bureau, fermez-le si aucune interaction n\'est effectuée pendant ce temps afin que le sandbox puisse entrer en pause sur son TTL. Le terminal tient compte des entrées clavier et de la pseudoterminal (PTY), tandis que le bureau prend en compte les entrées souris et clavier. Laisser ce champ vide signifie 900 secondes; le minimum est de 60 secondes et le maximum est de 24 heures.",
      envVars: "Variables d’environnement",
      envKey: "Nom",
      envValue: "Valeur",
      envVarsHint:
        "Injectées dans chaque sandbox créé à partir de cette configuration. Les valeurs sont chiffrées au repos mais visibles pour les scripts à l\'intérieur du sandbox. Elles sont injectées uniquement lors de la création d\'un sandbox; pour les injecter à chaque exécution, ajoutez-les dans la page des secrets du sandbox.",
      addRow: "Ajouter",
      removeRow: "Supprimer",
      save: "Enregistrer la configuration",
      saveAndContinue: "Enregistrer et continuer",
      saved: "Enregistré. S\'applique aux nouvelles sessions.",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      testConnection: "Tester la connexion",
      deepCheck: "Vérification complète",
      recheck: "Vérifier à nouveau",
      deepCheckIntro:
        "La vérification complète crée un environnement de test temporaire, exécute un script, vérifie l\'accès sortant et le détruit.",
      deepCheckConfirm:
        "La vérification complète exécute un script temporaire. Les backends distants créent également un environnement de test réel, ce qui pourrait consommer une petite quantité de temps. Voulez-vous continuer?",
      checkPassed: "Toutes les vérifications ont réussi",
      checkFailed: "Échec de vérification",
      checkScopeConnection:
        "Seulement le plan de contrôle a été vérifié: le point de terminaison répond et les informations d’identification sont valides. Si un script effectivement s’exécute, cela reste à vérifier.",
      checkScopeFull:
        "Le point de terminaison, les informations d’identification, le modèle, l’exécution dans l’environnement de test et le réseau sortant ont tous été vérifiés de manière réelle.",
      checkScopePolicyRestricted:
        "L’accès sortant est restreint par la politique, donc l’égress n’a pas été probé. Le point de terminaison, les informations d’identification, le modèle et l’exécution dans l’environnement de test ont été vérifiés.",
      checkPendingHint:
        "{names} ne peuvent être confirmés qu’avec une vérification complète, qui crée un environnement de test temporaire, exécute un script et le détruit.",
      skipReasons: {
        needs_deep_check: "Nécessite une vérification complète",
        control_plane_unreachable:
          "Ignoré: le plan de contrôle est inatteignable",
        sandbox_not_created: "Ignoré: l’environnement de test n’a pas été créé",
        sandbox_exec_failed:
          "Ignoré: l’exécution dans l’environnement de test a échoué",
        egress_restricted_by_policy:
          "Restreint par la politique de réseau (cette configuration refuse par défaut l’égress)",
      },
      checks: {
        client_build: "Construction du client",
        api_url_reachable: "Accessibilité du point de terminaison",
        credential_valid: "Validité des informations d’identification",
        template_exists: "Existence du modèle",
        sandbox_exec: "Exécution dans l’environnement de test",
        egress_available: "Réseau sortant",
      },
      manageSkills: "Gérer les compétences",
      cardSkillsNone: "Aucune compétence installée",
      cardSkillsMore: "+{count}",
      skillInstallerModel: "Installer un modèle",
      skillInstallerModelHint:
        "Utilisé par l\'agent d\'installation intégré. Choisissez un modèle de conversation qui supporte les appels d\'outils.",
      skillInstallerModelRequired:
        "Sélectionnez d\'abord un modèle d\'installeur",
      skillInstallerModelSaveFailed:
        "Échec de la sauvegarde du modèle d\'installeur",
      skillRollout: "Comment la nouvelle image de compétence prend effet",
      skillRolloutHint:
        "L\'installation ou la suppression d\'une compétence génèrent une nouvelle image. Cela contrôle si les sessions déjà ouvertes passent à cette image.",
      skillRolloutNextTurn:
        "Reconstruire les sessions ouvertes lors de la prochaine conversation",
      skillRolloutNewSession:
        "Conserver les sessions ouvertes sur leur sandbox actuel; seules les nouvelles sessions utilisent l\'image nouvelle",
      skillRolloutSaveFailed:
        "Échec de la sauvegarde de l\'option de déploiement",
      skillInstallGroup: "Installer une nouvelle compétence",
      skillInstalledGroup: "Installées",
      skillUploadClick: "Cliquez pour télécharger un bundle zip",
      skillUploadDrag: "ou faites glisser un fichier ici",
      skillUploadHint:
        "L\'installation écrit la compétence sur l\'image actuelle et prend une nouvelle capture instantanée. Cela peut prendre plusieurs minutes. La conversation actuelle n\'est pas interrompue; les sessions ouvertes reconstruisent leur sandbox lors de la prochaine conversation, ce qui nettoie l\'espace de travail de la session.",
      skillUploadHintNewSession:
        "L’installation inscrit la compétence sur l’image actuelle et capture instantanément une nouvelle image. Cette opération peut prendre plusieurs minutes. Les sessions ouvertes préservent leur sandbox jusqu\'à leur fermeture; seules les nouvelles sessions utilisent cette installation.",
      skillSourceSection: "Installation à partir d’une source",
      skillSourceSectionHint:
        "Collez un lien ClawHub, GitHub ou SkillHub, ou {\\\'@\\\'}owner/slug. Le bundle ne doit pas dépasser {size} MB.",
      skillUploadSection: "Téléchargement d’un bundle local",
      skillUploadSectionHint:
        "Faites glisser un zip qui contient SKILL.md ci-dessous, ou cliquez pour sélectionner un fichier. Le bundle ne doit pas dépasser {size} MB.",
      skillSourcePlaceholder:
        "ClawHub: {\\\'@\\\'}owner/slug. GitHub/SkillHub: collez l’URL complète",
      skillSourceInstall: "Installer",
      skillInstallOr: "ou",
      skillSourceFailed:
        "Échec de l’installation de la compétence à partir du registre",
      skillUploadFailed: "Échec du téléchargement de la compétence",
      skillBundleTooLarge:
        "Le bundle de compétence ne doit pas dépasser {size} MB.",
      skillBundleTooManyFiles:
        "Le répertoire de compétence ne peut pas contenir plus de {count} fichiers.",
      skillBundleTooManyZipEntries:
        "L’archive ne peut pas contenir plus de {count} entrées zip.",
      skillUploading: "Téléchargement {percent}%",
      skillUploadAccepted: "Début de l’installation de la compétence",
      skillStatusInstalling: "Installation",
      skillStatusReady: "Prêt",
      skillStatusFailed: "Échec",
      skillStatusRemoving: "Désinstallation",
      skillStatusLabel: "Statut",
      skillDisableHint:
        "Désactiver = la compétence est invisible pour l’agent, les fichiers restent dans l’image. Les modifications prendront effet à l’exécution suivante de la session.",
      skillDeleteHint:
        "Supprimer supprime le répertoire de compétence de l’image et prend une nouvelle capture d’écran. La conversation en cours n’est pas interrompue; les sessions ouvertes reconstruisent leur sandbox à l’étape suivante, ce qui nettoie l’espace de travail de la session.",
      skillDeleteHintNewSession:
        "Supprimer supprime le répertoire de compétence de l’image et prend une nouvelle capture d’écran. Les sessions déjà ouvertes conservent leur sandbox actuel jusqu’à la fin; seules les nouvelles sessions débutées perdent cette compétence.",
      skillRemoveInProgress: "Désinstallation",
      skillRemoveWaiting:
        "Désinstallation de l’image en cours. Attente de l’avancement...",
      skillRemoveDone:
        "Désinstallation de « {name} » de ce sandbox. Il reste dans le catalogue, donc vous pouvez le réinstaller plus tard.",
      skillRemoveStage: {
        accepted: "Accepté",
        sandbox_ready: "Ouverture d’un sandbox de maintenance",
        removed: "Fichiers supprimés, construction d’une nouvelle image",
        done: "Désinstallation complète",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      },
      imageInfoTitle: "Image actuelle",
      imageInfoSnapshot: "ID de capture",
      imageInfoGeneration: "Version",
      imageInfoBuiltAt: "Construit le",
      imageInfoBaseTemplate: "Modèle de base",
      imageInfoRuntimeTemplate: "Modèle d’exécution",
      imageInfoUsingBase:
        "Aucune compétence n’est installée. Les sessions démarrent à partir du modèle d’exécution sélectionné.",
      imageInfoEmpty: "Utilisation du modèle de base",
      imageInfoUnset: "Non défini",
      skillTranscript: "Afficher l’installation en cours",
      skillTranscriptLive: "Journal d’installation",
      skillTranscriptLiveHint:
        "En cours d’installation — cliquez pour regarder",
      skillTranscriptTitle: "Installation en cours",
      skillTranscriptHide: "Masquer l’installation en cours",
      skillGuidance: {
        placeholder: "Entrez des secondes, plage recommandée 60-1800",
        send: "Envoyer",
        retry: "Recommencer",
        pending: "En attente",
        injected: "Injecté",
        unprocessed: "Non traité; incluez-le lors de la réinstallation",
        unavailable: "Indisponible",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      },
      skillTranscriptEmpty:
        "Cette installation n’a laissé aucune transcription.",
      skillTranscriptWaiting:
        "L’installation a commencé. Attente du journal du processus…",
      installCommandRunning: "Commande en cours d’exécution",
      installCommandWaiting:
        "Attente de la sortie de la commande. Le temps écoulé continue d'être mis à jour.",
      skillFiles: "Afficher les fichiers",
      skillFilesTitle: "Fichiers",
      skillFilesEmpty:
        "Cette compétence n’a pas encore de fichiers à parcourir.",
      skillFilesLoadFailed: "Échec du chargement des fichiers de compétence",
      skillFilesFileLoadFailed: "Impossible de lire ce fichier",
      skillFilesBinary:
        "Ce fichier est binaire et ne peut pas être prévisualisé.",
      skillFilesTruncated:
        "Le fichier est volumineux; seul le début est affiché.",
      skillFilesSelectHint: "Sélectionnez un fichier à gauche pour le voir",
      skillFilesPreview: "Aperçu",
      skillFilesSource: "Source",
      skillLoadFailed: "Échec du chargement des compétences",
      skillToggleFailed: "Échec de la mise à jour de la compétence",
      skillDeleteAccepted: "Suppression de la compétence lancée",
      skillRetry: "Reinstaller",
      skillRetryHint:
        "Réessayer avec le bundle stocké; aucune re-upload n\'est nécessaire",
      skillRetryAccepted: "Reinstallation lancée",
      skillRetryFailed: "Échec de la réinstallation",
      skillStop: "Arrêter l\'installation",
      skillStopHint:
        "Abandonner cette installation, puis essayer à nouveau ou désinstaller",
      skillStopAccepted: "Arrêté",
      skillStopFailed: "Échec de l\'arrêt",
      skillEmpty:
        "Aucune compétence installée pour le moment. Coller une URL de registre ou télécharger un zip.",
      skillVersion: "Version",
      skillVersionEmpty: "Non spécifiée",
      skillError: "Erreur",
      skillEnabled: "Compétence activée",
      skillDisabled: "Compétence désactivée",
      skillEnv: {
        toggle: "Importer à partir du code",
        toggleHide: "Masquer les variables d’environnement",
        none: "Ne pas envoyer les champs de réflexion",
        workspaceTitle: "Valeurs au niveau du workspace",
        workspaceHint:
          "Chaque membre qui n’a pas défini sa propre valeur utilise celle-ci. Les membres peuvent définir leur propre valeur dans les Paramètres > Secrets du bac à sable.",
        required: "Obligatoire",
        isSet: "Définie",
        notSet: "Non définie",
        placeholderSet: "Enregistrée, tapez pour remplacer",
        placeholderUnset: "Entrez une valeur",
        save: "Enregistrer la configuration",
        saveSuccess: "Paramètres d’intégration API enregistrés",
        saveFailed:
          "Échec de l’enregistrement de l’information d’identification",
        clear: "Effacer",
        clearConfirm:
          "Supprimer votre propre valeur pour {name}? La valeur de l’espace de travail, si elle existe, sera appliquée à nouveau après cela.",
        clearSuccess: "Votre valeur a été supprimée.",
        valueTooLong: "Une valeur ne peut pas dépasser {max} octets.",
      },
    },
    skills: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      helpTooltip:
        "Un skill du catalogue n’a pas besoin d\'être installé nulle part. Les scripts ne s’exécutent qu’après l’installation du skill dans l’image du sandbox que l’agent utilise. Les images Docker, Cube et E2B ne sont pas interchangeables — installez-les une fois par sandbox.",
      goSandboxSettings: "Configurer les sandboxs",
      noConfigsDesc:
        "Aucun sandbox pour l’instant. Les compétences ont besoin d’une image pour y installer.",
      addSkill: "Ajouter une compétence",
      addDrawerDesc:
        "Colllez une source ou téléchargez un zip pour l’ajouter au catalogue. Vous pouvez installer maintenant sur des sandboxs ou plus tard.",
      addProgress: "Ajouter un progrès",
      addStepRegister: "Enregistrer",
      addStepInstall: "Installer",
      addStepRegisterDesc:
        "Colllez une source ou téléchargez un zip pour ajouter la compétence au catalogue de l’espace de travail.",
      addStepInstallDesc:
        "Confirmez le skill analysé, puis choisissez les sandboxs sur lesquels l’installer. Vous pouvez sauter cette étape et installer plus tard depuis la liste.",
      addFinish: "Terminé",
      addRegisteredAs: "Enregistrée sous «{name}»",
      addFileSelected: "Fichier sélectionné {name}",
      addClearFile: "Effacer",
      emptyDesc:
        "Créez un espace partagé ou rejoignez-en un existant avec un code d’invitation",
      emptyNoSandboxHint:
        "Il n’y a pas de sandbox pour l’instant. Les compétences scriptées ne peuvent pas s\'exécuter avant d\'être installées dans une image.",
      installSkill: "Ajouter une compétence",
      installDrawerDesc: "Installer dans l\'image {name}.",
      installToSandbox: "Installer sur le sandbox",
      installToSandboxDesc:
        "Chaque backend de sandbox nécessite son propre install. Les images Docker, Cube et E2B ne sont pas interchangeables.",
      pickSandboxes: "Installer sur les sandboxs",
      pickSandboxesHint:
        "La compétence est intégrée dans l’image utilisée par chaque sandbox sélectionné. Les images Docker, Cube et E2B ne sont pas interchangeables — installez une fois par sandbox. Vous pouvez sauter cette étape et installer plus tard à partir du catalogue.",
      noSandboxToInstall: "Aucun sandbox n’est disponible pour l’installation.",
      noInstalls: "Non installée sur aucun sandbox",
      installedOn: "Installée sur",
      installedOnName: "Installée sur {name}",
      installedCount: "Installée sur {count} sandboxes",
      installPanelGroup: "Installée",
      installPanelAvailable: "Non installée",
      viewInstallProgress: "Afficher la progression",
      manageOnSandbox: "Gérer cette compétence sur “{name}”",
      manageDrawerDesc:
        "Gérer l\\\'activation, les variables et l\\\'uninstallation sur le sandbox “{name}”.",
      manageEnable: "Activer",
      manageUninstall: "Désinstaller du sandbox",
      manageUninstallConfirm: "Désinstaller “{name}” de ce sandbox?",
      deleteCatalog: "Supprimer du catalogue",
      deleteCatalogConfirm:
        "Supprimer “{name}” du catalogue? Désinstallez d’abord de tous les sandboxes.",
      deleteCatalogBlocked:
        "Désinstallez d’abord cette compétence de tous les sandboxes.",
      deleteSuccess: "Clé API de plateforme supprimée",
      registerAccepted: "Ajoutée au catalogue",
      installAccepted: "Installation démarrée",
      installPartial:
        "Démarrée sur certains sandboxes. {failed} ne peut pas démarrer.",
      installOutdated: "Différe du catalogue",
      upgrade: "Mettre à jour",
      upgradeCount: "Mettre à jour {count}",
      upgradeTitle: "Mettre à jour la compétence",
      upgradeDrawerDesc:
        "Mettre à jour {name} sur les sandboxes sélectionnés à la version du catalogue. Chaque sandbox continue d’exécuter sa version actuelle jusqu’à ce que la mise à jour soit terminée, et une mise à jour échouée la laisse inchangée.",
      upgradeAvailable: "Mise à jour disponible",
      upgradeFromTo: "Mettre à jour {from} → {to}",
      upgradeAccepted: "Mise à jour en cours",
      noSandboxToUpgrade: "Aucun sandbox nécessite une mise à jour.",
      upgradeRowTitle: "Nouvelle version disponible",
      upgradeRowHint:
        "Ce sandbox exécute une version différente du catalogue. Il continue d\'exécuter cette version jusqu\'à ce que la mise à jour soit terminée, et une mise à jour échouée la laisse inchangée.",
      upgradeRowHintVersions:
        "Ce sandbox exécute {from}; le catalogue est à {to}. {from} continue d\'exécuter jusqu\'à ce que la mise à jour soit terminée, et une mise à jour échouée la laisse inchangée.",
      upgradeRowHintFailed:
        "L’installation sur ce sandbox a échoué, et le catalogue a progressé. La mise à jour installe la version du catalogue à la place.",
      upgradeRowHintFailedVersions:
        "L’installation de {from} sur ce sandbox a échoué, et le catalogue est à {to}. La mise à jour installe {to} à la place.",
      servedWhileUpgrading:
        "Mise à jour en cours; toujours en cours d\'exécution de la version {version}",
      servedWhileUpgradingPlain:
        "Mise à jour en cours; toujours en cours d\'exécution de la version précédente",
      servedAfterFailure:
        "La mise à jour a échoué; toujours en cours d\'exécution de la version {version}",
      servedAfterFailurePlain:
        "La mise à jour a échoué; toujours en cours d\'exécution de la version précédente",
      loadFailed: "Échec du chargement des clés API de plateforme",
    },
    mcpService: "Service MCP",
    versionInfo: "Informations sur la version",
    taskQueue: "Files d’attente des tâches",
    tenantInfo: "Informations sur le workspace",
    workspaceSettings: "Paramètres du workspace",
    navGroups: {
      account: "Compte",
      workspace: "Workspace",
      modelsRuntime: "Modèles",
      dataExtensions: "Data & Extensions",
      systemAdministration: "Administration système",
      platform: "Plateforme",
    },
    roleDenied: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    capabilityUnavailable:
      "Cette fonctionnalité n’est pas disponible avec le déploiement actuel. Vous avez été redirigé vers une page accessible.",
    weknoraCloud: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      viewDocs: "Voir la documentation pour la clé API",
      unconfigured: "Non configurée",
      configured: "Configurée",
      expired: "Identifiants WeKnora Cloud expirés",
      expiredDefault:
        "La clé de chiffrement a changé après le redémarrage du service. Les identifiants enregistrés ne peuvent pas être déchiffrés. Veuillez entrer de nouveau les identifiants.",
      reconfigure: "Reconfigurer",
      appIdLabel: "APPID",
      appIdDesc: "ID de l’application WeKnora Cloud",
      appIdPlaceholder: "Entrez APPID",
      appSecretLabel: "APPSECRET",
      appSecretDesc: "Secret de l’application WeKnora Cloud",
      appSecretPlaceholder: "Entrez APPSECRET",
      saveHint:
        "Les identifiants seront validés et chiffrés avant d’être enregistrés.",
      saveBtn: "Enregistrer les identifiants",
      usageTitle: "Guide d\'utilisation",
      usageSteps:
        "1. Enregistrer l’APPID et l’APPSECRET\\n2. Inscrire chat, embedding, rerank et vlm dans les modèles Cloud ci-dessous\\n3. Parser: Configurations de la base de connaissances → Engine d’analyse → WeKnora Cloud",
      fillRequired: "Veuillez entrer l’APPID et l’APPSECRET",
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      credentialConfigured: "Identifiants WeKnoraCloud configurés.",
      credentialExpired: "Identifiants expirés. Veuillez reconfigurer.",
      credentialUnconfigured:
        "Identifiants WeKnoraCloud non configurés. Veuillez configurer d’abord l’APPID et l’APPSECRET.",
      checkingStatus: "Vérification du statut des identifiants...",
      goToSettings: "Aller aux paramètres",
      modelHintConfigured:
        "Identifiants WeKnoraCloud configurés. Consultez les modèles pris en charge dans",
      modelHintDocsLink: "Documentation API",
      modelsSection: {
        title: "Permissions des rôles",
        descReady:
          "Inscrivez les quatre modèles standard de WeKnora Cloud pour chat, récupération, reranking et vision.",
        descPending:
          "Enregistrez les identifiants ci-dessus avant d’ajouter les modèles cloud ici.",
        statusAdded: "Ajouté",
        statusPending: "À examiner",
        addOne: "Ajouter",
        addAllBtn: "Ajouter tous les modèles manquants ({count})",
        addAllConfirm: "Confirmer",
        confirmAddOne: 'Ajouter le modèle {type} "{name}"?',
        confirmAddAll:
          "Ajouter tous les {count} modèles cloud manquants en une seule opération?",
        allReady: "Tous les quatre modèles cloud sont prêts",
      },
      addModelsSuccess: "{count} modèles ajoutés avec succès",
      addModelsPartial: "{success} modèles ajoutés, {failed} échoués",
      addModelsFailed: "Échec de l’ajout des modèles",
      addModelsEmbeddingFailed:
        "Échec du test de connexion d’embedding; dimension vectorielle non détectée",
      addModelsDisplayName: {
        chat: "Requêtes",
        embedding: "Embedding",
        rerank: "ReRank",
        vllm: "Vision",
      },
    },
    system: "Prompt système",
    parser: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      supportedFileTypes: "Formats Supportés",
      statusSection: "Statut",
      configSection: "Configuration",
      featuresLabel: "Fonctionnalités",
      loading: "Chargement...",
      retry: "Recommencer",
      noEngineDetected:
        "Aucun engine de parser détecté. Veuillez vous assurer que le service DocReader fonctionne correctement.",
      disconnected: "La connexion a été perdue",
      connected: "Connecté",
      available: "Variables disponibles: ",
      unavailable: "Indisponible",
      builtinDesc:
        "Engine de parser intégré de DocReader (docx/pdf/xlsx et autres formats complexes)",
      currentAddr: "Actuel",
      envVarHint:
        "Pour modifier, définissez les variables d’environnement DOCREADER_ADDR et DOCREADER_TRANSPORT (grpc/http), puis redémarrez le service.",
      selfHostedEndpoint: "Self-hosted Endpoint",
      formulaRecognition: "Formula Recognition",
      tableRecognition: "Table Recognition",
      parseMethodLabel: "PDF Parsing Method",
      parseMethodAuto: "Auto-detect (Recommended)",
      parseMethodOCR: "Force OCR",
      parseMethodText: "Text extraction only",
      parseMethodHint:
        "Auto mode uses OCR for scanned PDFs and extracts the native text layer from digital PDFs.",
      sealRecognition: "Seal Recognition",
      chartRecognition: "Chart Recognition",
      language: "Langue",
      testConnection: "Tester la connexion",
      docs: "Docs",
      loadFailed: "Échec du chargement des clés API de plateforme",
      ensureDocreaderConnected:
        "Please ensure the DocReader service is configured via environment variables and connected",
      checkDoneStatusUpdated:
        "Checked with current parameters. Status above has been updated.",
      checkSuccess: "Test Connection Successful",
      checkFailed: "Échec de vérification",
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      mineruEndpointPlaceholder: "e.g. https://your-mineru.example.com",
      defaultPipeline: "Default pipeline",
      languagePlaceholder:
        "Par exemple zh ou en; vide signifie détection automatique",
      mineruCloudApiKeyPlaceholder: "MinerU Cloud API Key",
      vlmLabel: "vlm (Visual Language Model)",
      mineruHtmlLabel: "MinerU-HTML (HTML Parsing)",
      serverUrl: "Server URL",
      vlmServerUrlPlaceholder: "e.g. http://your-vllm-server:8000",
      vlmServerUrlHint:
        "Required when Backend is vlm-http-client or hybrid-http-client",
      paddleocrVlEndpointPlaceholder: "e.g. http://your-paddleocr-vl:8080",
      paddleocrVlEndpointHint:
        "Base URL of the full PaddleOCR-VL pipeline service; no /layout-parsing suffix needed",
      paddleocrVlCloudTokenPlaceholder: "Jeton AI Studio PaddleOCR-VL",
    },
    storageBackend: {
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      empty: "Aucune clé API de plateforme",
      defaultTag: "Défaut",
      add: "Ajouter une source d_a_t_a",
      editTitle: "Modifier le point de terminaison MCP",
      createTitle: "Nouveau point de terminaison MCP",
      editSubtitle:
        "Mettre à jour la configuration de connexion de cette instance de stockage.",
      createSubtitle:
        "Ajouter une nouvelle instance de stockage pour les fichiers et les images.",
      basicSection: "Basique",
      nameLabel: "Nom",
      namePlaceholder: "Par exemple: automatisation des opérations centrales",
      providerLabel: "Fournisseur",
      modeLabel: "Mode d\\\'importation",
      modeRemote: "Instance distante",
      modeEnv: "Variables d\\\'environnement",
      connectionSection: "Connexion",
      optionalPlaceholder: "Optionnel",
      advancedSection: "Options avancées",
      pathPrefixLabel: "Préfixe de chemin",
      useSslDesc: "Connectez-vous à MinIO via HTTPS",
      forcePathStyleDesc: "Utiliser le style de chemin",
      useTempBucketDesc: "Utiliser un conteneur temporaire",
      tempBucketLabel: "Conteneur temporaire",
      tempBucketPlaceholder: "Optionnel, pour les fichiers temporaires",
      tempRegionLabel: "Région du conteneur temporaire",
      tempRegionPlaceholder: "Laissez vide pour utiliser la région principale",
      testConnection: "Tester la connexion",
      localStorage: "Stockage local",
      setDefault: "Définir comme par défaut",
      edit: "Modifier",
      delete: "Supprimer",
      testSuccess: "Connexion réussie",
      testFailed: "Connexion échouée",
      nameRequired: "Entrez un nom",
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      defaultUpdated: "Stockage par défaut mis à jour",
      deleteTitle: "Supprimer une instance de stockage",
      deleteConfirm:
        "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
    },
    storage: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      basicSection: "Basique",
      modeSection: "Mode de Déploiement",
      credentialsSection: "Connexion",
      bucketSection: "Dépôt",
      useSslDesc: "Connectez-vous à MinIO via HTTPS",
      loading: "Chargement...",
      retry: "Recommencer",
      defaultEngine: "Engine par défaut",
      defaultEngineDesc:
        "L\'engine de stockage par défaut lors de la création de nouvelles bases de connaissances",
      engineLocal: "Local",
      engineCos: "Tencent Cloud COS",
      engineTos: "Volcengine TOS",
      engineOss: "Alibaba Cloud OSS",
      localTitle: "Stockage Local",
      localDesc:
        "Stockez les fichiers sur le système de fichiers local du serveur, adapté pour les déploiements monolithiques.",
      available: "Variables disponibles: ",
      needsConfig: "Nécessite une Configuration",
      configurable: "Configurable",
      pathPrefix: "Préfixe de Chemin (facultatif)",
      pathPrefixPlaceholder: "ex. weknora/images",
      prefixPlaceholder: "ex. weknora",
      bucketName: "Nom du Dépôt",
      bucketPlaceholder: "Nom du dépôt",
      minioDesc:
        "Stockage d’objets auto-hébergé compatible S3, adapté pour les réseaux privés et les déploiements de cloud privé.",
      minioDocker: "Déploiement Docker",
      minioRemote: "MinIO distant",
      minioDockerDetected:
        "Variables d’environnement MinIO déployées via Docker détectées. Les informations de connexion sont fournies par les variables d’environnement, aucune entrée manuelle n’est nécessaire.",
      minioDockerNotDetected:
        "Variables d’environnement MinIO (MINIO_ENDPOINT, etc.) non détectées. Veuillez vérifier votre configuration Docker Compose.",
      minioRemoteHint:
        "Connectez-vous à un service MinIO distant. Des informations de connexion manuelles sont nécessaires.",
      cosTitle: "Tencent Cloud COS",
      cosDesc:
        "Stockage d’objets de Amazon Web Services (AWS), adapté pour le déploiement sur des clouds publics avec l’accélération CDN.",
      cosSecretIdPlaceholder: "Identifiant secret de l\'API Tencent Cloud",
      cosSecretKeyPlaceholder: "Clé secrète de l\'API Tencent Cloud",
      cosAppIdPlaceholder: "ID de l\'application de compte Tencent Cloud",
      tosTitle: "Volcengine TOS",
      tosDesc:
        "Service d\'objets de Volcengine, adapté pour le déploiement sur des clouds publics.",
      tosAccessKeyPlaceholder: "Clé d\'accès Volcengine",
      tosSecretKeyPlaceholder: "Clé secrète Volcengine",
      s3Title: "AWS S3",
      s3Desc:
        "Services d\'objets de Amazon Web Services (AWS) et compatibles avec S3, adaptés pour le déploiement sur des clouds publics.",
      s3AccessKeyPlaceholder: "Clé d\'accès AWS",
      s3SecretKeyPlaceholder: "Clé secrète AWS",
      s3DefaultCredentialsHint:
        "Laissez les deux clés vides pour utiliser la chaîne d\'informations d\'identification AWS par défaut (rôle IAM, IRSA / identité web, environnement ou configuration partagée).",
      s3EndpointPlaceholder:
        "Facultatif; laissez vide pour utiliser l\'endpoint régional AWS",
      ks3Title: "Kingsoft Cloud KS3",
      ks3Desc:
        "Service d\'objets de Kingsoft Cloud, compatible avec Amazon Web Services (AWS), adapté pour le déploiement sur des clouds publics.",
      ks3AccessKeyPlaceholder: "Clé d\'accès Kingsoft Cloud",
      ks3SecretKeyPlaceholder: "Clé secrète Kingsoft Cloud",
      ks3EndpointPlaceholder: "par ex. ks3-cn-beijing.ksyuncs.com",
      ks3RegionPlaceholder: "par ex. BEIJING",
      engineKs3: "Kingsoft Cloud KS3",
      obsTitle: "Huawei Cloud OBS",
      obsDesc:
        "Service d\\\'objets de l\\\'Huawei Cloud, adapté pour le déploiement sur des clouds publics.",
      obsAccessKeyPlaceholder: "Clé d\\\'accès Huawei Cloud",
      obsSecretKeyPlaceholder: "Clé secrète Huawei Cloud",
      obsEndpointPlaceholder: "par ex. obs.cn-north-4.myhuaweicloud.com",
      obsRegionPlaceholder: "par ex. cn-north-4",
      engineObs: "Huawei Cloud OBS",
      ossTitle: "Alibaba Cloud OSS",
      ossDesc:
        "Service d\\\'objets de l\\\'Alibaba Cloud, adapté pour le déploiement sur le cloud public.",
      ossAccessKeyPlaceholder: "Clé d\\\'accès Alibaba Cloud",
      ossSecretKeyPlaceholder: "Clé secrète Alibaba Cloud",
      console: "Console",
      docs: "Docs",
      testConnection: "Tester la connexion",
      loadFailed: "Échec du chargement des clés API de plateforme",
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      unknownError: "Erreur inconnue",
      requestFailed: "Échec de la soumission de la demande, veuillez réessayer",
    },
  },
  webSearchSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    basicSection: "Basique",
    credentialsSection: "Connexion",
    optionsSection: "Options",
    providersTitle: "Fournisseurs d\\\' moteurs de recherche",
    addProvider: "Ajouter un fournisseur",
    editProvider: "Modifier le fournisseur",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    providerNameLabel: "Nom",
    providerNamePlaceholder: "par ex., Recherche Bing de production",
    providerTypeLabel: "Type de fournisseur",
    providerDescLabel: "Notes",
    providerDescPlaceholder: "Optionnel, par ex., pour les tests",
    engineIdLabel: "ID du moteur",
    setAsDefault: "Définir comme par défaut",
    testConnection: "Tester la connexion",
    testing: "Test en cours de {name}...",
    viewDocs: "Voir la documentation pour la clé API",
    noProvidersDesc:
      "Ajoutez un fournisseur de recherche web pour permettre à vos agents de récupérer des informations en temps réel sur Internet.",
    setAsDefaultDesc:
      "Ce fournisseur sera utilisé par défaut lorsque l\\\'agent ne spécifie pas un",
    proxyUrlLabel: "Proxy HTTP",
    proxyUrlPlaceholder:
      "par ex. http://proxy.example.com:3128 (facultatif; http/https uniquement)",
    proxyUrlHelp:
      "Utiliser lorsqu\\\'une connexion à l’API de recherche nécessite un proxy; laisser vide pour utiliser les variables d’environnement HTTP_PROXY/HTTPS_PROXY.",
    apiKeyLabel: "Clé API",
    apiKeyOptionalLabel: "Clé API (facultative)",
    baseUrlLabel: "URL de base",
    baseUrlPlaceholder: "e.g. https://api.openai.com/v1",
    apiKeyPlaceholder: "Entrez la clé API",
    toasts: {
      providerCreated: "Fournisseur de recherche créé",
      providerUpdated: "Fournisseur de recherche mis à jour",
      providerDeleted: "Fournisseur de recherche supprimé",
      testSuccess: "Connexion réussie",
      testFailed: "Connexion échouée",
    },
  },
  vectorStoreSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    basicSection: "Basique",
    storesTitle: "Base de données vectorielles",
    addStore: "Ajouter une base de données vectorielle",
    editStore: "Modifier une base de données vectorielle",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    emptyDesc:
      "Créez un espace partagé ou rejoignez-en un existant avec un code d’invitation",
    engineTypeLabel: "Type d’engin",
    nameLabel: "Nom",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    connectionInfo: "Informations de connexion",
    advancedIndexConfig: "Paramètres avancés",
    envTag: "DEFAULT",
    testConnection: "Tester la connexion",
    testing: "Test en cours de {name}...",
    immutableNotice:
      "Le type d’engin, la connexion et les paramètres de l’index ne peuvent pas être modifiés après la création. Pour les modifier, supprimez et recréez.",
    insecureSkipVerifyWarning:
      "Désactiver la vérification du certificat TLS expose la connexion aux attaques par injection au milieu. Utilisez-le uniquement pour des clusters de développement auto-signés — jamais en production.",
    validation: {
      nameRequired: "Entrez un nom",
      engineTypeRequired: "Le type d’engine est requis",
      fieldRequired: "{field} est requis",
      indexNamePattern:
        "Doit commencer par une lettre. Seuls les lettres, chiffres, tiret bas et trait d’union sont autorisés (max 128)",
    },
    toasts: {
      storeCreated: "La base de données Vector a été créée",
      storeUpdated: "La base de données Vector a été mise à jour",
      storeDeleted: "La base de données Vector a été supprimée",
      testSuccess: "Connexion réussie",
      testFailed: "Connexion échouée",
      duplicateName: "Une base de données Vector avec ce nom existe déjà",
      errorGeneric: "Une erreur est survenue. Veuillez réessayer.",
    },
  },
  memorySettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    workspaceDisabled:
      "La mémoire à long terme est désactivée pour cet espace de travail. Ce commutateur prend effet une fois qu\\\'un administrateur l\\\'activera.",
    enableLabel: "Activer l’Analyse de Tableau d_a_t_a",
    enableDescription:
      "Extrait automatiquement les entités et les relations à partir du texte lorsqu\'il est activé",
    agentDisabledHint:
      "Un agent individuel peut également désactiver la mémoire à long terme pour lui-même. Dans une conversation avec un tel agent, vos mémoires ne sont ni lues ni ajoutées; les autres agents ne sont pas affectés.",
    usage: {
      title: "Permissions des rôles",
      iconHint:
        "Passer la souris dessus pour voir les détails des permissions de rôle",
      intro: "Seules les mémoires Actives sont utilisées dans la conversation.",
      rows: {
        alwaysOn: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
        situational: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
        interest: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
        tracking: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
        documents: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
        pending: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
        inactive: {
          label: "Changer le mot de passe",
          text: "Fichiers de Texte Plani (.txt)",
        },
      },
    },
    listTitle: "Membres du workspace",
    listCount: "{count} total",
    statusActive: "Actif",
    statusSuperseded: "Remplacé",
    statusArchived: "Archivé",
    statusPending: "À examiner",
    statusTracking: "Surveillance",
    statusDocuments: "Sources familières",
    confirmGuess: "Oui",
    rejectGuess: "Non",
    pendingHint:
      "Ces éléments ont été inférés à partir de vos questions. Ils ne sont utilisés qu\'après votre confirmation.",
    trackingHint:
      "Ces sujets vous intéressent en continu, mais n\'ont pas encore atteint le seuil pour devenir des intérêts à long terme. Ils ne sont utilisés dans la conversation qu\'après cela.",
    documentsHint:
      "Chaque ligne non vide est envoyée comme un document distinct au modèle ReRank",
    supersededHint:
      "Ces éléments ont été remplacés par des souvenirs plus récents. Ils sont conservés comme l’histoire des modifications effectuées et ne sont pas utilisés dans la conversation.",
    archivedHint:
      "Les souvenirs archivés ne sont pas utilisés dans la conversation. Lorsque vous atteignez la limite personnelle, les éléments moins utilisés sont automatiquement rangés.",
    pendingEmptyTitle: "Rien à examiner",
    pendingEmptyDescription:
      "Lorsque quelque chose est inféré sur vous à partir de vos questions, il attend ici votre confirmation.",
    trackingEmptyTitle: "Aucun sujet suivi",
    trackingEmptyDescription:
      "Une fois la dédistillation automatique activée, le système suit ce que vous avez habituellement demandé et le convertit en intérêt à long terme après un certain nombre de répétitions.",
    documentsEmptyTitle: "Aucune source familière pour l’instant",
    documentsEmptyDescription:
      "Un document apparaît ici après qu’il ait été cité au moins deux fois dans les réponses.",
    supersededEmptyTitle: "Rien n’a été remplacé pour l’instant",
    supersededEmptyDescription:
      "Lorsqu’un nouveau terme recouvre le même sujet, l’ancien reste ici. L’édition d’un élément de cette page le met à jour en place et ne crée pas une ligne historique.",
    archivedEmptyTitle: "Rien archivé pour l’instant",
    archivedEmptyDescription:
      "Lorsque les souvenirs actifs dépassent le plafond (200 par défaut), les moins utilisés sont rangés. Les tâches datées s’y trouvent également après leur expiration.",
    documentsHits: "Cité {hits} fois",
    untitledDocument: "Document sans titre",
    openDocument: "Ouvrir le document",
    openDocumentUnavailable:
      "Impossible d’ouvrir: base de connaissances manquante",
    stopTrackingDocument: "Arrêter de suivre",
    stopTrackingDocumentConfirm:
      "Arrêter d’utiliser ce document pour une récupération personnalisée? Il reparaîtra après deux citations supplémentaires.",
    stopTrackingDocumentSuccess: "Arrêté de suivre cette source",
    stopTrackingDocumentFailed: "Échec de l’arrêt de suivi",
    trackingProgress:
      "Demandé {hits} fois; devient un intérêt à long terme à {threshold}",
    trackingReady:
      "Plafond atteint — vous pouvez enregistrer cela comme un intérêt à long terme",
    trackingAliases: "Également demandé sous le nom de: {aliases}",
    promoteTopic: "Enregistrer en tant qu’intérêt",
    dismissTopic: "Ne plus suivre",
    dismissTopicConfirm:
      "Ne plus suivre ce sujet? Demander à nouveau sur ce sujet ne l’enregistrera pas automatiquement en tant qu’intérêt à long terme.",
    promoteSuccess: "Enregistré en tant qu’intérêt à long terme",
    promoteFailed: "Échec de l’enregistrement en tant qu’intérêt",
    dismissSuccess: "Ne plus suivre ce sujet",
    dismissFailed: "Échec de la désactivation de la surveillance",
    confirmSuccess: "Confirmé",
    confirmFailed: "Échec de la confirmation",
    rejectSuccess: "Requête rejetée",
    rejectFailed: "Échec du refus",
    export: "Exporter",
    consolidate: "Nettoyer",
    consolidateConfirm:
      "Les éléments de doublement proche seront fusionnés. L’ancien terme reste sous Remplacé. Continuer?",
    consolidateSuccess:
      "Nettoyé: fusionné {merged} groupes, archivé {expired} périmés, dégradé {demoted} tâches obsolètes",
    consolidateNothing: "Aucune action de nettoyage nécessaire",
    consolidateTooFewItems: "Trop peu de souvenirs pour mériter le nettoyage",
    consolidateNoCandidates:
      "Aucun souvenir ne semblait assez proche pour être fusionné",
    consolidateModelDeclined:
      "Le modèle a examiné et a jugé ces éléments différents, donc aucune fusion n\'a été effectuée",
    consolidateTooSoon:
      "Un nettoyage a récemment été effectué. Veuillez réessayer dans un moment.",
    consolidateModelUnavailable:
      "Le modèle était indisponible, donc aucune modification n\'a été apportée plutôt que de risquer une mauvaise fusion",
    consolidateFailed: "Échec du nettoyage",
    clear: "Effacer",
    clearConfirm:
      "Supprimer votre propre valeur pour {name}? La valeur de l’espace de travail, si elle existe, sera appliquée à nouveau après cela.",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    add: "Ajouter une source d_a_t_a",
    addPlaceholder:
      "Écrivez une phrase que vous voulez que l\'assistant se souvienne",
    addTitle: "Ajouter un service MCP",
    addKindLabel: "Type",
    addContentLabel: "Contenu",
    emptyTitle: "Aucune entrée FAQ",
    emptyDescription: "Ce service n\'a pas fourni d’outils ou de ressources",
    kinds: {
      profile: "Inclus dans chaque tour ultérieur",
      preference: "Inclus dans chaque tour ultérieur",
      fact: "Utilisée uniquement lorsque la question est liée",
      task: "Tâche en cours",
      interest: "Intérêt à long terme",
    },
    kindHints: {
      profile: "Inclus dans chaque tour ultérieur",
      preference: "Inclus dans chaque tour ultérieur",
      fact: "Utilisée uniquement lorsque la question est liée",
      task: "Tâche en cours",
      interest: "Intérêt à long terme",
    },
    origins: {
      explicit: "You asked",
      extracted: "Distilled",
      manual: "Manuel",
    },
    toasts: {
      enabled: "Activer le canal",
      disabled: "Désactivé",
      added: "Ajouté",
      updated: "Point de terminaison mis à jour",
      deleted: "Point de terminaison supprimé",
      cleared: "Deleted {count} memories",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
    },
  },
  envVarSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    helpAria: "About sandbox secrets",
    introPersonalTitle: "Yours only",
    introPersonalBody:
      "Injected into your own chats and runs. Other members cannot see them, and theirs will not replace yours.",
    introRuntimeTitle: "Passed in when something runs",
    introRuntimeBody:
      "Injected when a skill runs, or when a command runs in that sandbox. You can also supply them in the conversation. Saved values are never shown again.",
    loading: "Chargement...",
    loadFailed: "Échec du chargement des clés API de plateforme",
    retry: "Recommencer",
    noConfigTitle: "No sandbox configured",
    noConfigDescription:
      "This workspace has no sandbox backend yet, so there is nothing to set keys for.",
    sandboxTitle: "Always passed in a chosen sandbox",
    sandboxHint:
      "Passed only to commands you run in that sandbox. Most people never need this; you can also supply values in the conversation.",
    sandboxEmpty: "Nothing added yet.",
    sandboxPick: "Which sandbox",
    skillTitle: "Keys a skill needs",
    skillHint:
      "Chaque compétence déclare ce qu\'elle a besoin. Enregistrez-les ici à l\'avance ou fournissez-les dans la conversation. Les administrateurs de l\'espace de travail peuvent également remplir les valeurs partagées sur la carte de compétence.",
    skillEmptyTitle: "Aucune compétence n\'a encore demandé des clés",
    skillEmptyDesc:
      "Après l\'installation d\'une compétence qui déclare des identifiants, les champs à remplir apparaîtront ici.",
    skillOnSandbox: "Sandbox: {name}",
    skillNeedsCount: "{count} non enregistrés ici",
    skillReady: "Enregistrés sur cette page",
    requiredTag: "Requis",
    statusUnset: "Non défini",
    statusWorkspace: "Utilise la valeur de l\'espace de travail",
    statusUser: "Défini par vous",
    setValue: "Définir",
    replaceValue: "Remplacer",
    addRow: "Ajouter",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    nameRule:
      "Lettres en majuscule, chiffres et underscores, commençant par une lettre ou un underscore.",
    nameInvalid:
      "Ce nom ne peut pas être utilisé. Les noms que le sandbox réserve, tels que PATH ou tout ce qui commence par WEKNORA_, ne sont pas acceptés.",
    nameDuplicate: "Vous avez déjà une variable avec ce nom ici.",
    valuePlaceholder: "Valeur de l’en-tête",
    storedPlaceholder: "Enregistré, taper pour remplacer",
    valueRequired: "Entrez une valeur avant de sauvegarder.",
    valueTooLong: "Une valeur ne peut pas dépasser {max} octets.",
    tooManyValues: "Vous pouvez enregistrer au maximum {max} variables ici.",
    save: "Enregistrer la configuration",
    saveSuccess: "Paramètres d’intégration API enregistrés",
    saveFailed: "Échec de l’enregistrement de l’information d’identification",
    delete: "Supprimer",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    deleteSuccess: "Clé API de plateforme supprimée",
    clear: "Effacer",
    clearConfirm:
      "Supprimer votre propre valeur pour {name}? La valeur de l’espace de travail, si elle existe, sera appliquée à nouveau après cela.",
    clearSuccess: "Votre valeur a été supprimée.",
    updatedAt: "Mis à jour à {value}",
  },
  memoryWorkspaceSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    introTitle: "Désactivé par défaut, vous devez l’activer",
    introDescription:
      'La mémoire à long terme conserve les échanges des membres lors des conversations. Elle ne démarre pas activée. Une fois active, chaque membre dispose d’un espace mémoire individuel et sécurisé. Il peut la réviser, l’éditer, la supprimer ou la désactiver entièrement depuis "Mon mémoire". Les mémoires de profil et préférences actives sont incluses dans chaque tour ultérieur; seuls les faits et tâches liés à la question sont rappelés.',
    enableLabel: "Activer l’Analyse de Tableau d_a_t_a",
    enableDescription:
      "Extrait automatiquement les entités et les relations à partir du texte lorsqu\'il est activé",
    writeModeLabel: "Comment la mémoire est écrite",
    writeModeDescription: "Contrôle ce qui est enregistré.",
    writeModeExplicit: "Explicitement seulement",
    writeModeAuto: "Abstraire automatiquement",
    writeModeExplicitHint:
      "Enregistre uniquement ce que le membre demande explicitement de retenir, ainsi que les entrées ajoutées à la main. Pas d\'appel au modèle supplémentaire.",
    writeModeAutoHint:
      "Fait également un appel au modèle de fond après une conversation pour abstraire ce qui est worth keeping à partir de ce que le membre a dit.",
    extractModelLabel: "Modèle d’abstraction",
    extractModelDescription:
      "Laisser vide pour utiliser le modèle de conversation actuel.",
    extractDelayLabel: "Délai d’abstraction",
    extractDelayDescription:
      "La durée pendant laquelle une conversation terminée attend avant que l’abstraction ne s’exécute. L’attente permet à un appel au modèle de couvrir plusieurs messages que l’utilisateur envoie généralement de suite.",
    extractMinIntervalLabel: "Intervalle minimum entre les exécutions",
    extractMinIntervalDescription:
      "La limite inférieure entre deux exécutions d’abstraction pour une personne, utilisée pour limiter les coûts. Les messages produits dans l’intervalle ne sont pas abandonnés — ils sont portés sur l’exécution suivante.",
    vectorRecallLabel: "Correspondance de la mémoire par signification",
    vectorRecallDescription:
      "Ajoute une correspondance sémantique au-dessus du vocabulaire, afin que les souvenirs apparaissent encore après que l’utilisateur rephrase le sujet — et la plupart des souvenirs passent à la rephrasing. Coûte une seule appel d’embedding par tour, et reverts à une correspondance de vocabulaire uniquement en cas d’expiration.",
    embeddingModelLabel: "Modèle d’embedding",
    embeddingModelDescription:
      "Sélectionnez le modèle d’embedding pour vectoriser les messages de conversation",
    conditioningLabel: "Laisser la mémoire influencer la récupération",
    conditioningDescription:
      "La mémoire participe à la réécriture des requêtes et au classement des documents plutôt que simplement d\'être ajoutée à la demande de réponse. C\'est là que la mémoire gagne en valeur dans un produit de base de connaissances.",
    interestThresholdLabel: "Questions avant qu’un sujet devienne un intérêt",
    interestThresholdDescription:
      "Un sujet est enregistré seulement après qu’il ait été évoqué autant de fois. Ajuster à 1 enregistre toutes les questions passantes, ce qui est généralement trop bruyant.",
    instructionsLabel: "Instructions de description",
    instructionsDescription:
      "Nommez l’audience, les termes à conserver ou le ton; le format de sortie reste constant.",
    instructionsPlaceholder:
      "par exemple: Écrit pour les agents de support; décrire les lignes de produits en langage simple et conserver les numéros de modèle…",
    maxItemsLabel: "Souvenirs par membre",
    maxItemsDescription:
      'En dehors de cela, les souvenirs les moins évalués sont archivés par importance et récente. Les souvenirs archivés restent visibles sous "Mon souvenir".',
    toasts: {
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
    },
  },
  chatHistorySettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    enableLabel: "Activer l’Analyse de Tableau d_a_t_a",
    enableDescription:
      "Extrait automatiquement les entités et les relations à partir du texte lorsqu\'il est activé",
    embeddingModelLabel: "Modèle d’embedding",
    embeddingModelDescription:
      "Sélectionnez le modèle d’embedding pour vectoriser les messages de conversation",
    embeddingModelLocked:
      "Les messages ont été indexés; le modèle d’embedding ne peut pas être changé (la suppression des données indexées est nécessaire)",
    statsTitle: "Statistiques d’Indexation",
    statsIndexedMessages: "Messages Indexés",
    statsNotConfigured: "L’indexation des messages n’est pas configurée",
    statsNotConfiguredDesc:
      "Activez et sélectionnez un modèle d’embedding pour commencer l’indexation automatique des messages de conversation",
    toasts: {
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
    },
  },
  retrievalSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    embeddingTopKLabel: "Recherche Vectorielle Top K",
    vectorThresholdLabel: "Seuil de Similarité Vectorielle",
    keywordThresholdLabel: "Seuil de Correspondance de Mot Clé",
    rerankTopKLabel: "Reclasser Top K",
    rerankThresholdLabel: "Seuil de Reclassage",
    rerankModelLabel: "Modèle de Reclassage",
    rerankModelDescription:
      "Sélectionnez le modèle pour reclasser les résultats de la recherche",
    rerankModelRequired:
      "Veuillez sélectionner un modèle de Reclassage. La recherche nécessite ce modèle pour reclasser les résultats.",
    toasts: {
      saveSuccess: "Paramètres d’intégration API enregistrés",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
    },
  },
  graphSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    enableLabel: "Activer l’Analyse de Tableau d_a_t_a",
    enableDescription:
      "Extrait automatiquement les entités et les relations à partir du texte lorsqu\'il est activé",
    tagsLabel: "Types de Relations",
    tagsDescription:
      "Définissez les étiquettes de types de relations à extraire, séparées par des virgules",
    tagsPlaceholder:
      "Entrez les types de relations, par exemple: works_at, colleague, friend",
    generateRandomTags: "Générer des étiquettes aléatoires",
    sampleTextLabel: "Texte d\'exemple",
    sampleTextDescription:
      "Texte d\'exemple pour tester l\'extraction d\'entités et de relations",
    sampleTextPlaceholder:
      "Entrez un texte contenant des entités et des relations...",
    customInstructionsLabel: "Instructions de Traitement d’Image",
    customInstructionsDescription:
      "Ajoutez des priorités visuelles tout en conservant les contrats de sortie OCR et Markdown",
    customInstructionsPlaceholder:
      "Par exemple: priorisez les noms d’étiquettes, les numéros de modèle, les codes d’alarme et les unités de table…",
    generateRandomText: "Générer un texte aléatoire",
    entityListLabel: "Liste d\'Entités",
    entityListDescription: "Entités et leurs attributs extraits du texte",
    nodeNamePlaceholder: "Entrez le nom de l\'entité",
    attributePlaceholder: "Entrez la valeur de l\'attribut",
    addAttribute: "Ajouter un attribut",
    manageEntitiesLabel: "Gérer les Entités",
    manageEntitiesDescription: "Ajouter ou supprimer des nœuds d\'entité",
    addEntity: "Ajouter une Entité",
    relationListLabel: "Liste de Relations",
    relationListDescription:
      "Définissez les connexions de relations entre les entités",
    selectEntity: "Sélectionner une entité",
    selectRelationType: "Choisir le type de relation",
    manageRelationsLabel: "Gestion des relations",
    manageRelationsDescription:
      "Ajouter ou supprimer des relations entre les entités",
    addRelation: "Ajouter une relation",
    extractActionsLabel: "Actions d\'extraction",
    extractActionsDescription:
      "Effectuer l\'extraction d\'entités et de relations ou gérer les exemples de données",
    startExtraction: "Commencer l\'extraction",
    extracting: "Extraction en cours...",
    defaultExample: "Exemple par défaut",
    clearExample: "Effacer l\'exemple",
    completeModelConfig:
      "Veuillez compléter la configuration du modèle d\'abord",
    tagsGenerated: "Étiquettes générées avec succès",
    tagsGenerateFailed: "Échec de génération d\'étiquettes",
    textGenerated: "Texte généré avec succès",
    textGenerateFailed: "Échec de génération de texte",
    pleaseInputText: "Veuillez entrer un texte d\'exemple en premier",
    extractSuccess: "Extraction de l\'entité-rélation réussie",
    extractFailed: "Échec de l\'extraction de l\'entité-rélation",
    exampleLoaded: "Exemple chargé",
    exampleCleared: "Exemple effacé",
    disabledWarning:
      "Le graphe de connaissances d_a_t_abase n\'est pas activé, l\'extraction d\'entité-rélation n\'est pas disponible",
    howToEnable: "Comment activer le graphe de connaissances?",
  },
  initialization: {
    skip: "Ignorer les éléments existants",
    next: "Suivant",
  },
  inviteRegister: {
    bannerTitle: 'Vous avez été invité à rejoindre "{tenant}"',
    bannerHint:
      "Veuillez compléter les informations ci-dessous afin de vous inscrire. Une fois l’inscription terminée, vous serez automatiquement ajouté à l’équipe.",
    bannerHintLogin:
      "Connectez-vous pour vous inscrire automatiquement à cette équipe.",
    loading: "Chargement...",
    invalidTitle: "Le lien d’invitation est invalide ou a été révoqué",
    invalidBody:
      "Veuillez demander à votre inviteur de vous envoyer un nouveau lien, ou connectez-vous avec un compte existant.",
    backToLogin: "Retour à la connexion",
    title: "Permissions des rôles",
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    email: "Email",
    emailPlaceholder: "invitee{\\\'@\\\'}example.com",
    emailHint: "Utilisez n’importe quelle adresse email que vous contrôlez.",
    emailInvalid: "Entrez une adresse e-mail valide",
    username: "Nom d’utilisateur",
    usernamePlaceholder: "2 à 50 caractères",
    password: "Mot de passe",
    passwordPlaceholder: "Entrez votre mot de passe",
    confirmPassword: "Confirmez le mot de passe",
    submit: "Mettre à jour le mot de passe",
    submitting: "Envoi en cours...",
    success: "Invitation révoquée.",
    joined: "Vous avez rejoint l’équipe.",
    failed:
      "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    usernameRequired: "Entrez un nom d’utilisateur",
    passwordTooShort: "Le mot de passe doit faire au moins 6 caractères",
    passwordMismatch: "Les mots de passe ne correspondent pas",
  },
  auth: {
    login: "Connexion",
    logout: "Déconnexion",
    oidcLogin: "Se connecter avec OIDC",
    oidcLoginWithProvider: "Se connecter avec {provider}",
    redirectingToOIDC: "Redirection vers le fournisseur d’identité...",
    orContinueWith: "Ou continuez avec",
    oidcLoginFailed: "La connexion OIDC a échoué",
    username: "Nom d’utilisateur",
    email: "Email",
    password: "Mot de passe",
    confirmPassword: "Confirmez le mot de passe",
    loginSuccessTitle: "Connexion réussie",
    loginSuccessContent:
      "Bienvenue à nouveau. Vous êtes maintenant dans {name}",
    loggingIn: "Connexion en cours...",
    register: "Inscription",
    registering: "Inscription en cours...",
    createAccount: "Créer un compte",
    haveAccount: "Déjà un compte?",
    backToLogin: "Retour à la connexion",
    loginHint:
      "Connectez-vous pour continuer, ou créez un compte ci-dessous si c’est votre première visite.",
    firstTime: "Nouveau sur WeKnora?",
    registerSuccess: "Inscription réussie. Veuillez vous connecter",
    registerFailed: "Inscription échouée",
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    registerSubtitle: "Créez votre compte et commencez à utiliser WeKnora",
    emailPlaceholder: "invitee{\\\'@\\\'}example.com",
    passwordPlaceholder: "Entrez votre mot de passe",
    confirmPasswordPlaceholder: "Entrez le nouveau mot de passe à nouveau",
    usernamePlaceholder: "2 à 50 caractères",
    emailRequired: "Email requis",
    emailInvalid: "Entrez une adresse e-mail valide",
    passwordRequired: "Entrez un nouveau mot de passe",
    passwordMinLength: "Le mot de passe doit comporter au moins 8 caractères",
    passwordMaxLength: "Le mot de passe ne peut pas dépasser 32 caractères",
    passwordMustContainLetter: "Le mot de passe doit inclure des lettres",
    passwordMustContainLowercaseLetter:
      "Le mot de passe doit contenir des lettres minuscules",
    passwordMustContainUppercaseLetter:
      "Le mot de passe doit contenir des lettres majuscules",
    passwordMustContainNumber: "Le mot de passe doit inclure des chiffres",
    passwordMustContainSpecialChar:
      "Le mot de passe doit comporter des caractères spéciaux: {specialChars}",
    usernameRequired: "Entrez un nom d’utilisateur",
    usernameMinLength:
      "Le nom d’utilisateur doit comporter au moins 2 caractères",
    usernameMaxLength:
      "Le nom d’utilisateur ne peut pas dépasser 20 caractères",
    usernameInvalid:
      "Le nom d’utilisateur ne doit contenir que des lettres, des chiffres, des underscores et des caractères chinois",
    confirmPasswordRequired: "Confirmez le mot de passe",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    loginError:
      "Erreur de connexion, veuillez vérifier votre email ou votre mot de passe",
    loginErrorRetry: "Erreur de connexion, veuillez réessayer plus tard",
    registerError: "Erreur d’inscription, veuillez réessayer plus tard",
    workspaceOnboarding: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      create: "Nouveau point de terminaison",
      invitations: "Voir les invitations",
      loadingPolicy:
        "Vérification des options d’espace de travail disponibles…",
      policyLoadFailed:
        "Impossible de charger les permissions de l’espace de travail. Vérifiez votre connexion et réessayez.",
      retry: "Recommencer",
      inviteOnlyTitle: "En attente d’une invitation de l’espace de travail",
      inviteOnlyDescription:
        "La création d’un espace de travail personnel est désactivée. Consultez et acceptez une invitation d’un administrateur d’espace de travail.",
      inviteOnlyNotice:
        "Ce compte peut rejoindre un espace de travail existant uniquement par invitation",
      help: "Vous pouvez créer un espace de travail maintenant ou revenir plus tard pour accepter une invitation.",
      inviteOnlyHelp:
        "Pas encore d’invitation? Envoyez votre adresse email enregistrée à un administrateur d’espace de travail et demandez-lui de vous inviter.",
    },
  },
  authStore: {
    errors: {
      parseUserFailed: "Échec de l’analyse des informations de l’utilisateur",
      parseTenantFailed:
        "Échec de l’analyse des informations de l’espace de travail",
      parseKnowledgeBasesFailed:
        "Échec de l’analyse de la liste des bases de connaissances",
      parseCurrentKnowledgeBaseFailed:
        "Échec de l’analyse de la base de connaissances actuelle",
    },
  },
  common: {
    add: "Ajouter une source d_a_t_a",
    me: "Moi",
    confirm: "Révoquer",
    cancel: "Annuler",
    unsavedChanges: {
      title: "Permissions des rôles",
      body: "Annuler les privilèges administrateur du système pour {email}? Ils perdront l\'accès à toutes les fonctionnalités au niveau système.",
      discard: "Ignorer les changements",
      keepEditing: "Continuer à éditer",
    },
    fullscreen: "Plein Écran",
    exitFullscreen: "Quitter le Plein Écran",
    save: "Enregistrer la configuration",
    delete: "Supprimer",
    edit: "Modifier",
    copy: "Copier la clé",
    copied: "Copié dans le presse-papiers",
    copySuccess: "Clé copiée",
    default: "Défaut",
    create: "Nouveau point de terminaison",
    download: "Télécharger l\'image",
    refresh: "Mettre à jour",
    loading: "Chargement...",
    noData: "No data",
    noMoreData: "All content loaded",
    loadMore: "Charger davantage",
    error: "Erreur",
    success: "Invitation révoquée.",
    failed:
      "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    info: "Information",
    selectAll: "Tout sélectionner",
    yes: "Oui",
    no: "Non",
    close: "Fermer",
    back: "Retour",
    next: "Suivant",
    finish: "Terminer",
    all: "Tout",
    clear: "Effacer",
    website: "Site officiel",
    clawhubSkill: "Compétence Claw",
    github: "GitHub",
    githubStarTip:
      "Ouvrez le dépôt sur GitHub — notez-le si vous trouvez utile",
    on: "Activé",
    off: "Pensée désactivée; aucun paramètre de pensée n’est envoyé",
    confirmDelete: 'Supprimer le modèle "{name}"?',
    createSuccess: "L’espace partagé a été créé avec succès",
    deleteSuccess: "Clé API de plateforme supprimée",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
    updateSuccess: "Configuration enregistrée avec succès",
    saveSuccess: "Paramètres d’intégration API enregistrés",
    saveFailed: "Échec de l’enregistrement de l’information d’identification",
    operationFailed: "Opération échouée",
    file: "Fichier",
    skill: "Compétences",
    knowledgeBase: "Base de connaissances",
    noResult: "Aucun résultat",
    remove: "Supprimer",
    avatar: "Avatar de l’espace partagé",
    defaultUser: "Utilisateur",
    copyFailed:
      "La copie a échoué; veuillez sélectionner le texte manuellement",
    retry: "Recommencer",
    expand: "Développer",
    collapse: "Montrer moins",
  },
  mentionDetail: {
    readOnlyFromAgent:
      "Lecture seule dans cette conversation; ne s\'affiche pas dans la liste de la base de connaissances",
    faqCount: "{count} entrées Q&A",
    kbCount: "{count} documents",
    mcpToolCount: "{count} outils",
    mcpNotSynced: "Outils non synchronisés encore",
    mcpStale: "A besoin de resynchronisation",
    belongsToKb: "Base de connaissances: ",
    belongsToOrg: "Espace: ",
    noCompatibleKbForAgent:
      "Les outils de cet agent ne correspondent pas à la capacité de n\'importe quelle base de connaissances dans le champ d\'action, donc rien ne peut être référencé.",
  },
  file: {
    upload: "Télécharger un Fichier",
  },
  manualEditor: {
    placeholders: {
      heading: "Fichiers de Compétences",
      listItem: "Élément de liste",
      taskItem: "Élément de tâche",
      quote: "Texte cité",
      code: "Contenu de code",
      linkText: "Texte du lien",
      imageAlt: "Description",
      bold: "Gras",
      italic: "Italique",
      strike: "Barré",
      inlineCode: "Code intégré",
    },
    table: {
      column1: "Colonne 1",
      column2: "Colonne 2",
      cell: "Contenu",
    },
    toolbar: {
      bold: "Gras",
      italic: "Italique",
      strike: "Barré",
      inlineCode: "Code intégré",
      heading1: "Titre 1",
      heading2: "Titre 2",
      heading3: "Titre 3",
      bulletList: "Liste à puces",
      orderedList: "Liste numérotée",
      taskList: "Liste de tâches",
      blockquote: "Citation",
      codeBlock: "Bloc de code",
      link: "Insérer un lien",
      image: "Fichiers Image (.jpg/.jpeg/.png)",
      table: "Insérer un tableau",
      horizontalRule: "Ligne horizontale",
      headingGroup: "Titre",
      insertGroup: "Insérer",
    },
    shortcuts: {
      title: "Permissions des rôles",
      continueList: "Continuer la liste",
      indent: "Indenter / Shift+Tab pour déindenter",
    },
    view: {
      edit: "Modifier",
      split: "Diviser",
      preview: "Aperçu",
      splitUnavailable:
        "Élargissez le tiroir ou passez en mode plein écran pour diviser la vue",
      groupLabel: "Vue de l\'éditeur",
    },
    preview: {
      empty: "Aucune clé API de plateforme",
    },
    title: {
      edit: "Modifier",
      create: "Nouveau point de terminaison",
    },
    section: {
      content: "Chargement du contenu...",
    },
    labels: {
      currentKnowledgeBase: "Base de connaissances actuelle",
    },
    defaultTitlePrefix: "Nouveau document",
    error: {
      fetchDetailFailed:
        "Échec de la récupération des détails de la connaissance",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
    },
    warning: {
      selectKnowledgeBase:
        "Veuillez sélectionner une base de connaissances cible",
      enterTitle: "Veuillez entrer un titre de la connaissance",
      enterContent: "Veuillez d\'abord saisir le contenu!",
      contentTooShort:
        "Le contenu est trop court. Veuillez ajouter plus d\'informations avant de publier",
    },
    success: {
      draftSaved: "Brouillon enregistré",
      published: "Connaissance publiée et indexation démarrée",
    },
    form: {
      knowledgeBasePlaceholder: "Sélectionnez une base de connaissances",
      titleLabel: "Titre de la connaissance",
      knowledgeBaseLabel: "ID de la base de connaissances",
      titlePlaceholder: "Entrez un titre",
      contentPlaceholder:
        "Supporte Markdown. Utilisez des titres de niveau 1 (#), des listes, des blocs de code, etc.",
    },
    noDocumentKnowledgeBases:
      "Aucune base de connaissances de type document disponible. Veuillez en créer une d\\\'abord",
    status: {
      draftTag: "Statut: Brouillon",
      publishedTag: "Statut: Publié",
      lastUpdated: "Dernière mise à jour: {time}",
      counter: "{chars} caractères · {lines} lignes",
    },
    loading: {
      content: "Chargement du contenu...",
      preparing: "Préparation de l\\\'éditeur...",
    },
    actions: {
      cancel: "Annuler",
      saveDraft: "Enregistrer le brouillon",
      publish: "Publier",
    },
  },
  input: {
    addModel: "Ajouter un modèle",
    placeholder: "Entrez des secondes, plage recommandée 60-1800",
    agentMode: "Raisonnement intelligent",
    normalMode: "Réponse rapide",
    normalModeDesc: "Base de connaissances RAG Q&A",
    agentModeDesc: "Pensée en plusieurs étapes, analyse approfondie",
    agentMissingAllowedTools: "Outils autorisés",
    agentMissingSummaryModel: "Modèle de chat",
    agentMissingRerankModel: "Modèle de reclassement",
    customAgentMissingSummaryModel: "Modèle de chat",
    customAgentMissingRerankModel: "Modèle de reclassement",
    goToAgentEditor: "Aller à la configuration →",
    agentNotReadyDetail:
      "L\'agent \"{agentName}\" n\'est pas prêt. Veuillez le configurer: {reasons}",
    sharedAgentNotReadyDetail:
      "L\'agent partagé \"{agentName}\" n\'est pas prêt (manquant: {reasons}). Demandez à l\'administrateur de l\'organisation partagée de finaliser la configuration.",
    webSearch: {
      toggleOn: "Activer la recherche sur le web",
      toggleOff: "Désactiver la recherche sur le web",
      notConfigured: "Non configuré",
    },
    knowledgeBase: "Base de connaissances",
    knowledgeBaseWithCount: "Base de connaissances ({count})",
    notConfigured: "Non configuré",
    sharedAgentModelLabel: "Modèle de l\'agent partagé",
    noModel: "Aucun modèle disponible",
    stopGeneration: "Arrêter la génération",
    send: "Envoyer",
    steerCurrent: "Compléter la tâche en cours",
    steerAfter: "Envoyer après la fin",
    steerAccepted: "Ajouté pendant cette tâche",
    steerRetry: "Réessayer d\'envoyer",
    steerQueueSendNow: "Compléter la tâche en cours",
    steerQueueWaiting: "En attente du terme de la réponse actuelle",
    steerQueueInjecting: "En attente de l\'application de la mise à jour",
    messages: {
      enterContent: "Veuillez d\'abord saisir le contenu!",
      replying: "En réponse en cours, merci de réessayer plus tard!",
      steerAttachmentPending:
        "Le fichier est toujours en transit. Veuillez réessayer plus tard.",
      steerHasAttachments:
        "Les fichiers ne peuvent pas être ajoutés à une réponse en cours. Supprimez-les d\'abord, ou envoyez après qu\'elle soit terminée.",
      steerFailed: "Échec de l\'ajout du message. Veuillez réessayer.",
      steerPromoteFailed: "Échec de l\'envoi maintenant. Veuillez réessayer.",
      steerRemoveFailed:
        "Échec de la suppression du message en file d\'attente. Veuillez réessayer.",
      steerAlreadyInjected:
        "Ce message a déjà été pris par la réponse en cours.",
      steerFollowUpTimeout:
        "La réponse suivante n\'a pas démarré à temps. Veuillez envoyer à nouveau.",
      steerNoActiveRun:
        "Aucune réponse en cours. Veuillez envoyer le message directement.",
      agentSwitchedOn: "Passez en raisonnement intelligent",
      agentSwitchedOff: "Passez en Q&A rapide",
      agentSelected: 'Agent sélectionné "{name}"',
      webSearchNotConfigured:
        "Le moteur de recherche web n\'est pas configuré. Veuillez configurer un fournisseur et des identifiants dans les paramètres.",
      webSearchEnabled: "Recherche web activée",
      webSearchDisabled: "Recherche web désactivée",
      sessionMissing: "L\'ID de session n\'existe pas",
      messageMissing:
        "Impossible d’obtenir l’ID du message. Veuillez rafraîchir la page et réessayer.",
      stopSuccess: "Arrêt effectué",
      stopFailed: "Échec de l’arrêt. Veuillez réessayer.",
    },
    webSearchDisabledByAgent:
      "La recherche web est désactivée par l’agent actuel",
    kbLockedByAgent:
      "La configuration de la base de connaissances est verrouillée par l’agent actuel",
    kbDisabledByAgent:
      "La base de connaissances est désactivée par l’agent actuel",
    modelLockedByAgent:
      "La sélection du modèle est verrouillée par l’agent actuel",
    imageUploadDisabledByAgent:
      "Le téléchargement d’images n’est pas activé pour cet agent",
    goToAgentSettings: "Accéder aux paramètres de l’agent",
  },
  createChat: {
    title: "Permissions des rôles",
    newSessionTitle: "Nouvelle session",
    messages: {
      createFailed: "Échec de la création de la clé API de plateforme",
      createError:
        "Échec de la création de session, veuillez réessayer plus tard",
    },
  },
  knowledgeList: {
    create: "Nouveau point de terminaison",
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    sharedToOrgs: "Partagée avec {count} espace(s)",
    uninitializedBanner:
      "Certaines bases de connaissances ne sont pas initialisées. Configurez les informations du modèle dans les paramètres avant d’ajouter des documents.",
    empty: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      sharedTitle: "Aucune base de connaissances partagée pour le moment",
      sharedDescription:
        "Rejoignez un espace partagé ou demandez à d\'autres de partager des bases de connaissances avec vous",
      favoritesTitle: "Aucune base de connaissances préférée pour le moment",
      favoritesDescription:
        "Étoile une base de connaissances à partir de sa carte pour l’ajouter ici",
      recentsTitle: "Aucune base de connaissances récente pour le moment",
      recentsDescription:
        "Les bases de connaissances que vous avez récemment ouvertes apparaîtront ici",
    },
    delete: {
      confirmTitle: "Quitter ce workspace?",
      confirmMessage:
        'Êtes-vous sûr de vouloir supprimer la base de connaissances "{name}"? Cette action ne peut pas être annulée.',
      confirmButton: "Revenir",
    },
    menu: {
      viewDetails: "Voir les détails",
      duplicate: "Déjà existant",
    },
    pin: {
      pin: "Fixer en haut",
      unpin: "Défixer",
      pinSuccess: "Fixé",
      unpinSuccess: "Défixé",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    },
    sections: {
      pinned: "Fixé",
      mine: "Créé par moi",
      tenantOthers: "Espace de travail · Autres membres",
      tenantReadonly: "Espace de travail · Lecture seule",
      sharedByMe: "Partagé par moi",
      sharedEditable: "Partagé avec moi · Modifiable",
      sharedReadonly: "Partagé avec moi · Lecture seule",
    },
    messages: {
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
      duplicateSuccess:
        "Doublement de base de connaissances créé (le contenu n\'est pas inclus)",
      duplicateFailed:
        "Échec de la création de la double de la base de connaissances",
    },
    detail: {
      title: "Permissions des rôles",
      sourceType: "Source",
      sourceTypeKbShare: "KB partagée directement dans cet espace",
      sourceTypeAgent: "Visible via agent partagé",
      sourceOrg: "Espace",
      sourceFromAgent: "Agent",
      agentKbStrategy: "Stratégie de KB de l\'agent",
      agentKbStrategyAll: "Toutes les bases de connaissances",
      agentKbStrategySelected: "Bases de connaissances sélectionnées",
      agentKbStrategyNone: "Aucune base de connaissances",
      sharedAt: "Partagé le",
      myPermission: "Mon accès",
      goToKb: "Accéder à la base de connaissances",
    },
    features: {
      knowledgeGraph: "Graphe de connaissances",
      multimodal: "OCR d’images, sous-titres visuels",
      questionGeneration: "Génération de questions",
      wiki: "Wiki",
    },
  },
  embedPublish: {
    create: "Nouveau point de terminaison",
    channelsTitle: "Canaux IM",
    disabled: "Désactivé",
    empty: "Aucune clé API de plateforme",
    allowedOrigins: "Origines autorisées",
    embedCode: "Code d\'incorporation",
    widgetCode: "Script du widget",
    copyCode: "Copier le code",
    channelKey: "Clé du canal",
    channelKeyDesc:
      "Mot de passe à long terme pour l’intégration avec un site tiers—gardez-le en sécurité",
    channelKeyHint:
      "Impossible de charger la clé du canal. Fermez et rouvrez ce canal, ou actualisez la page.",
    channelKeyLoadFailed: "Impossible de charger la clé du canal",
    channelKeyUnavailable: "Clé indisponible",
    resetKeyTitle: "Réinitialiser la clé du canal",
    resetKeyConfirmOk: "Réinitialiser",
    resetKeyConfirmBody:
      "Après la réinitialisation, l’ancienne clé du canal est immédiatement révoquée. Chaque snippet d’incorporation déployé doit utiliser la nouvelle clé pour continuer à fonctionner. Cette opération ne peut pas être annulée.",
    resetKeySuccess:
      "Clé du canal réinitialisée—la nouvelle clé est affichée dans le champ d’entrée",
    resetKeyFailed: "Impossible de réinitialiser la clé du canal",
    copyChannelKeyTitle: "Copier la clé du canal",
    revealKey: "Montrer la clé",
    hideKey: "Masquer la clé",
    createTitle: "Nouveau point de terminaison MCP",
    name: "Nom",
    nameDesc: "Pour les listes d’administration et l’identification des canaux",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    nameDefaultHint:
      'Par défaut "{agent} · Web Embed" lorsqu’un agent est sélectionné. Laissez vide pour sauvegarder le nom par défaut.',
    defaultChannelName: "Web Embed",
    defaultChannelNameWithAgent: "{agent} · Web Embed",
    welcomeMessage: "Message de bienvenue",
    welcomePlaceholder: "Bonjour! Comment puis-je vous aider?",
    welcomeMessageDesc:
      "Affiché dans le chat d’incorporation avant que le visiteur n’envoie son premier message; laissez vide pour masquer",
    showSuggestedQuestions: "Questions suggérées",
    showSuggestedQuestionsDesc:
      "Afficher les prompts de démarrage avant le premier message du visiteur, en fonction de la configuration de l’agent et des bases de connaissances associées",
    originsHint:
      "Enter the host websites allowed to embed this channel (A), not the WeKnora address (B). One full origin per line, e.g. https://shop.example.com; at least one required. Supports *.example.com.",
    originsRequired: "At least one allowed origin is required",
    originsInvalid: "Invalid origin: {origin}",
    originsWildcardProd: "Wildcard origin '*' is not allowed in production",
    originsPlaceholder: "https://shop.example.com",
    rateLimitLabel: "Appels max par minute",
    rateLimitDesc:
      "Per visitor IP, max embed API requests per minute; excess requests are temporarily rejected. Default 30.",
    rateLimitDayLabel: "Daily request cap",
    rateLimitDayDesc:
      "Channel-wide total requests allowed per day (across all visitor IPs); bounds abuse cost if the publish token is copied. Default 10000.",
    publishTokenWarning:
      "The publish token appears in plain text in the embed page source — anyone visiting the host site can read it. Treat it as a publishable key, not a secret: never embed an agent that exposes sensitive data, always configure the origin allowlist and request caps, and rotate the token immediately if it leaks.",
    primaryColor: "Primary color",
    pageTitle: "Page title",
    pageTitleDesc:
      "Shown to visitors in chat header and browser tab; takes priority over name",
    pageTitlePlaceholder: "AI Assistant",
    headerTitleMode: "Header title",
    headerTitleModeChannel: "Fixed channel title",
    headerTitleModeSession: "Follow session title",
    headerTitleModeDesc:
      "Fixed: always show the page title. Session: auto-title from the first message; falls back to page title until generated.",
    tokenHint: "Failed to load the channel key. Close and reopen this channel.",
    createdWithToken: "Embed channel created — the channel key is shown below",
    created: "Point de terminaison créé",
    updated: "Point de terminaison mis à jour",
    saveFailed: "Échec de l’enregistrement de l’information d’identification",
    deleted: "Point de terminaison supprimé",
    copied: "Copié dans le presse-papiers",
    loadError: "Échec du chargement des détails de la tâche",
    missingChannel: "Canal d’insertion manquant ou jeton manquant",
    invalidChannel: "Canal d’insertion invalide",
    sessionFailed:
      "Échec de la création de la session de chat, veuillez réessayer",
    channelDisabled:
      "Ce canal d’insertion est désactivé. Le réactiver sous Éditeur d’agents → Insertion sur page Web",
    loading: "Chargement...",
    tabIframe: "iframe",
    tabWidget: "Widget",
    tabSecure: "Mode sécurisé",
    widgetPosition: "Position du widget",
    widgetPreview: "Aperçu du widget",
    positionBottomRight: "Bas droit",
    positionBottomLeft: "Bas gauche",
    positionTopRight: "Haut droit",
    positionTopLeft: "Haut gauche",
    tokenCopied: "Clé de canal copiée",
    awaitingToken: "En attente du fournisseur de la page hôte pour le jeton...",
    preview: "Aperçu",
    previewIframeHint:
      "Montre comment l’insertion iframe apparaît sur une page tierce (pareil que le morceau de code copié).",
    previewWidgetHint:
      "Montre le widget flottant sur une page hôte simulée. Sur un site réel, le hôte passe le jeton via postMessage.",
    previewMockPage: "Page hôte simulée",
    previewLoading: "Chargement de l’aperçu...",
    previewUnavailable:
      "L’aperçu n’est pas disponible. Assurez-vous que le canal est activé et que Redis est disponible.",
    defaultChatTitle: "Assistant AI",
    newChat: "Nouvelle conversation",
    sectionChannel: "Informations sur le canal",
    sectionSecurity: "Sécurité et limite de taux",
    sectionCapabilities: "Capacités du chat",
    allowWebSearch: "Afficher le bouton de recherche web",
    allowWebSearchDesc:
      "Lorsque cette option est activée, les visiteurs pourront voir et activer ou désactiver eux-mêmes le bouton de recherche web dans la zone d’entrée. Par défaut, le bouton est désactivé. Il s’affiche uniquement si l’agent lié à la recherche web est activé.",
    allowFileUpload: "Afficher le téléchargement de fichiers",
    allowFileUploadDesc:
      "Lorsque cette fonctionnalité est activée, les visiteurs peuvent télécharger des images et des pièces jointes de documents. Cette fonctionnalité nécessite que l’agent lié supporte le téléchargement d’images.",
    webhookUrl: "URL du webhook",
    webhookUrlPlaceholder:
      "https://votre-serveur.exemple.com/weknora/embed-events",
    webhookUrlDesc:
      "Optionnel. WeKnora envoie les événements message_sent / message_received à ce point de terminaison HTTPS.",
    webhookSecret: "Secret du webhook",
    webhookSecretPlaceholder:
      "Secret HMAC-SHA256 (en-tête X-WeKnora-Signature)",
    webhookSecretKeep: "Laisser vide pour conserver le secret enregistré",
    webhookSecretDesc:
      "Optionnel. Lorsqu’il est défini, les corps de requête sont signés pour la vérification sur votre serveur.",
    agentWebSearchDisabledHint:
      "Cet agent n’a pas la recherche web activée. Les visiteurs ne verront pas le bouton de recherche web jusqu’à ce que vous l’activez dans les paramètres de l’agent.",
    agentImageUploadDisabledHint:
      "Cet agent n’a pas le téléchargement d’images activé. Les visiteurs ne verront pas le bouton de téléchargement jusqu’à ce que vous l’activez dans les paramètres de l’agent.",
    sectionAppearance: "Apparence",
    sectionDeploy: "Déploiement sur le site",
    sectionWebhook: "Appels d’événements",
    stepChannel: "Informations sur le canal",
    stepSecurity: "Sécurité",
    stepCapabilities: "Capacités",
    stepAppearance: "Apparence",
    stepWebhook: "Webhooks",
    stepDeploy: "Déployer",
    deployIntro:
      "Choisissez un style d’intégration et copiez le code ci-dessous dans votre site. Affichez ou tournez la clé de canal en bas lorsque vous avez besoin d’identifiants.",
    deployStepEmbed: "Copier le code d’intégration",
    deployStepEmbedDesc:
      "Choisissez un style d’intégration et collez le code dans votre site.",
    embedIframeDesc: "Intégrez le chat complet dans une zone de page fixe.",
    embedWidgetDesc:
      "Launcher flottant dans un coin; cliquez pour ouvrir le panneau de chat.",
    embedSecureDesc:
      "Recommandé: le jeton de publication reste sur votre propre backend et la page reçoit uniquement des jetons à durée limitée, donc le secret à durée limitée ne parvient jamais au navigateur.",
    deployAfterSaveHint:
      "Après la sauvegarde, vous pouvez copier la clé de canal et le code d’embed ici.",
    widgetTokenNote:
      "Les scripts du widget doivent inclure la clé de canal; les embeds basés sur iframe échangent automatiquement les identifiants lors du chargement.",
    secureTokenNote:
      "La page ne transporte plus le jeton de publication; elle pointe vers un endpoint de jeton sur votre backend (d_a_t_a-token-endpoint). Votre backend échange le jeton de publication contre un jeton à durée limitée de 30 minutes et le renvoie à la page; le widget se recharge automatiquement avant l’expiration.",
    secureServerLabel:
      "Exemple d\'endpoint de jeton côté serveur (le jeton de publication reste sur le serveur)",
    tabServerNode: "Node.js",
    tabServerGo: "Go",
    enabled: "Activer le canal",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    defaultLocale: "Langue par défaut",
    defaultLocaleDesc:
      "Langue de l\'interface utilisateur des visiteurs lorsque la conversation s\'ouvre; vide suit le navigateur ou le Widget d\'hôte setLocale().",
    defaultLocaleBrowser: "Navigateur / hôte par défaut",
  },
  knowledgeEditor: {
    activity: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      allOutcomes: "Tous les résultats",
      allActions: "Toutes les actions",
      refresh: "Mettre à jour",
      retry: "Recommencer",
      empty: "Aucune clé API de plateforme",
      emptyFiltered: "Aucun enregistrement d\'activité correspondant",
      clearFilters: "Effacer les filtres",
      loadingMore: "Chargement en cours…",
      end: "Fin du journal.",
      loadFailed: "Échec du chargement des clés API de plateforme",
      columns: {
        time: "Heure",
        action: "Action",
        target: "Cible",
        actor: "Acteur",
        outcome: "Résultat",
      },
      expanded: {
        targetType: "Type de cible",
        targetId: "ID de la cible",
        actorId: "ID de l\'acteur",
        apiKeyName: "Nom",
        apiKeyId: "Identifiant de la clé API",
        details: "Détails bruts",
      },
      drawer: {
        sectionSummary: "Résumé de l\'événement",
        sectionIdentifiers: "Identifiants associés",
        sectionTask: "Informations sur la tâche",
        targetChange: "Modification",
      },
      systemActor: "Système",
      actorWithAPIKey: "{actor} · Clé API · {name}",
      actorAPIKey: "Clé API · {name}",
      knowledgeBase: "Base de connaissances",
      countItems: "{count} éléments",
      titleWithCount: "{title} et {count} autres",
      importSummary: "Succès {success} / Échec {failed} / Ignoré {skipped}",
      targets: {
        knowledge_base: "Base de connaissances",
        knowledge: "Connaissance et Récupération",
        faq_entry: "Entrée FAQ",
        knowledge_tag: "Tag",
        data_source: "Data source",
        knowledge_base_share: "Partager",
        knowledge_move: "Déplacement de la connaissance",
        wiki: "Wiki",
      },
      detailFields: {
        task_id: "ID de la tâche",
        trigger: "Déclencheur",
        processing_status: "État de traitement",
        source_kb_id: "ID de la base de connaissances source",
        target_kb_id: "ID de la base de connaissances cible",
        sync_log_id: "ID du journal de synchronisation",
        mode: "Mode de Connexion",
        attempt: "Essai de traitement",
        count: "Nombre de questions",
        total: "Exécutions",
        processed: "Traité",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        skipped: "Ignorées",
        failure_stage: "Échec au niveau",
      },
      actions: {
        "kb.created": "Knowledge base created",
        "kb.updated": "Knowledge base updated",
        "kb.deleted": "Knowledge base deleted",
        "kb.duplicated": "Knowledge base duplicated",
        "kb.clone_started": "Clone started",
        "kb.clone_completed": "Clone completed",
        "kb.clone_failed": "Clone failed",
        "knowledge.created": "Knowledge added",
        "knowledge.updated": "Knowledge updated",
        "knowledge.deleted": "Knowledge deleted",
        "knowledge.batch_deleted": "Knowledge batch deleted",
        "knowledge.reparse_started": "Reparse started",
        "knowledge.parse_canceled": "Parsing canceled",
        "knowledge.move_started": "Knowledge move started",
        "knowledge.move_completed": "Knowledge move completed",
        "knowledge.move_failed": "Knowledge move failed",
        "tag.created": "Tag created",
        "tag.updated": "Tag updated",
        "tag.deleted": "Tag deleted",
        "datasource.created": "Data source created",
        "datasource.updated": "Data source updated",
        "datasource.deleted": "Data source deleted",
        "datasource.sync_started": "Data source sync started",
        "datasource.sync_completed": "Data source sync completed",
        "datasource.sync_failed": "Data source sync failed",
        "datasource.paused": "Data source paused",
        "datasource.resumed": "Data source resumed",
        "kb.share_added": "Share added",
        "kb.share_permission_changed": "Share permission changed",
        "kb.share_removed": "Share removed",
        "wiki.content_changed": "Wiki content changed",
        "faq.import_started": "FAQ import started",
        "faq.import_completed": "FAQ import completed",
        "faq.import_failed": "FAQ import failed",
      },
      outcomes: {
        accepted: "Accepté",
        success: "Invitation révoquée.",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        partial: "Partiel",
        canceled: "Annulé",
        denied: "Refusé",
      },
      detailValues: {
        user: "Initié par utilisateur",
        manual: "Manuel",
        schedule: "Planifié",
        system: "Prompt système",
        pending: "En attente",
        completed: "Terminé",
        partial: "Partiel",
        canceled: "Annulé",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        enqueue: "Soumission de tâche",
        reuse_vectors: "Réutiliser les vecteurs",
        reparse: "Reparser",
        viewer: "Observateur",
        editor: "Éditeur",
        admin: "Admin",
        append: "Ajouter",
        replace: "Remplacer",
      },
    },
    titleCreate: "Créer une base de connaissances",
    titleEdit: "Paramètres de la base de connaissances",
    navGroups: {
      basic: "Fondamentaux",
      processing: "Indexation & Analyse",
      data: "Storage & Data",
      integration: "Publication et Intégrations",
      management: "Membres et Collaboration",
    },
    sidebar: {
      basic: "Fondamentaux",
      models: "Configuration du modèle",
      vectorStore: "Stockage de vecteurs",
      chunking: "Paramètres de découpage",
      storage: "Engine de stockage",
      advanced: "Paramètres avancés",
      faq: "Liste de questions fréquentes",
      graph: "Extraction de graphes au niveau des morceaux",
      multimodal: "OCR d’images, sous-titres visuels",
      asr: "Speech",
      datasource: "Data Sources",
      share: "Partager",
      activity: "Activité",
    },
    errors: {
      vectorStoreBindingInvalid:
        "Le stockage de vecteurs sélectionné ne peut pas être utilisé. Choisissez un autre stockage ou utilisez le stockage système par défaut.",
      vectorStoreUnavailable:
        "Le stockage de vecteurs sélectionné n\'est actuellement pas disponible. Vérifiez sa configuration de connexion dans Paramètres → Stockages de vecteurs.",
    },
    basic: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      kbId: "ID de la base de connaissances",
      kbIdDesc:
        "Utilisez cet ID pour cibler la base de connaissances dans les intégrations API",
      typeLabel: "Type de Modèle",
      typeDocument: "Documentaire",
      typeFAQ: "FAQ",
      typeDescription:
        "Les FAQs correspondent à des questions-réponses structurées. Les documents sont analysés et divisés en segments. Les bases de connaissances WIKI génèrent automatiquement des pages de connaissances interconnectées grâce à un modèle d\'IA.",
      nameLabel: "Nom",
      namePlaceholder: "Par exemple: automatisation des opérations centrales",
      descriptionLabel: "Description",
      descriptionPlaceholder:
        "Optionnel: qui utilise cet point d\'accès et pourquoi",
      profile: {
        title: "Permissions des rôles",
        hint: "Laissez vide ou 0 pour utiliser la valeur par défaut (120 secondes)",
        empty: "Aucune clé API de plateforme",
        noDocuments: "Aucun document analysé dans cette base de connaissances.",
        questions: "Questions typiques",
        generate: "Générer le lien",
        regenerate: "Regénérer",
        adopt: "Utiliser comme description",
        generated: "Description par l\'IA générée",
        generateFailed: "Échec de la génération de la description par l\'IA",
        adopted: "Copiée dans la description; enregistrez pour appliquer",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        generatedAt: "Générée {time} · basée sur {count} documents",
      },
    },
    wiki: {
      title: "Permissions des rôles",
      synthesisModelLabel: "Modèle de synthèse de la WIKI",
      synthesisModelPlaceholder:
        "Sélectionnez le modèle d\'IA pour la génération de la WIKI",
      synthesisModelTip: "Retombe sur le modèle de résumé si non défini",
      extractionGranularityLabel: "Granularité d\'extraction",
      contentInstructionsLabel: "Instructions sur le contenu de la WIKI",
      contentInstructionsTip:
        "Contrôlez l\'accent et le ton pour les résumés, les pages et l\'index. Les règles de citation, de fusion et de véracité restent à la charge du système. Réprocessablez le contenu existant pour appliquer les changements.",
      contentInstructionsPlaceholder:
        "Par exemple: utilisez un ton légal et mettez l\'accent sur les propriétaires, les échéances et les risques…",
      extractionInstructionsLabel: "Focus d\'extraction Wiki",
      extractionInstructionsTip:
        "Décrivez les entités et concepts du domaine pour les prioriser sans remplacer le JSON système et le protocole de citation.",
      extractionInstructionsPlaceholder:
        "Par exemple: priorisez les produits, les versions, les organisations, les propriétaires et les concepts techniques clés…",
      extractionGranularityTip:
        "Contrôle le nombre d\'entités/concepts Wiki extraits par document. Finer = index plus serré, coarser = plus complet",
      granularityFocused: "Préoccupé",
      granularityStandard: "Standard",
      granularityExhaustive: "Épuisant",
      granularityFocusedHint:
        "Extraire uniquement les sujets principaux du document (par exemple, un CV produit la personne et ses projets). Le plus propre, peut manquer des entités secondaires.",
      granularityStandardHint:
        "Sujets principaux plus entités/concepts secondaires qui reçoivent une discussion substantielle. Passe les termes mentionnés. Requis par défaut.",
      granularityExhaustiveHint:
        "Extraire chaque entité et concept nommé, y compris les mentions passantes de piles/outils. Utilisez lorsque la base de connaissances sert de glossaire.",
    },
    indexing: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      searchTitle: "Recherche RAG",
      searchDesc:
        "Déchiffrer, vectoriser et indexer les documents pour une récupération hybride",
      wikiTitle: "Base de connaissances Wiki",
      wikiDesc:
        "Résume les documents en connaissances structurées et interconnectées",
      graphTitle: "Graphe de connaissances",
      graphDesc:
        "Extraire des entités et des relations pour construire un graphe de connaissances pour la récupération basée sur les graphes",
      atLeastOne: "Au moins une stratégie d’indexation doit être activée",
      embeddingRequired: "La recherche RAG nécessite un modèle d’embedding",
      lockedTip:
        "La stratégie d’indexation ne peut pas être modifiée une fois la base de connaissances remplie. Veuillez vider d’abord la base de connaissances.",
      rebuildConfirmTitle: "Reconstruire l’Index",
      rebuildConfirmBody:
        "La stratégie d’indexation a changé. Re-traiter {count} documents existants? Cela peut prendre un certain temps.",
      rebuildSuccess: "Tâche de reconstruction soumise pour {count} documents",
      rebuildSkip:
        "Vous pouvez déclencher manuellement une reconstruction plus tard à partir des Sources d’informations",
    },
    wikiBrowser: {
      editBtn: "Éditer",
      historyBtn: "Historique",
      historyTitle: "Historique des révisions · {title}",
      deletePageBtn: "Supprimer",
      deletePageConfirm:
        'Supprimer la page "{title}"? Elle disparaîtra de la wiki.',
      deletePageSuccess: "Page supprimée",
      deletePageFailed: "Échec de la suppression de la page",
      editTitlePlaceholder: "Titre de la page",
      editSummaryPlaceholder: "One-line summary (shown in the index)",
      editContentPlaceholder: "Markdown body, [[wiki-link]] syntax supported",
      editSaveSuccess: "Page saved",
      editSaveFailed: "Failed to save",
      editConflictHint:
        "Save conflict: the page was updated to v{ver} by someone else. Reload the latest version (discarding your draft) or overwrite (the overwritten version stays in history).",
      editConflictReload: "Load latest",
      editConflictOverwrite: "Overwrite",
      editSourceUser: "Manually edited",
      editSourceAgent: "AI edited",
      editSourceRevert: "Reverted",
      editSourcePipeline: "Auto-generated",
      newPageBtn: "New page",
      newPageTitle: "Create wiki page",
      newPageTitleLabel: "Title",
      newPageTitlePlaceholder: "Enter a page title",
      newPageSlugLabel: "Slug (page address)",
      newPageSlugPlaceholder: "e.g. concept/my-topic",
      newPageSlugHint:
        'Letters/digits/dashes, "/" for hierarchy; cannot be changed later',
      newPageTypeLabel: "Page type",
      newPageContentLabel: "Content (optional)",
      newPageMissingFields: "Title and slug are required",
      newPageSuccess: "Page created",
      newPageFailed: "Failed to create page",
      revisionCurrent: "Current",
      revisionCurrentHint:
        "This is the current version. Pick a historical version on the left to diff or revert.",
      revisionSelectHint: "Sélectionnez une version à gauche",
      revisionEmpty:
        "Aucune historique pour l’instant — les instantanés sont enregistrés automatiquement lors des modifications du contenu",
      revisionDiff: "Diff avec actuel",
      revisionRaw: "Contenu brut",
      revisionDiffCaption:
        "v{from} → v{to} (rouge = cette version, vert = actuel)",
      revisionDiffIncremental: "Modification de version",
      revisionDiffCumulative: "Vs actuel",
      revisionDiffBasisLabel: "Mode de comparaison",
      revisionViewModeLabel: "Mode d’affichage",
      revisionLatestChangeHint:
        "Modifications de la version précédente à l’actuelle",
      revisionIncrementalHint: "Modifications qui ont produit v{ver}",
      revisionInitialRange: "Initial → v{ver}",
      revisionInitialCreationHint: "Contenu initial à la création",
      revisionCumulativeHint:
        "Toutes les modifications de cette version à l’actuelle",
      revisionDiffIncrementalCaption:
        "v{from} → v{to} (versions adjacentes; rouge = ancien, vert = nouveau)",
      revisionDiffCumulativeCaption:
        "v{from} → v{to} (modifications cumulatives à l’actuelle)",
      revisionFirstVersionHint:
        "Ceci est la première version — il n’y a pas de version précédente à comparer.",
      revisionDiffTitle: "Titre",
      revisionDiffSummary: "Résumé",
      revisionDiffContent: "Corps",
      revisionDiffEmpty:
        "Aucune différence dans le titre, le résumé ou le corps par rapport à l’actuel",
      revisionLoadFailed: "Échec du chargement de l’historique des versions",
      revertBtn: "Revenir à cette version",
      revertConfirm:
        "Revenir à v{ver}? Le contenu actuel est d\\\'abord instantané, donc la réversion elle-même peut être annulée.",
      revertSuccess: "Reversion réussie à v{ver}",
      revertFailed: "Échec de la réversion",
      viewInGraph: "Afficher dans le Graphique",
      editingBadge: "En édition",
      pageActions: "Actions de la page",
      tabDocuments: "Documents",
      tabGraph: "Graphique",
      tabGraphTip:
        "Un graphique des liens entre les pages du Wiki (graphique de liens entre les pages). Ce n\\\'est PAS le même que le Graphique d\\\'entités et de relations extraites par LLM configuré sous \"Paramètres de la Base de connaissances -> Graphique de la Base de connaissances\".",
      searchPlaceholder: "Recherche par nom ou e-mail",
      searchNoResults: "Aucune page correspondante trouvée",
      viewModeToggle: "Basculer la vue du répertoire",
      viewTree: "Vue en arbre",
      viewList: "Vue en liste",
      newRootFolder: "Nouveau Dossier",
      newSubfolder: "Nouveau Sous-dossier",
      folderActions: "Actions du dossier",
      folderNamePlaceholder: "Entrez le nom du dossier",
      createFolderSuccess: "Dossier créé",
      createFolderFailed: "Échec de la création du dossier",
      movePageSuccess: "Page déplacée",
      movePageFailed: "Échec du déplacement de la page",
      renameFolder: "Renommer Dossier",
      renameFolderSuccess: "Dossier renommé",
      renameFolderFailed: "Échec du renommage du dossier",
      deleteFolder: "Supprimer Dossier",
      deleteFolderConfirm: 'Supprimer le dossier "{name}"?',
      deleteFolderSuccess: "Dossier supprimé",
      deleteFolderFailed: "Échec de la suppression du dossier",
      deleteFolderNotEmpty:
        "Le dossier n\\\'est pas vide. Supprimez d\\\'abord ses pages et sous-dossiers.",
      moveFolderSuccess: "Dossier déplacé",
      moveFolderFailed: "Échec du déplacement du dossier",
      moveFolderIntoSelf:
        "Ne peut pas déplacer un dossier dans lui-même ou dans un sous-dossier",
      moveConfirm: 'Déplacer vers "{target}"?',
      moveConfirmTitle: "Confirmer le déplacement",
      rootFolderLabel: "Racine",
      filterSummary: "Résumés",
      filterKnowledge: "Connaissances",
      filterEntity: "Entités",
      filterConcept: "Concepts",
      filterSynthesis: "Synthèse",
      filterComparison: "Comparaisons",
      legendFamiliar: "Sources que vous utilisez souvent",
      emptyTitle: "Aucune entrée FAQ",
      emptyDesc:
        "Créez un espace partagé ou rejoignez-en un existant avec un code d’invitation",
      selectPageHint:
        "Sélectionnez une page de gauche pour afficher son contenu",
      version: "v{ver}",
      aliases: "Alias",
      linkedFrom: "Lié depuis",
      sources: "Documents source",
      graphEmpty: "Chargement du graphique...",
      fitView: "Ajuster à la vue",
      indexTitle: "Index",
      loading: "Chargement...",
      loadMoreShort: "Charger plus",
      indexOverviewTag: "Répertoire",
      indexEmpty:
        "Aucune page wiki pour l\\\'instant. Chargez d\\\'abord des documents.",
      graphNoData:
        'No graph data yet. Upload documents first. (This view shows links between Wiki pages, which is different from the entity-relationship graph configured under "KB Settings → Knowledge Graph".)',
      showArrows: "Afficher les flèches",
      hideArrows: "Masquer les flèches",
      expandNeighbors: "Élargir les voisins",
      bloomNeighbors: "Élaborer les voisins",
      growFrontier: "Élargir la frontière ({count})",
      growFrontierTitle:
        "Élargir tous les nœuds en anneau pointillé ({count}) d\\\'un seul clic",
      cardEgoTitle: "Focus actuel",
      cardOverviewTitle: "Aperçu de la base de connaissances",
      cardOverviewPrimary: "{returned} / {total} nœuds",
      cardOverviewHintTruncated:
        "Double-cliquez sur n\\\'importe quel nœud pour le mettre en évidence",
      cardOverviewHintFull:
        "Affiche tous les nœuds de la base de connaissances",
      cardRelatedNodes: "{count} nœuds liés",
      helpButtonTitle: "Aide",
      helpTitle: "Actions du canevas",
      helpClickAction: "Cliquez",
      helpClickDesc: "Ouvrez les détails du nœud",
      helpDblClickAction: "Double-cliquez",
      helpDblClickDesc: "Mettez en évidence ce nœud",
      helpShiftClickAction: "Cliquez avec Maj",
      helpShiftClickDesc: "Diffusez les voisins sur le canevas",
      helpHoverPlusAction: "Survoler → ⊕",
      helpHoverPlusDesc: "Même chose que Cliquez avec Maj",
      helpDragAction: "Faites glisser le nœud",
      helpDragDesc: "Relocalisez le nœud",
      helpPanAction: "Faites glisser l\'espace vide",
      helpPanDesc: "Déplacez le canevas",
      helpZoomAction: "Faites défiler la molette de la souris",
      helpZoomDesc: "Zoomez sur le canevas",
      neighborsProgress:
        "Affiche {visible} sur {total} voisins ({hidden} non chargés)",
      neighborsAllShown:
        "Tous les {total} voisins sont déjà sur le canevas (cliquez sur Élargir pour mettre en évidence le sous-graphe de ce nœud)",
      neighborsNone: "Cette page n\'a pas de voisins liés",
      neighborsCenterUnreachable:
        "Affiche {visible} sur {total} voisins ({hidden} non atteignables: liens morts, filtrés ou supprimés)",
      neighborsOverviewHidden:
        "Affiche {visible} sur {total} voisins ({hidden} hors aperçu — cliquez sur Élargir pour vous y tourner)",
      backToOverview: "Retour à l’aperçu",
      queueStatus: "{count} tâches en attente dans la file d’attente de Wiki",
      issueTitle:
        "Cette page a {count} conflits ou erreurs de connaissances en attente",
      issueFixBtn: "Correction automatique par IA",
      issueMixed: "Informations mixtes",
      issueConflict: "Conflit factuel",
      issueOutdated: "Obsolète",
      issueAttention: "Besoin d’attention",
      issueReportedBy: "Signalé par {reporter}",
      issueAiLinter: "Correcteur AI",
      issueIgnore: "Ignorer l\'alarme fausse",
      globalIssuesTitle: "Problèmes de contenu en attente globaux",
      globalIssuesCount: "{count} Problèmes de contenu en attente",
      globalIssuesEmpty: "Aucun problème de contenu en attente",
      issuePagePrefix: "Page: ",
      issueGoFix: "Aller à la correction",
      fixAssistantTitle: "Assistant de correction Wiki Smart",
      issueFixSuggestions: "Suggestions d\'optimisation du contenu ({count})",
      issueFixSingle: "Corriger",
      fixStartError: "Échec de démarrage de l\'assistant de correction",
      issueFixPromptSingle:
        "Veuillez corriger le problème (ID: {id}) sur la page [[{slug}]].",
      issueFixPromptAutoStart:
        "Veuillez corriger les problèmes suivants sur la page [[{slug}]]:",
    },
    buttons: {
      create: "Nouveau point de terminaison",
      save: "Enregistrer la configuration",
      saveAndClose: "Enregistrer et fermer",
    },
    footer: {
      instantEffect:
        "Les modifications sur cette page entrent en vigueur immédiatement; pas besoin de sauvegarder",
    },
    postCreateHint: {
      title: "Permissions des rôles",
      footer:
        'Continuez à ajuster les paramètres, configurez le partage et les sources d\'information, puis cliquez sur "Enregistrer et fermer".',
      followUpDesc:
        "Configurez les sources d\'information sur la gauche, ou utilisez la gestion du partage pour publier dans des espaces",
    },
    share: {
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      hintTitle: "Partage des notes",
      addShare: "Partager",
      unshareConfirm:
        'Êtes-vous sûr de vouloir annuler le partage de "{name}"?',
      tip1: "Après le partage, les membres de l\'espace auront accès à cette base de connaissances en fonction des permissions affectées",
      tip2: "La permission d\'édition permet aux membres de modifier le contenu; la permission en lecture seule ne permet que la récupération et les Q&A",
    },
    messages: {
      loadModelsFailed: "Échec du chargement de la liste de modèles",
      loadDataFailed: "Failed to load knowledge base data",
      notFound: "Inscription non trouvée.",
      nameRequired: "Entrez un nom",
      summaryRequired: "Veuillez sélectionner un modèle de résumé",
      multimodalInvalid:
        "La validation de la configuration multimodal a échoué",
      createSuccess: "L’espace partagé a été créé avec succès",
      createFailed: "Échec de la création de la clé API de plateforme",
      missingId: "L\'ID de la base de connaissances est manquant",
      buildDataFailed: "Failed to construct submission data",
      updateSuccess: "Configuration enregistrée avec succès",
      indexModeRequired:
        "Veuillez sélectionner un mode d\'indexation pour les bases de connaissances FAQ",
      storageChangeConfirm:
        "Cette base de connaissances contient déjà des fichiers. Le changement du moteur de stockage peut rendre certains fichiers inaccessibles. Voulez-vous poursuivre?",
    },
    document: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    },
    faq: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      indexModeLabel: "Mode d\'indexation",
      indexModeDescription:
        "L\'indexation des questions seule améliore la précision; question et réponse améliore la rappel.",
      questionIndexModeLabel: "Mode d\'indexation des questions",
      questionIndexModeDescription:
        "Combinées: les questions standard et similaires sont indexées ensemble. Séparées: chaque question est indexée individuellement pour une récupération plus précise mais nécessite plus de stockage.",
      entryGuide:
        "Chaque entrée FAQ comprend une question primaire, des questions similaires, des exemples négatifs et plusieurs réponses. Gérez-les dans la vue détaillée de la base de connaissances FAQ.",
      tagDesc: "Sélectionnez des tags pour les entrées FAQ",
      tagPlaceholder: "Sélectionnez des tags",
      modes: {
        questionOnly: "Questions seule",
        questionAnswer: "Question + réponse",
        combined: "Combiné",
        separate: "Séparé",
      },
      standardQuestion: "Question Primaire",
      standardQuestionDesc:
        "Définissez la formulation standard de la question — c\'est la manière la plus courante dont les utilisateurs la posent.",
      answers: "Réponses",
      answersDesc:
        "Fournissez un contenu de réponse complet et précis. Plusieurs réponses peuvent être ajoutées pour couvrir différents scénarios.",
      similarQuestions: "Questions Similaires",
      similarQuestionsDesc:
        "Ajoutez des questions ayant le même sens mais une formulation différente pour aider le système à mieux correspondre aux requêtes des utilisateurs.",
      negativeQuestions: "Exemples Négatifs",
      negativeQuestionsDesc:
        "Ajoutez des questions qui ne devraient pas correspondre à cette réponse, pour exclure les faux positifs.",
      editorCreate: "Créer une Entrée FAQ",
      editorEdit: "Modifier une Entrée FAQ",
      answerPlaceholder:
        "Entrez le contenu de la réponse, supporte le texte multi-lignes, appuyez sur Ctrl+Entrée ou cliquez sur le bouton pour ajouter",
      similarPlaceholder:
        "Entrez une question similaire et cliquez sur l’icône de plus pour ajouter",
      negativePlaceholder:
        "Entrez un exemple négatif et cliquez sur l’icône de plus pour ajouter",
      answerRequired: "Veuillez fournir au moins une réponse",
      emptyTitle: "Aucune entrée FAQ",
      emptyDesc:
        "Créez un espace partagé ou rejoignez-en un existant avec un code d’invitation",
      searchPlaceholder: "Recherche par nom ou e-mail",
      searchTest: "Test de Recherche",
      createGroup: "Nouveau",
      searchTestTitle: "Test de Recherche FAQ",
      queryLabel: "Requête",
      queryPlaceholder: "Entrez le texte à envoyer au modèle",
      vectorThresholdDesc: "Plage 0-1, valeur par défaut 0,7",
      matchCountLabel: "Compteur de Résultats",
      matchCountDesc: "Plage 1-50, valeur par défaut 10",
      searchButton: "Rechercher",
      searching: "Recherche de la base de connaissances...",
      searchResults: "Résultats de la Recherche",
      noResults: "Aucun contenu correspondant trouvé",
      matchedQuestion: "Correspondante",
      matchTypeEmbedding: "Correspondance Vectorielle",
      matchTypeKeywords: "Correspondance de Mots-Clefs",
      similarityThresholdLabel: "Seuil de Similarité",
      statusEnabled: "Activé",
      statusDisabled: "Désactivé",
      statusEnableSuccess: "Entrée FAQ activée",
      statusDisableSuccess: "Entrée FAQ désactivée",
      statusUpdateFailed: "Échec de mise à jour de l\'état",
      recommended: "Recommander",
      recommendedEnabled: "Recommandation activée",
      recommendedDisabled: "Recommandation désactivée",
      recommendedDisableSuccess: "Recommandation d\\\'entrée FAQ désactivée",
      recommendedUpdateFailed:
        "Échec de mise à jour de l\'état de recommandation",
      batchUpdateTag: "Mettre à jour en masse les balises",
      batchUpdateTagTip:
        "Définir les balises pour {count} entrées sélectionnées",
      batchEnable: "Activer les sélectionnées",
      batchDisable: "Désactiver les sélectionnées",
      batchDelete: "Suppression en bloc",
      confirmBatchDelete:
        "Supprimer les {count} entrées FAQ sélectionnées? Cette action ne peut pas être annulée.",
      confirmDelete: 'Supprimer le modèle "{name}"?',
      batchDeleteSuccess: "Supprimées {count} entrées FAQ",
    },
    faqImport: {
      title: "Permissions des rôles",
      modeLabel: "Mode d\\\'importation",
      appendMode: "Mode Ajout",
      replaceMode: "Mode Remplacement",
      fileLabel: "Sélectionner un fichier",
      fileTip:
        'Supporte JSON / CSV / Excel. En-têtes CSV/Excel: Balise (obligatoire), Question (obligatoire), Questions similaires (optionnel, séparées par ##), Questions négatives (optionnel, séparées par ##), Réponses du bot (obligatoire, séparées par ##), Répondre à tous (optionnel, par défaut FAUX), Désactivé (optionnel, par défaut FAUX), Exclure des recommandations (optionnel, par défaut FAUX). En-têtes obsolètes "Catégorie" et format ancien (standard_question, answers, similar_questions, negative_questions) sont également pris en charge.',
      clickToUpload: "Cliquez pour télécharger un fichier",
      dragDropTip: "ou faites glisser et déposez le fichier ici",
      importButton: "Importer FAQ",
      deleteSuccess: "Clé API de plateforme supprimée",
      previewCount: "{count} entrées analysées",
      previewMore: "{count} entrées supplémentaires non montrées",
      importSuccess: "Importation terminée",
      parseFailed: "Échec de la lecture du fichier",
      invalidJSON: "Format JSON invalide",
      unsupportedFormat: "Format de fichier non supporté",
      selectFile: "Veuillez sélectionner un fichier à importer",
      downloadExample: "Télécharger un exemple",
      downloadExampleJSON: "Télécharger un exemple JSON",
      downloadExampleCSV: "Télécharger un exemple CSV",
      downloadExampleExcel: "Télécharger un exemple Excel",
    },
    faqExport: {
      exportButton: "Exporter",
      exportCSV: "Exporter au format CSV",
      exportJSON: "Exporter au format JSON",
      exportSuccess: "Exportation réussie",
      exportFailed: "Exportation échouée",
    },
    models: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      llmLabel: "Modèle LLM",
      llmDesc:
        "Modèle de langage à grande échelle utilisé pour la résumation et la génération d’abstracts (optionnel)",
      llmPlaceholder: "Sélectionnez un modèle LLM (optionnel)",
      embeddingLabel: "Modèle d’embedding",
      embeddingDesc:
        "Modèle d’embedding utilisé pour la vectorisation du texte",
      embeddingPlaceholder: "Entrez le texte pour générer une représentation",
      embeddingLocked:
        "La base de connaissances possède déjà des fichiers. Le modèle d’embedding ne peut pas être modifié",
      embeddingOptional: "(Optionnel)",
      embeddingWikiOptionalDesc:
        "Optionnel. Lorsqu’il est défini, il active la correspondance de similarité pour la classification du répertoire Wiki, permettant aux nouvelles pages de réutiliser les dossiers existants davantage; sinon, l’arborescence complète du répertoire est utilisée.",
    },
    chunking: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      sizeLabel: "Taille du segment",
      sizeDescription:
        "Nombre maximum de caractères par segment (100–4000). Par défaut 512 ≈ 100–130 jetons d’anglais. Moins pour les FAQ (200–400), plus pour les documents narratifs (1000–2000).",
      characters: "caractères",
      overlapLabel: "Superposition de segments",
      overlapDescription:
        "Caractères partagés entre les segments adjacents (0–500). Valeur par défaut 80 ≈ 15% de la taille — point culminant selon la recherche actuelle. Utilisez 0 pour les FAQ et les données structurées, 150–200 pour les narrations longues.",
      separatorsLabel: "Séparateurs",
      separatorsDescription:
        "Caractères ou chaînes préférées par le séparateur lors de la découpe. Les séparateurs de plus haute priorité sont tentés en premier; l’ordre par défaut favorise le paragraphe → phrase → séparations ponctuelles.",
      separatorsPlaceholder: "Sélectionnez ou personnalisez les séparateurs",
      separators: {
        doubleNewline: "Double retour chariot (↵)",
        singleNewline: "Retour chariot simple (⏎)",
        periodCn: "Point chinois (。)",
        exclamationCn: "Exclamation chinoise (！)",
        questionCn: "Point d interrogation chinois (？)",
        semicolonCn: "Point-virgule chinois (；)",
        semicolonEn: "Point-virgule (;)",
        space: "Espace Partagé",
      },
      parentChildLabel: "Segmentation Parent-Enfant",
      parentChildDescription:
        "Segmentation de deux niveaux: les petits segments enfants sont matchés par vecteur (hits précis), mais le grand segment parent est retourné au modèle LLM (contexte riche). Recommandé pour les documents longs (>10 pages); sautez cette étape pour les FAQ courtes pour économiser de l’espace de stockage.",
      parentChunkSizeLabel: "Taille du Segment Parent",
      parentChunkSizeDescription:
        "Taille du segment de contexte renvoyé au modèle LLM (512–8192). Valeur par défaut 4096 ≈ 1000 jetons anglais, s’adaptant confortablement à n’importe quelle fenêtre de contexte de modèle LLM moderne.",
      childChunkSizeLabel: "Taille du Segment Enfant",
      childChunkSizeDescription:
        "Taille du segment embebued utilisé pour le matching par vecteur (64–2048). Valeur par défaut 384 ≈ 80 jetons — point culminant pour les embeddings de modèle sentence-transformer / BGE-stylé.",
      strategyLabel: "Stratégie de Ségmentation",
      strategyDescription:
        "Choisissez la méthode selon laquelle les documents sont divisés en segments. Le mode Automatique analyse chaque document et sélectionne la meilleure stratégie.",
      strategyPlaceholder:
        "Sélectionnez une stratégie de segmentation (divise par longueur si laissée vide)",
      strategies: {
        auto: {
          label: "Changer le mot de passe",
          tooltip:
            "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
        },
        heading: {
          label: "Changer le mot de passe",
          tooltip:
            "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
        },
        heuristic: {
          label: "Changer le mot de passe",
          tooltip:
            "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
        },
        legacy: {
          label: "Changer le mot de passe",
          tooltip:
            "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
        },
      },
      overlapWarning:
        "Overlap is large compared to chunk size — chunks will share most of their content.",
      advancedLabel: "Advanced options",
      tokenLimitLabel: "Token limit per chunk",
      tokenLimitDescription:
        "Hard token cap per chunk (0–8192). 0 = off (chunk size in characters only). Activate when your embedding model has a small token limit: 200 for MiniLM (256 tok), 400 for BGE/Cohere (512 tok). Modern embedders (OpenAI, Voyage, Jina-v3) accept >2000 tokens — leave at 0.",
      languagesLabel: "Language hints",
      languagesDescription:
        "Restricts heuristic patterns to the chosen languages (DE/EN/ZH/FR). Empty = auto-detect from sample. Set explicitly for homogeneous corpora to avoid false-positive matches across languages.",
      languagesPlaceholder: "Auto-detect",
      languageOptions: {
        de: "De",
        en: "Anglais",
        zh: "Chinois",
        fr: "Français",
      },
      debug: {
        toggle: "Importer à partir du code",
        toggleHint:
          "Exécuter le chunker sur un texte d’échantillon sans recharger",
        sampleLabel: "Texte d\'échantillon",
        samplePlaceholder:
          "Coller un extrait de Markdown ou de texte brut pour voir comment le chunking actuel le divise...",
        presetLabel: "Charger un échantillon:",
        samples: {
          markdown: "Documents Markdown",
          faq: "Liste de questions fréquentes",
          chapter: "Chapitres PDF",
          plain: "Texte simple",
        },
        runButton: "Exécuter la prévisualisation",
        loading: "Chargement...",
        errorPrefix: "La prévisualisation a échoué",
        selectedTier: "Stratégie sélectionnée",
        rejected: "Stratégies rejetées",
        contextHeader: "En-tête de contexte",
        fallbackWarning:
          "La chaîne de stratégies a échoué — le contenu ne se divise pas intelligemment avec les paramètres actuels",
        profile: {
          lines: "lignes",
          chars: "caractères",
          headings: "entêtes Markdown",
          pageBreaks: "séparations de page",
          chapterMarkers: "marqueurs de chapitres",
          languages: "langues",
        },
        stats: {
          chunks: "Fichiers",
          truncated: "Sortie partielle",
        },
      },
    },
    multimodal: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    },
    asr: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      modelLabel: "Modèle de classification",
      modelDescription:
        "Laissez vide pour réutiliser le modèle de résumé de la base de connaissances.",
      modelPlaceholder: "Sélectionnez un modèle à tester",
      languageLabel: "Indice linguistique audio",
      languageDescription:
        "Sélectionnez la langue d\\\'affichage de l\\\'interface",
      languagePlaceholder:
        "Par exemple zh ou en; vide signifie détection automatique",
    },
    advanced: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      questionGeneration: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        countLabel: "Nombre de questions",
        countDescription:
          "Nombre de questions à générer par segment de document (1-10)",
        instructionsLabel: "Instructions de description",
        instructionsDescription:
          "Nommez l’audience, les termes à conserver ou le ton; le format de sortie reste constant.",
        instructionsPlaceholder:
          "par exemple: Écrit pour les agents de support; décrire les lignes de produits en langage simple et conserver les numéros de modèle…",
      },
      profile: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        modelLabel: "Modèle de classification",
        modelDescription:
          "Laissez vide pour réutiliser le modèle de résumé de la base de connaissances.",
        modelPlaceholder: "Sélectionnez un modèle à tester",
        instructionsLabel: "Instructions de description",
        instructionsDescription:
          "Nommez l’audience, les termes à conserver ou le ton; le format de sortie reste constant.",
        instructionsPlaceholder:
          "par exemple: Écrit pour les agents de support; décrire les lignes de produits en langage simple et conserver les numéros de modèle…",
      },
      autoTag: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        modelLabel: "Modèle de classification",
        modelDescription:
          "Laissez vide pour réutiliser le modèle de résumé de la base de connaissances.",
        modelPlaceholder: "Sélectionnez un modèle à tester",
        maxTagsLabel: "Nombre maximum de balises par document",
        maxTagsDescription:
          "Associez automatiquement 1 à 10 balises existantes par document.",
        skipIfTaggedLabel: "Ignorer les documents déjà balisés",
        skipIfTaggedDescription:
          "Lorsque cette option est activée, les documents précédemment balisés lors de l’importation ne sont pas modifiés, afin d’éviter la dilution d’une classification intentionnelle.",
      },
      tableMetadataInstructions: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        placeholder: "Entrez des secondes, plage recommandée 60-1800",
      },
      multimodal: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        vllmLabel: "Modèle Vision-Vision Langage",
        vllmDescription:
          "Modèle de vision-langage requis pour la compréhension multimodal",
        vllmPlaceholder: "Sélectionnez un modèle VLLM (requis)",
        descriptionLanguageLabel: "Langue de Description d’Image",
        descriptionLanguageDescription:
          "Laissez vide pour suivre la langue du document plutôt que de forcer le chinois",
        descriptionLanguageAuto: "Suivre la langue du document",
        customInstructionsLabel: "Instructions de Traitement d’Image",
        customInstructionsDescription:
          "Ajoutez des priorités visuelles tout en conservant les contrats de sortie OCR et Markdown",
        customInstructionsPlaceholder:
          "Par exemple: priorisez les noms d’étiquettes, les numéros de modèle, les codes d’alarme et les unités de table…",
      },
    },
  },
  chat: {
    memoryUsedCount: "Utilisé {count} mémoires",
    memoryForget: "Supprimer cette mémoire",
    memoryForgotten: "Mémoire supprimée",
    memoryForgetFailed: "Échec de suppression",
    memoryHint:
      "Ces sont les mémoires à long terme que cette réponse a vues. La suppression d\'une entrée l\'empêche d\'être utilisée à nouveau.",
    suggestedQuestions: "Vous pouvez me poser",
    followUpQuestions: "Continuez à poser des questions",
    followUpQuestionsLoading: "Chargement des questions suggérées",
    refreshSuggestedQuestions: "Plus",
    thinking: "Pensée",
    thinkingAlt: "Pensée en cours",
    conversationTime: {
      today: "Aujourd\'hui",
      yesterday: "Hier",
      thisYear: "{month}/{day} {time}",
      otherYear: "{month}/{day}/{year} {time}",
    },
    preparingAnswer: "Préparation de la réponse…",
    connectingModelAndGeneratingAnswer:
      "Connexion au modèle et génération de la réponse…",
    modelStillResponding:
      "Le modèle prend plus de temps que prévu, encore en attente…",
    deepThoughtCompleted: "Pensée approfondie terminée",
    deepThoughtAlt: "Pensée approfondie terminée",
    referencesTitle: "Références {count} éléments liés",
    referencesDocCount: "Références {count} document(s)",
    referencesWebCount: "Références {count} résultat(s) web",
    referencesDocAndWebCount:
      "Références {docCount} document(s) et {webCount} page(s) web",
    referencesDrawerTitle: "Sources",
    referencesDrawerTitleWeb: "Sources web",
    referencesDrawerTitleDocs: "Sources de documents",
    referencesDrawerTitleTools: "Résultats de l\'outil",
    referencesDrawerTitleMixed: "Sources",
    referencesDrawerWebSection: "Web",
    referencesDrawerDocsSection: "Documents",
    referencesDrawerToolsSection: "Outils",
    referencesDrawerEmpty: "Aucune source disponible",
    sandbox: {
      panelTitle: "Sandbox",
      tabArtifacts: "Fichiers",
      tabTerminal: "Terminal",
      tabDesktop: "Bureau",
      artifactsEmpty: "Aucun fichier généré dans cette conversation.",
      artifactScope: "Portée du fichier",
      artifactsCurrent: "Cet tour",
      artifactsAll: "Tous les fichiers",
      artifactsSearch: "Recherche de noms de fichiers",
      artifactsNoMatches: "Aucun fichier correspondant",
      desktopNotStarted:
        "L’ordinateur de bureau n’est pas actuellement connecté. Connectez-le à cette conversation pour l’attacher.",
      desktopStart: "Connecter l’ordinateur de bureau",
      desktopStarting:
        "Connexion en cours à l’ordinateur de bureau… (3-8 secondes pour la première utilisation)",
      desktopUnsupported:
        "Cette configuration de sandbox ne dispose pas d’un ordinateur de bureau. Choisissez un modèle d’image d’ordinateur de bureau dans les paramètres de la sandbox du workspace, sur un Cube ou un backend E2B.",
      desktopBusy:
        "Cette conversation a déjà un ordinateur de bureau en cours d’utilisation. Seule une connexion à la fois est autorisée, sinon deux personnes partagent un clavier et une souris.",
      desktopStartFailed:
        "Le bureau de bureau a échoué à démarrer. Vous pouvez le relancer.",
      desktopRebuilt:
        "La sandbox a été recréée pour une mise à niveau de compétence, donc l’ancien bureau de bureau et tout le travail non enregistré sont disparus. La reconnexion vous donne un bureau de bureau vierge.",
      desktopNeedsProvision:
        "Cette conversation n’a pas de sandbox en cours d’exécution. En créer et vous y connecter démarre une nouvelle sandbox, facturée en fonction de votre configuration de workspace.",
      desktopCreateAndStart: "Créer et vous connecter",
      desktopPaused:
        "La sandbox de cette conversation est en pause. La reconnexion à l’ordinateur de bureau la relance.",
      desktopDisconnected: "L’ordinateur de bureau est déconnecté",
      desktopIdleDisconnected:
        "L’ordinateur de bureau a été déconnecté suite à une inactivité. La sandbox va s’arrêter elle-même suite à son délai TTL. Vous pouvez vous reconnecter.",
      desktopRetry: "Reconnecter",
      notStarted:
        "Le terminal n’est pas en cours d’exécution pour l’instant. Son démarrage vous connecte à cette conversation, en créant ou en reprendant un terminal s’il n’en existe pas.",
      paused: "En pause",
      start: "Démarrer le terminal",
      connecting: "Connexion à la sandbox...",
      needsProvision:
        "Cette conversation n’a pas de sandbox en cours d’exécution. En créer un démarre une nouvelle sandbox, facturée en fonction de votre configuration de workspace.",
      createAndStart: "Créer et démarrer",
      noSandbox:
        "Pas de sandbox pour l’instant, et l’agent actuel n’a pas de backend de sandbox configuré, donc il n’y a nulle part où en créer un. Passez à un agent avec un backend de sandbox configuré, ou envoyez un message qui exécute du code.",
      unsupported:
        "Ce type de fichier ne prend pas en charge la prévisualisation en ligne",
      disconnected: "La connexion a été perdue",
      retry: "Recommencer",
      sessionEnded: "La session terminale a été terminée",
      idleDisconnected:
        "La terminale a été déconnectée en raison de son inactivité. Le sandbox s\'arrêtera automatiquement après sa durée de vie maximale. Vous pouvez vous reconnecter.",
      authRevoked:
        "Votre session n\'est plus valide, donc la terminale a été déconnectée. Connectez-vous à nouveau, puis reconnectez-vous.",
    },
    questionMinimapTitle: "Q&A",
    questionMinimapPosition: "Activer {current} sur {total}",
    questionMinimapAriaLabel: "Aperçu de la question",
    questionMinimapAttachmentPlaceholder: "(Pièce jointe)",
    referenceChunkCount: "{count} bloc(s)",
    fallbackHint:
      "Aucun contenu pertinent trouvé dans la base de connaissances. La réponse suivante est directe du modèle.",
    truncatedHint:
      "Cette réponse a été tronquée à la limite de sortie. La réponse complète produite par le modèle avant le troncature est présentée ci-dessus.",
    rewind: {
      tooltip:
        "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
      confirmBody:
        "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
      confirmButton: "Revenir",
      cancelButton: "Annuler",
      success: "Invitation révoquée.",
      busy: "Attendez que cette tour se termine avant de revenir",
      noCheckpoint:
        "Ne peut pas revenir: cette session a un espace de travail en direct mais aucun point de contrôle accessible",
      sandboxReplaced:
        "Ne peut pas revenir: le sandbox a été remplacé, donc l\'ancien point de contrôle est inaccessible",
      reloadFailed:
        "La conversation a été rétrogradée, mais l\'historique ne peut pas être rechargé. Rafraîchissez la conversation si des messages plus anciens sont manquants",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      skipped: "Ignorées",
      skipNoSandbox:
        "La conversation a été rétrogradée; l\'espace de travail reste inchangé (aucun sandbox lié)",
      skipNoCheckpoint:
        "La conversation a été rétrogradée; l\'espace de travail reste inchangé (aucun point de contrôle à restaurer)",
    },
    requestInfoTitle: "Informations sur la demande",
    requestInfoRequestId: "ID de la demande",
    requestInfoMessageId: "ID du message",
    requestInfoSessionId: "ID de la session",
    requestInfoUrl: "Requête",
    requestInfoSentAt: "Envoyée à",
    requestInfoEmpty: "Aucune information de demande disponible",
    channelWeb: "Web",
    channelApi: "API",
    channelIm: "IM",
    chunkLabel: "Fragment {index}:",
    navigateToDocument: "Voir les détails du document",
    chunkIdLabel: "ID du fragment:",
    documentIdLabel: "ID du document:",
    faqIdLabel: "ID du FAQ:",
    faqContainerIdLabel: "ID du conteneur:",
    faqAnswersLabel: "Réponses:",
    chunkOrdinal: "Fragment {index}",
    previewContent: "Prévisualisation du contenu",
    noPlanSteps: "Aucune étape détaillée fournie",
    chunkIndexLabel: "Fragment #{index}",
    chunkPositionLabel: "(Position: {position})",
    noRelatedChunks: "Aucun fragment lié trouvé",
    noSearchResults: "Aucun résultat de recherche trouvé",
    relevanceHigh: "Haute pertinence",
    relevanceMedium: "Moyenne pertinence",
    relevanceLow: "Pertinence faible",
    relevanceWeak: "Faible pertinence",
    webSearchNoResults: "Aucun résultat de recherche web trouvé",
    otherSource: "Autres sources",
    webGroupIntro: "Les {count} éléments suivants proviennent de",
    graphConfigTitle: "Configuration du graphe",
    entityTypesLabel: "Types d\'entités:",
    relationTypesLabel: "Types de relations:",
    graphResultsHeader: "{count} résultats liés trouvés",
    graphNoResults: "Aucune information de graphe liée trouvée",
    unknownLink: "Lien inconnu",
    contentLengthLabel: "Longueur {value}",
    notProvided: "Non fourni",
    promptLabel: "Intervention",
    errorMessageLabel: "Message d\'erreur",
    summaryLabel: "Résumé",
    rawTextLabel: "Texte brut",
    collapseRaw: "Réduire l\'original",
    expandRaw: "Élargir l\'original",
    noWebContent: "Aucun contenu web récupéré",
    webFetchStatusSuccess: "Récupéré",
    webFetchStatusFailed: "Échec",
    webFetchStatusSkipped: "Ignoré",
    webFetchErrorCode: "Code d\'erreur",
    webFetchRetryable: "Redistribuable",
    webFetchContentRange: "Caractères {start}–{end} sur {total}",
    webFetchPartialContent: "Page partielle",
    webFetchSummaryFailed: "Résumé échoué",
    lengthChars: "{value} caractères",
    lengthThousands: "{value}K caractères",
    lengthTenThousands: "{value} dizaines de milliers de caractères",
    noDatabaseRecords: "No matching records found",
    nullValuePlaceholder: "<NULL>",
    chunkCountValue: "{count} morceaux",
    documentDescriptionLabel: "Description:",
    documentSourceLabel: "Source:",
    documentFileLabel: "Fichier:",
    documentMetadataLabel: "Metadata",
    documentInfoEmpty: "Aucune information sur le document disponible",
    positionLabel: "Position:",
    chunkPositionValue: "Morceau #{index}",
    contentLengthLabelSimple: "Longueur du contenu:",
    fullContentLabel: "Contenu complet",
    copyContent: "Copier le contenu",
    knowledgeBaseCount: "{count} bases de connaissances",
    noKnowledgeBases: "Aucune base de connaissances disponible",
    enterDescription: "Entrer la description",
    rawOutputLabel: "Sortie brute",
    wikiWritePageTitle: "Écrire une page Wiki",
    wikiReplaceTextTitle: "Remplacer le texte Wiki",
    wikiRenamePageTitle: "Renommer la page Wiki",
    wikiDeletePageTitle: "Supprimer la page Wiki",
    wikiActionCreated: "Créé",
    wikiActionUpdated: "Mis à jour",
    wikiActionRenamed: "Renommé",
    wikiActionDeleted: "Supprimé",
    wikiFieldSlug: "Slug",
    wikiFieldTitle: "Titre",
    wikiFieldPageType: "Type",
    wikiFieldSummary: "Résumé",
    wikiFieldOldText: "Ancien texte",
    wikiFieldNewText: "Nouveau texte",
    wikiFieldOldSlug: "Ancien slug",
    wikiFieldNewSlug: "Nouveau slug",
    wikiFieldAffectedPages: "Pages affectées",
    wikiAffectedCount: "{count} lien(s) de page mis à jour",
    processError: "Erreur de traitement",
    sessionExcerpt: "Extrait de la session",
    noAnswerContent: "(Aucun contenu de réponse)",
    manualSourcesHeading: "Sources",
    noMatchFound: "Aucun contenu correspondant trouvé",
    deleteSessionFailed:
      "Échec de la suppression, veuillez réessayer plus tard!",
    imageTooMany: "Maximum 5 images autorisées",
    imageTypeSizeError:
      "Seuls les fichiers JPG/PNG/GIF/WEBP de moins de 10MB sont acceptés",
    imageUploadTooltip:
      "Télécharger une image ( collage et glisser/déposer sont autorisés )",
    attachmentUploadTooltip: "Télécharger un document (documents, audio, etc.)",
    attachmentWithCount: "{count} pièce(s) jointe(s) téléchargée(s)",
    attachmentTooMany: "Maximum {max} pièces jointes autorisées",
    attachmentTotalTooMany:
      "Les images et les pièces jointes combinées ne peuvent pas dépasser {max}",
    attachmentTooLarge: "Le fichier {name} dépasse la limite de {max}MB",
    attachmentTypeNotSupported: "Type de fichier non pris en charge: {name}",
    attachmentUploading: "Téléchargement {progress}%",
    attachmentParsing: "Analyse des pièces jointes...",
    attachmentReady: "Prêt",
    attachmentUploadFailed: "Échec du téléchargement de la pièce jointe",
    attachmentParseFailed: "Échec de l\'analyse de la pièce jointe",
    attachmentStillProcessing:
      "La pièce jointe {name} est toujours en cours d\'analyse",
  },
  tenant: {
    title: "Permissions des rôles",
    currentTenant: "Espace de travail actuel",
    switchTenant: "Basculer d\'espace de travail",
    switcher: {
      menuLabel: "Basculer d\'espace de travail",
      currentBadge: "Actuel",
      homeTooltip: "Votre espace de travail personnel",
      empty: "Aucune clé API de plateforme",
    },
    sectionDescription:
      "Invitez vos collègues au travail et gérnez leurs rôles. Seulement le propriétaire peut ajouter ou supprimer des membres.",
    statusActive: "Actif",
    statusInactive:
      "{count} outil(s) cochés ne peuvent pas prendre effet avec la configuration actuelle",
    statusSuspended: "Suspendu",
    statusUnknown: "Inconnu",
    loadingInfo: "Chargement des informations...",
    retry: "Recommencer",
    unknown: "Inconnu",
    formatError: "Erreur de format",
    searchPlaceholder: "Recherche par nom ou e-mail",
    noMatch: "Aucun espace de travail correspondant trouvé",
    switchSuccessTitle: "Espace de travail basculé",
    switchSuccessContent: "Vous êtes maintenant dans {name}",
    loadTenantsFailed: "Échec du chargement de la liste des espaces de travail",
    loading: "Chargement...",
    loadMore: "Charger davantage",
    create: {
      action: "Action",
      dialogTitle: "Générer un lien d\\\'invitation partagé",
      dialogSubtitle:
        "Un espace de travail a ses propres connaissances et membres. Vous deviendrez le propriétaire de l’espace de travail nouveau.",
      nameLabel: "Nom",
      namePlaceholder: "Par exemple: automatisation des opérations centrales",
      nameRequired: "Entrez un nom",
      descriptionLabel: "Description",
      descriptionPlaceholder:
        "Optionnel: qui utilise cet point d\'accès et pourquoi",
      submit: "Mettre à jour le mot de passe",
      cancel: "Annuler",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      disabled: "Désactivé",
    },
    details: {
      idLabel: "ID de l’espace de travail",
      idDescription: "Identifiant unique de votre espace de travail",
      nameLabel: "Nom",
      nameDescription: "Nom de votre espace de travail",
      descriptionLabel: "Description",
      descriptionDescription: "Description détaillée de l’espace de travail",
      businessLabel: "Domaine d’activité de l’espace de travail",
      businessDescription:
        "Domaine d’activité auquel appartient l’espace de travail",
      statusLabel: "État de l’espace de travail",
      statusDescription: "État actuel de l’espace de travail",
      createdAtLabel: "Heure de création du compte",
      createdAtDescription: "Heure à laquelle le compte a été créé",
      editName: "Modifier le nom",
      editNamePlaceholder: "Entrez le nouveau nom de l’espace de travail",
      editNameConfirm: "Enregistrer",
      editNameCancel: "Annuler",
      editNameRequired: "Le nom de l’espace de travail ne peut pas être vide",
      editNameSuccess: "Le nom de l’espace de travail a été mis à jour",
      editNameFailed: "Échec de la mise à jour du nom de l’espace de travail",
      editDescription: "Modifier la description",
      editDescriptionPlaceholder:
        "Entrez la nouvelle description de l’espace de travail",
      editDescriptionSuccess:
        "La description de l’espace de travail a été mise à jour",
      editDescriptionFailed:
        "Échec de la mise à jour de la description de l’espace de travail",
      descriptionEmptyPlaceholder: "Non défini",
    },
    storage: {
      quotaLabel: "Quota de stockage",
      quotaDescription:
        "Capacité totale de stockage allouée à l’espace de travail",
      usedLabel: "Stockage utilisé",
      usedDescription: "Espace de stockage utilisé",
      usageLabel: "Utilisation de stockage",
      usageDescription: "Pourcentage de capacité de stockage utilisée",
    },
    leaveDangerZone: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      button: "Révoquer",
    },
    deleteDangerZone: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      button: "Révoquer",
      confirmTitle: "Quitter ce workspace?",
      confirmBody:
        "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
      confirmHint:
        'Entrez le nom de l’espace de travail "{name}" pour confirmer la suppression.',
      confirm: "Révoquer",
      nameMismatch: "Le nom de l’espace de travail ne correspond pas",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    },
    messages: {
      fetchFailed: "Échec de récupération des informations du système",
      networkError: "Erreur réseau, veuillez vérifier votre connexion",
    },
    api: {
      title: "Permissions des rôles",
      docLabel: "Documentation API",
      docDescription: "Afficher la documentation API complète et des exemples",
      openDoc: "Ouvrir la documentation",
      userIdLabel: "ID utilisateur",
      userIdDescription: "Votre identifiant utilisateur unique",
      usernameLabel: "Nom d’utilisateur",
      usernameDescription: "Votre nom d’utilisateur de connexion",
      emailLabel: "E-mail",
      emailDescription: "Votre adresse email enregistrée",
      createdAtLabel: "Heure de création du compte",
      createdAtDescription: "Heure à laquelle le compte a été créé",
      desktopPortLabel: "Port API local (desktop)",
      desktopPortDescription:
        "Utiliser un port fixe (par exemple 37841) afin que les outils comme l’extension Chrome puissent conserver le même URL API. 0 signifie un port aléatoire à chaque démarrage. Redémarrez l’application après avoir enregistré.",
      desktopPortSave: "Enregistrer",
      desktopPortSaved:
        "Enregistré. Redémarrez l’application pour que les modifications prennent effet.",
      desktopPortSaveFailed: "Enregistrement échoué",
      desktopPortInvalid: "Entrez un port entre 0 et 65535",
      desktopBindPublicLabel: "Permettre l’accès LAN à l’API",
      desktopBindPublicDescription:
        "Lorsqu’il est activé, le serveur intégré écoute sur 0.0.0.0 afin que d’autres appareils sur votre LAN puissent atteindre l’API via l’adresse ci-dessous. Cela augmente l’exposition—utilisez les pare-feu hôtes et les règles de routage selon vos besoins. Redémarrez l’application après avoir modifié cette option.",
      desktopBindPublicSaved:
        "Enregistré. Redémarrez l’application pour que les modifications prennent effet.",
      desktopBindPublicSaveFailed: "Enregistrement échoué",
      lanUrlLabel: "URL API LAN de base",
      lanUrlDescription:
        "Affichée après avoir activé “Permettre l’accès LAN” et redémarré l’application. Si l’adresse IP est incorrecte, remplacez l’hôte par l’adresse IPv4 de votre machine à partir des paramètres de réseau système.",
      lanUrlCopyTitle: "Copier l’URL API LAN",
      lanUrlUnavailable:
        "L’API écoute sur toutes les interfaces, mais aucune adresse IPv4 LAN n’a pu être détectée automatiquement. Trouvez votre adresse IPv4 dans les paramètres de réseau et construisez http://votre_IP:PORT/api/v1 manuellement.",
    },
  },
  system: {
    title: "Permissions des rôles",
    sectionDescription:
      "Invitez vos collègues au travail et gérnez leurs rôles. Seulement le propriétaire peut ajouter ou supprimer des membres.",
    loadingInfo: "Chargement des informations...",
    retry: "Recommencer",
    versionLabel: "Version de l’application",
    versionDescription: "Version du service d’application (weknora-app)",
    frontendVersionLabel: "Version de l’interface utilisateur",
    frontendVersionDescription:
      "Version de construction de l’interface utilisateur (weknora-ui)",
    versionMismatch: "Incompatibilité avec la version de l’application",
    buildTimeLabel: "Heure de construction",
    buildTimeDescription: "Heure à laquelle le système a été construit",
    goVersionLabel: "Version de Go",
    goVersionDescription: "Version du langage Go utilisée par le backend",
    startedAtLabel: "Service démarré à",
    startedAtDescription:
      "Quand le processus backend actuel a dernierement démarré",
    uptimeLabel: "Uptime",
    uptimeDescription:
      "Durée pendant laquelle le service fonctionne depuis ce démarrage",
    uptimeDays: "{n}j",
    uptimeHours: "{n}h",
    uptimeMinutes: "{n}m",
    uptimeSeconds: "{n}s",
    dbVersionLabel: "Version de la base de données",
    dbVersionDescription:
      "Version actuelle de la migration de la base de données",
    dbMigrationFailedTag: "Migration échouée",
    dbMigrationFailedTitle: "Échec de la migration de la base de données",
    dbMigrationFailedDesc:
      "La migration de la base de données de démarrage n’a pas réussi avec succès. Certaines tables ou index peuvent être manquantes, ce qui peut casser l’ingestion de Wiki, le graphe de connaissances et d’autres fonctionnalités. Vérifiez d’abord le guide de dépannage ci-dessous; si le problème persiste, signalez-le via le lien.",
    dbMigrationViewDocs: "Voir le guide de dépannage",
    dbMigrationReportIssue: "Ne peut pas le corriger? Signaler un problème",
    keywordIndexEngineLabel: "Mot-clé Indexeur",
    keywordIndexEngineDescription: "Mot-clé indexeur en cours d\'utilisation",
    vectorStoreEngineLabel: "Stockage Vectoriel",
    vectorStoreEngineDescription: "Stockage vectoriel en cours d\'utilisation",
    graphDatabaseEngineLabel: "Graph Database Engine",
    graphDatabaseEngineDescription: "Currently used graph database engine",
    unknown: "Inconnu",
    messages: {
      fetchFailed: "Échec de récupération des informations du système",
      networkError: "Erreur réseau, veuillez vérifier votre connexion",
    },
    globalSettings: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      loading: "Chargement...",
      empty: "Aucune clé API de plateforme",
      saving: "Saving",
      saved: "Enregistré. S\'applique aux nouvelles sessions.",
      saveAnnouncement: "{label} saved",
      badgeRequiresRestart: "Restart required",
      badgeSecret: "Secret",
      badgeHighRisk: "High risk",
      badgeOverride: "Overridden",
      badgeOverrideTooltip:
        "This value has been saved to the database by an administrator, overriding the environment variable and built-in default.",
      modifiedAt: "Last modified: {value}",
      tagInputPlaceholder:
        "Press Enter to add an entry, e.g. example.com / *.foo.com / 10.0.0.0/8",
      priorityHint: {
        disclosure: "Configuration source and priority",
        tier1:
          'Items saved on this page (marked "Overridden") always win — the environment variable is ignored for them.',
        tier2:
          "Items not saved here fall back to the environment variable, or to the built-in default if no env var is set.",
        tier3:
          'To put an item back under environment-variable control, click the "Reset" button on its row.',
      },
      sections: {
        access: {
          tab: "Aperçu",
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        },
        tenant: {
          tab: "Aperçu",
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        },
        runtime: {
          tab: "Aperçu",
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
          restartHint: "Worker settings require restart",
        },
        security: {
          tab: "Aperçu",
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        },
        other: {
          tab: "Aperçu",
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        },
      },
      runtimeTable: {
        setting: "Setting and purpose",
        value: "Current value",
      },
      runtime: {
        title: "Permissions des rôles",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        refresh: "Mettre à jour",
        autoRefresh: "Auto-refresh (every 5s)",
        loading: "Chargement...",
        retry: "Recommencer",
        unavailableTitle: "Task queues unavailable",
        unavailable: "Indisponible",
        empty: "Aucune clé API de plateforme",
        detailsTitle: "Queue details",
        detailsDescription:
          "Live load and wait time for every processing lane. “Failed (stopped)” means the task exceeded its retry limit and will not run automatically again.",
        poolsTitle: "Pools de travail",
        poolsDescription:
          "Chaque phase a une capacité garantie; le cœur et l\\\'enrichissement peuvent également emprunter le pool élastique partagé.",
        perInstance:
          "La valeur de la carte est la capacité active/actuelle du cluster",
        poolConfigured: "Par processus {value}",
        poolInstances: "{value} instances",
        poolUtilization: "{value}% utilisées",
        queueCount: "{value} files d\\\'attente",
        weightShort: "Poids {value}",
        footnote:
          "Les valeurs de la carte montrent la capacité active/vivante du cluster; la configuration par processus nécessite un redémarrage. Le pool élastique partagé n\\\'utilise que les files de base et d\\\'enrichissement.",
        updatedAt: "Mis à jour à {value}",
        errors: {
          generic:
            "Quelque chose s\'est mal passé. Veuillez essayer à nouveau.",
        },
        summary: {
          title: "Permissions des rôles",
          active: "Connecté",
          pending: "En attente",
          retry: "Recommencer",
          archived:
            "Corrigez la cause racine avant de reprendre l’exécution. La suppression d’un enregistrement ne complète pas la tâche du métier originale.",
        },
        columns: {
          queue: "File d’attente",
          active: "Connecté",
          pending: "En attente",
          scheduled:
            "Les tâches planifiées peuvent être exécutées avant leur date prévue. Les tâches du pipeline de documents peuvent également utiliser une annulation du métier de manière sécurisée.",
          retry: "Recommencer",
          archived:
            "Corrigez la cause racine avant de reprendre l’exécution. La suppression d’un enregistrement ne complète pas la tâche du métier originale.",
          completed: "Terminé",
          latency: "Temps d’attente le plus long",
          status: "Statut",
        },
        status: {
          working: "Travaillant",
          waiting: "En attente...",
          idle: "Inactif",
          actionRequired: "Action requise",
          retrying: "En répétition",
          paused: "En pause",
        },
        failedNotice: {
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        },
        tasks: {
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
          listTitle: "Membres du workspace",
          openAria:
            "Afficher {count} tâches {state} dans la file d’attente {queue}",
          unavailable: "Indisponible",
          empty: "Aucune clé API de plateforme",
          loadError: "Échec du chargement des détails de la tâche",
          loadMore: "Charger davantage",
          loadedSummary:
            "{count} chargées — faites défiler ou appuyez pour charger plus",
          loadedAll: "Toutes les {count} chargées",
          loadingMore: "Chargement en cours…",
          attempts: "Essai {current}/{max}",
          unknownTarget: "Aucun objet lié n’a été identifié",
          knowledgeBaseLabel: "ID de la base de connaissances",
          knowledgeLabel: "ID du document",
          taskIDLabel: "ID de la tâche commerciale",
          tenantLabel: "ID de l’espace de travail",
          sourceLabel: "Source du Modèle",
          targetLabel: "ID de la cible",
          sourceKBLabel: "Source de la base de connaissances",
          targetKBLabel: "Cible de la base de connaissances",
          dataSourceLabel: "Data source ID",
          syncLogLabel: "ID du journal de synchronisation",
          knowledgeCountLabel: "Documents",
          enqueuedAt: "En file d’attente",
          startedAt: "Débutée",
          nextProcessAt: "Prochain traitement",
          lastFailedAt: "Dernière erreur",
          completedAt: "Terminée",
          deadline: "Échéance",
          worker: "Travailleur",
          health: "Santé d’exécution",
          orphaned:
            "Perte du battement du travailleur; en attente de récupération",
          cancel: "Annuler",
          cancelConfirm:
            "Cette opération utilise le flux d’annulation commerciale et arrête également les tâches liées au même document. Annuler?",
          runNow: "Exécuter maintenant",
          runNowConfirm:
            "Cette tâche sera mise en attente immédiatement sans réinitialiser son compteur de tentatives. Continuer?",
          deleteRecord: "Supprimer enregistrement",
          deleteConfirm:
            "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
          purgeArchived: "Effacer toutes les tâches échouées",
          purgeArchivedConfirm:
            "Supprimer toutes les {count} enregistrements échoués de cette file d’attente en une seule opération. Cela nettoie uniquement les tâches échouées dans la file d’attente — il n\'affecte pas les tâches en cours d\'exécution ou en attente, ni ne restaure le statut des documents qui ont déjà échoué. Nettoyer?",
          purgeArchivedSuccess: "Tâches échouées nettoyées {count}",
          purgeArchivedError: "Échec du nettoyage des tâches échouées",
          stateFilter: "Filtrer par état de tâche",
          states: {
            active: "Connecté",
            pending: "En attente",
            scheduled:
              "Les tâches planifiées peuvent être exécutées avant leur date prévue. Les tâches du pipeline de documents peuvent également utiliser une annulation du métier de manière sécurisée.",
            retry: "Recommencer",
            archived:
              "Corrigez la cause racine avant de reprendre l’exécution. La suppression d’un enregistrement ne complète pas la tâche du métier originale.",
            completed: "Terminé",
          },
          guides: {
            active: "Connecté",
            pending: "En attente",
            scheduled:
              "Les tâches planifiées peuvent être exécutées avant leur date prévue. Les tâches du pipeline de documents peuvent également utiliser une annulation du métier de manière sécurisée.",
            retry: "Recommencer",
            archived:
              "Corrigez la cause racine avant de reprendre l’exécution. La suppression d’un enregistrement ne complète pas la tâche du métier originale.",
            completed: "Terminé",
          },
          actionSuccess: {
            cancel: "Annuler",
            run_now: "Échec de l’exécution de la tâche",
            delete: "Supprimer",
          },
          actionError: {
            cancel: "Annuler",
            run_now: "Échec de l’exécution de la tâche",
            delete: "Supprimer",
          },
          taskTypes: {
            documentProcess: "Analyse de documents",
            manualProcess: "Reprocessing manuel",
            temporaryDocumentProcess: "Analyse de pièces jointes de chat",
            postProcess: "Post-processing de documents",
            summary: "Résumés de documents et de tables",
            tableSummary: "Génération de résumés de table",
            question: "Génération de questions au niveau des morceaux",
            multimodal: "OCR d’images, sous-titres visuels",
            graph: "Extraction de graphes au niveau des morceaux",
            sync: "Synchronisation manuelle et planifiée",
            faqImport: "Importation de FAQ",
            batchReparse: "Relecture en bloc",
            batchDelete: "Suppression en bloc",
            move: "Déplacement de document",
            indexDelete: "Suppression d\'index",
            kbClone: "Clonage de base de connaissances",
            kbDelete: "Suppression de base de connaissances",
            wikiIngest: "Génération de contenu Wiki",
            wikiFinalize: "Finalisation de Wiki",
          },
        },
        models: {
          title: "Permissions des rôles",
          description:
            "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
          scope: "Actif est au sein du cluster · en attente est local",
          disabled: "Désactivé",
          empty: "Aucune clé API de plateforme",
          backgroundOnly:
            "Tâches en arrière-plan uniquement; le chat interactif est exclu",
          columns: {
            model: "Modèle Généré",
            active: "Connecté",
            waiting: "En attente...",
            usage: "Concurrence",
          },
          status: {
            queued: "Limitation",
            full: "Complet",
          },
        },
        pools: {
          core: "Capacité garantie de parsing de documents et de manipulation manuelle",
          postprocess: "Finalisation du parsing, diffusion de l’enrichissement",
          enrichment: "Enrichment",
          maintenance:
            "Synchronisation de la source, traitement en lot et nettoyage de la suppression",
          shared:
            "Prêté au noyau ou à l’enrichissement selon la file d’attente",
          wiki: "Wiki",
        },
        poolDescriptions: {
          core: "Capacité garantie de parsing de documents et de manipulation manuelle",
          postprocess: "Finalisation du parsing, diffusion de l’enrichissement",
          enrichment: "Summaries, images, graph, and question generation",
          maintenance:
            "Synchronisation de la source, traitement en lot et nettoyage de la suppression",
          shared:
            "Prêté au noyau ou à l’enrichissement selon la file d’attente",
          wiki: "Wiki",
        },
        queueNames: {
          default: "Défaut",
          chat_attachment: "Analyse des uploads de chat à portée de session",
          postprocess: "Finalisation du parsing, diffusion de l’enrichissement",
          summary: "Résumés de documents et de tables",
          sync: "Synchronisation manuelle et planifiée",
          low: "Réflexion légère",
          multimodal: "OCR d’images, sous-titres visuels",
          graph: "Extraction de graphes au niveau des morceaux",
          question: "Génération de questions au niveau des morceaux",
          wiki: "Wiki",
        },
        queueDescriptions: {
          default: "Défaut",
          chat_attachment: "Analyse des uploads de chat à portée de session",
          postprocess: "Finalisation du parsing, diffusion de l’enrichissement",
          summary: "Résumés de documents et de tables",
          sync: "Synchronisation manuelle et planifiée",
          low: "Réflexion légère",
          multimodal: "OCR d’images, sous-titres visuels",
          graph: "Extraction de graphes au niveau des morceaux",
          question: "Génération de questions au niveau des morceaux",
          wiki: "Wiki",
        },
      },
      keyLabels: {
        auth: {
          registration_mode: "Mode d\'inscription à la demande",
          default_tenant_mode:
            "Provisionnement d\'espace de travail par défaut",
          complex_password_enabled: "Exiger un mot de passe complexe",
        },
        ssrf: {
          whitelist: "Liste blanche de protection SSRF",
        },
        sandbox: {
          docker_enabled:
            "Autoriser le backend de sandbox Docker. Un docker.sock local est équivalent à root sur l’hôte, donc cela reste désactivé par défaut. Seul un administrateur système peut l’activer; le changement prend effet immédiatement. Activez-le uniquement sur une installation unique et privée qui monte le socket du démon ou utilise un point de terminaison tcp:// sécurisé par TLS.",
        },
        tenant: {
          max_owned_per_user:
            "Nombre maximal de workspaces que les utilisateurs non-superutilisateurs peuvent posséder via la création auto-service. Ce nombre est vérifié à chaque création de workspace et prend effet immédiatement après la sauvegarde. La valeur 0 utilise la valeur par défaut intégrée de 10; une valeur négative désactive complètement cette limite (non recommandé sur les déploiements publics).",
          self_service_creation_enabled:
            "Déterminer si les utilisateurs non-superutilisateurs peuvent créer des workspaces eux-mêmes. Lorsque cette fonction est désactivée, les utilisateurs réguliers peuvent rejoindre les workspaces existants uniquement par invitation; les superutilisateurs restent exemptés des restrictions entre workspaces. Cette fonction prend effet immédiatement.",
          default_storage_quota_gb:
            "Quota de stockage par défaut (en Go) affecté lors de la création d’un nouveau workspace, couvrant les vecteurs, les originaux, le texte, les indexs et les données liées. Ce quota est défini à la création — les modifications s’appliquent uniquement aux nouveaux workspaces et ne modifient pas les workspaces existants. Une valeur de 0 ou négative utilise la valeur par défaut intégrée de 10 Go.",
          auto_create_api_key:
            "Crée automatiquement une clé API de type full_access pour un nouveau workspace et retourne son jeton de texte brut dans la réponse de la création. Utilisez cette option uniquement pour les intégrations qui dépendent du comportement hérité; elle est désactivée par défaut et la création explicite de clés API est recommandée.",
          auto_accept_invitation:
            "Quand cette fonction est activée, l\'invitation d\'un utilisateur enregistré par e-mail est automatiquement acceptée en tant que membre sans attendre la confirmation de la boîte aux lettres. Quand cette fonction est désactivée, l\'invité doit accepter l\'invitation à partir de sa boîte aux lettres. Cette fonction prend effet immédiatement.",
        },
        asynq: {
          core_concurrency:
            "Concurrence garantie au niveau du processus pour l\'analyse de documents et la manipulation manuelle. Le noyau peut également emprunter la piscine élastique partagée. Minimum 1; nécessite un redémarrage du service.",
          postprocess_concurrency:
            "Concurrence garantie au niveau du processus pour la finalisation et la diffusion des enrichissements légers. Minimum 1; nécessite un redémarrage du service.",
          enrichment_concurrency:
            "Concurrence garantie au niveau du processus pour la génération de résumés, d\'images, de graphes et de questions. Les enrichissements peuvent également emprunter la piscine élastique partagée. Minimum 1; nécessite un redémarrage du service.",
          maintenance_concurrency:
            "Concurrence au niveau du processus pour la synchronisation des sources, le travail par lots et la nettoyage, totalement isolée du pipeline frontale des utilisateurs. Minimum 1; nécessite un redémarrage du service.",
          shared_concurrency:
            "Concurrence partagée et élastique au sein du processus pour la synchronisation des sources, le traitement par lots et la purification, entièrement dégagée du pipeline frontale des utilisateurs. Minimum 1; nécessite un redémarrage du service.",
          wiki_concurrency:
            "Concurrence par processus pour le pool de travail dédié du Wiki, isolée des tâches en amont. Minimum 1; nécessite un redémarrage du service.",
        },
        model: {
          max_concurrency:
            "Cap par défaut sur le nombre de requêtes concurrentes en arrière-plan (ingestion/enrichissement) à un seul modèle, identifiée par l’ID du modèle et partagée entre les répliques. Lue à chaque appel et appliquée immédiatement sans redémarrage. 0 ou une valeur négative désactive le cap par défaut (chaque modèle respecte sa propre limite configurée dans la gestion des modèles). Affecte uniquement les tâches en arrière-plan, pas le chat interactif.",
        },
      },
      keyDescriptions: {
        auth: {
          registration_mode: "Mode d\'inscription à la demande",
          default_tenant_mode:
            "Provisionnement d\'espace de travail par défaut",
          complex_password_enabled: "Exiger un mot de passe complexe",
        },
        ssrf: {
          whitelist: "Liste blanche de protection SSRF",
        },
        sandbox: {
          docker_enabled:
            "Autoriser le backend de sandbox Docker. Un docker.sock local est équivalent à root sur l’hôte, donc cela reste désactivé par défaut. Seul un administrateur système peut l’activer; le changement prend effet immédiatement. Activez-le uniquement sur une installation unique et privée qui monte le socket du démon ou utilise un point de terminaison tcp:// sécurisé par TLS.",
        },
        tenant: {
          max_owned_per_user:
            "Nombre maximal de workspaces que les utilisateurs non-superutilisateurs peuvent posséder via la création auto-service. Ce nombre est vérifié à chaque création de workspace et prend effet immédiatement après la sauvegarde. La valeur 0 utilise la valeur par défaut intégrée de 10; une valeur négative désactive complètement cette limite (non recommandé sur les déploiements publics).",
          self_service_creation_enabled:
            "Déterminer si les utilisateurs non-superutilisateurs peuvent créer des workspaces eux-mêmes. Lorsque cette fonction est désactivée, les utilisateurs réguliers peuvent rejoindre les workspaces existants uniquement par invitation; les superutilisateurs restent exemptés des restrictions entre workspaces. Cette fonction prend effet immédiatement.",
          default_storage_quota_gb:
            "Quota de stockage par défaut (en Go) affecté lors de la création d’un nouveau workspace, couvrant les vecteurs, les originaux, le texte, les indexs et les données liées. Ce quota est défini à la création — les modifications s’appliquent uniquement aux nouveaux workspaces et ne modifient pas les workspaces existants. Une valeur de 0 ou négative utilise la valeur par défaut intégrée de 10 Go.",
          auto_create_api_key:
            "Crée automatiquement une clé API de type full_access pour un nouveau workspace et retourne son jeton de texte brut dans la réponse de la création. Utilisez cette option uniquement pour les intégrations qui dépendent du comportement hérité; elle est désactivée par défaut et la création explicite de clés API est recommandée.",
          auto_accept_invitation:
            "Quand cette fonction est activée, l\'invitation d\'un utilisateur enregistré par e-mail est automatiquement acceptée en tant que membre sans attendre la confirmation de la boîte aux lettres. Quand cette fonction est désactivée, l\'invité doit accepter l\'invitation à partir de sa boîte aux lettres. Cette fonction prend effet immédiatement.",
        },
        asynq: {
          core_concurrency:
            "Concurrence garantie au niveau du processus pour l\'analyse de documents et la manipulation manuelle. Le noyau peut également emprunter la piscine élastique partagée. Minimum 1; nécessite un redémarrage du service.",
          postprocess_concurrency:
            "Concurrence garantie au niveau du processus pour la finalisation et la diffusion des enrichissements légers. Minimum 1; nécessite un redémarrage du service.",
          enrichment_concurrency:
            "Concurrence garantie au niveau du processus pour la génération de résumés, d\'images, de graphes et de questions. Les enrichissements peuvent également emprunter la piscine élastique partagée. Minimum 1; nécessite un redémarrage du service.",
          maintenance_concurrency:
            "Concurrence au niveau du processus pour la synchronisation des sources, le travail par lots et la nettoyage, totalement isolée du pipeline frontale des utilisateurs. Minimum 1; nécessite un redémarrage du service.",
          shared_concurrency:
            "Concurrence partagée et élastique au sein du processus pour la synchronisation des sources, le traitement par lots et la purification, entièrement dégagée du pipeline frontale des utilisateurs. Minimum 1; nécessite un redémarrage du service.",
          wiki_concurrency:
            "Concurrence par processus pour le pool de travail dédié du Wiki, isolée des tâches en amont. Minimum 1; nécessite un redémarrage du service.",
        },
        model: {
          max_concurrency:
            "Cap par défaut sur le nombre de requêtes concurrentes en arrière-plan (ingestion/enrichissement) à un seul modèle, identifiée par l’ID du modèle et partagée entre les répliques. Lue à chaque appel et appliquée immédiatement sans redémarrage. 0 ou une valeur négative désactive le cap par défaut (chaque modèle respecte sa propre limite configurée dans la gestion des modèles). Affecte uniquement les tâches en arrière-plan, pas le chat interactif.",
        },
      },
      enumLabels: {
        auth: {
          registration_mode: {
            self_serve: "Self-service (tout le monde peut s’inscrire)",
            invite_only:
              "Invitation uniquement (inscription publique désactivée)",
          },
          default_tenant_mode: {
            create_personal: "Créer un espace de travail personnel",
            tenantless: "Ne pas créer d’espace de travail",
          },
        },
      },
      confirm: {
        confirmBtn: "Ajouter",
        cancelBtn: "Annuler",
        emptyValue: "(vide)",
        bodyAuthRegistrationMode:
          'Prêt à modifier "{label}" en: {value}\\n\\nSi passé en self_serve, tout le monde sur Internet publique peut créer un compte — veuillez confirmer que c\'est le but souhaité.',
        bodySandboxDockerEnabled:
          "Une fois activé, les administrateurs de l’espace de travail peuvent pointer un espace de travail sur le démon Docker local. Un docker.sock local est équivalent à root sur l’hôte. Utilisez cela uniquement sur une installation privée à un nœud unique qui monte le démon ou utilise un endpoint TCP:// distant protégé par TLS.",
      },
      listConfirm: {
        ssrf: {
          whitelist: {
            add: {
              header: "Annuler l\'autorisation administrateur du système",
              body: "Annuler les privilèges administrateur du système pour {email}? Ils perdront l\'accès à toutes les fonctionnalités au niveau système.",
              confirmBtn: "Ajouter",
            },
            remove: {
              header: "Annuler l\'autorisation administrateur du système",
              body: "Annuler les privilèges administrateur du système pour {email}? Ils perdront l\'accès à toutes les fonctionnalités au niveau système.",
              confirmBtn: "Ajouter",
            },
          },
        },
      },
      messages: {
        loadFailed: "Échec du chargement des clés API de plateforme",
        saveSuccess: "Paramètres d’intégration API enregistrés",
        saveFailed:
          "Échec de l’enregistrement de l’information d’identification",
      },
      reset: {
        label: "Changer le mot de passe",
        tooltip:
          "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
        confirmBtn: "Ajouter",
        confirmBody:
          "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
        success: "Invitation révoquée.",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      },
      admins: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        placeholder: "Entrez des secondes, plage recommandée 60-1800",
        loadFailed: "Échec du chargement des clés API de plateforme",
        saveSuccess: "Paramètres d’intégration API enregistrés",
        saveFailed:
          "Échec de l’enregistrement de l’information d’identification",
        confirm: {
          promote: {
            header: "Annuler l\'autorisation administrateur du système",
            body: "Annuler les privilèges administrateur du système pour {email}? Ils perdront l\'accès à toutes les fonctionnalités au niveau système.",
            confirmBtn: "Ajouter",
          },
          revoke: {
            header: "Annuler l\'autorisation administrateur du système",
            body: "Annuler les privilèges administrateur du système pour {email}? Ils perdront l\'accès à toutes les fonctionnalités au niveau système.",
            confirmBtn: "Ajouter",
          },
        },
      },
      passwordReset: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        action: "Action",
        dialogTitle: "Générer un lien d\\\'invitation partagé",
        warning:
          "Cette action est de haute risque. Vérifiez attentivement le nom d’utilisateur et l’adresse e-mail — ils sont la façon dont le nouveau utilisateur se connectera.",
        emailLabel: "E-mail",
        emailPlaceholder: "invitee{\\\'@\\\'}example.com",
        newPasswordLabel: "Nouveau mot de passe",
        newPasswordPlaceholder:
          "8 à 32 caractères, comprenant des lettres et des chiffres",
        confirmPasswordLabel: "Confirmer le nouveau mot de passe",
        confirmPasswordPlaceholder: "Entrez le nouveau mot de passe à nouveau",
        confirmBtn: "Ajouter",
        success: "Invitation révoquée.",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      },
      createUser: {
        label: "Changer le mot de passe",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        action: "Action",
        dialogTitle: "Générer un lien d\\\'invitation partagé",
        warning:
          "Cette action est de haute risque. Vérifiez attentivement le nom d’utilisateur et l’adresse e-mail — ils sont la façon dont le nouveau utilisateur se connectera.",
        usernameLabel: "Nom d’utilisateur",
        usernamePlaceholder: "2 à 50 caractères",
        emailLabel: "E-mail",
        emailPlaceholder: "invitee{\\\'@\\\'}example.com",
        autoGenerateLabel: "Générer automatiquement un mot de passe aléatoire",
        newPasswordLabel: "Nouveau mot de passe",
        newPasswordPlaceholder:
          "8 à 32 caractères, comprenant des lettres et des chiffres",
        confirmPasswordLabel: "Confirmer le nouveau mot de passe",
        confirmPasswordPlaceholder: "Entrez le nouveau mot de passe à nouveau",
        confirmBtn: "Ajouter",
        success: "Invitation révoquée.",
        successIdempotent:
          "L’utilisateur existait déjà; aucune modification n’a été apportée",
        missingPassword:
          "L’utilisateur a été créé, mais le mot de passe généré n’a pas été retourné. Réinitialisez le mot de passe pour récupérer l’accès.",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        validation: {
          usernameRequired: "Entrez un nom d’utilisateur",
          usernameLength:
            "Le nom d’utilisateur doit être entre 2 et 50 caractères",
          emailRequired: "Email requis",
          emailInvalid: "Entrez une adresse e-mail valide",
          passwordRequired: "Entrez un nouveau mot de passe",
          passwordLength: "Le mot de passe doit être entre 8 et 32 caractères",
          passwordLetter: "Le mot de passe doit contenir une lettre",
          passwordNumber: "Le mot de passe doit contenir un chiffre",
          confirmRequired: "Entrez le nouveau mot de passe à nouveau",
          passwordMismatch: "Les mots de passe ne correspondent pas",
        },
        generated: {
          successTitle: "Utilisateur créé",
          successBody:
            "Un mot de passe aléatoire a été généré pour cet utilisateur. Il ne sera affiché qu’une seule fois.",
          usernameLabel: "Nom d’utilisateur",
          emailLabel: "E-mail",
          passwordLabel: "Mot de passe généré",
          copyBtn: "Copier les détails du compte",
          copySuccess: "Clé copiée",
          acknowledgeBtn: "J’ai enregistré le mot de passe",
        },
      },
      bulkApply: {
        label: "Changer le mot de passe",
        tooltip:
          "La sauvegarde de la valeur n’affecte que les nouveaux espaces de travail par défaut; cliquez ici pour également écraser tous les espaces de travail existants.",
        confirmBtn: "Ajouter",
        confirmBody:
          "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
        success: "Invitation révoquée.",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      },
      audit: {
        tabLabel: "Journal d’audit",
        description:
          "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
        refresh: "Mettre à jour",
        retry: "Recommencer",
        loading: "Chargement...",
        end: "Fin du journal.",
        empty: "Aucune clé API de plateforme",
        forbidden:
          "Vous n’avez pas la permission de consulter le journal d’audit.",
        systemActor: "Système",
        errors: {
          generic:
            "Quelque chose s\'est mal passé. Veuillez essayer à nouveau.",
        },
        actorRole: {
          system_admin: "Administrateur système",
        },
        columns: {
          time: "Heure",
          actor: "Acteur",
          action: "Action",
          target: "Cible",
          path: "Requête",
          outcome: "Résultat",
        },
        action: {
          "system.setting_changed": "System setting changed",
          "system.admin_promoted": "System admin granted",
          "system.api_key_created": "Platform API key created",
          "system.api_key_revoked": "Platform API key revoked",
          "system.admin_revoked": "System admin revoked",
          "system.user_password_reset": "User password reset",
          "system.user_created": "User created",
          "system.queue_task_retried": "Failed task run again",
          "system.queue_task_deleted": "Failed task record cleared",
          "system.queue_task_run_now": "Queue task run now",
          "system.queue_task_cancelled": "Queue task cancelled",
          "system.queue_archived_purged": "All failed tasks cleared",
        },
        outcome: {
          success: "Invitation révoquée.",
          denied: "Refusé",
        },
        target: {
          bulkQuota: "Synchronisation en masse: quota de stockage par défaut",
          bulkQuotaDiff: "Appliqué à {count} espaces de travail ({gb} Go)",
          promoteIdempotent:
            "La cible était déjà un administrateur système (idempotent)",
          revokeNoop:
            "La cible n\'était pas un administrateur système (idempotent)",
          requiredRole: "Rôle requis: {role}",
          valueNull: "(non défini)",
        },
        expanded: {
          actorId: "ID de l\'acteur",
          targetUserId: "ID de l\'utilisateur cible",
          targetType: "Type de cible",
          targetId: "ID de la cible",
          details: "Détails bruts",
        },
        drawer: {
          sectionSummary: "Résumé de l\'événement",
          sectionIdentifiers: "Identifiants associés",
          sectionRequest: "Requête",
          targetChange: "Modification",
          requestMethod: "Méthode",
        },
      },
    },
  },
  mcp: {
    testResult: {
      title: "Permissions des rôles",
      connectionSuccess: "Connexion réussi",
      connectionFailed: "Connexion échouée",
      toolsTitle: "Outils disponibles",
      resourcesTitle: "Ressources disponibles",
      descriptionLabel: "Description",
      schemaLabel: "Schéma des paramètres",
      emptyDescription: "Ce service n\'a pas fourni d’outils ou de ressources",
      requireApproval: "Requête d’approbation",
      requireApprovalTip:
        "Lorsqu’il est activé, l’agent met en pause avant d’appeler cet outil jusqu’à ce que vous l’approbiez — utilisez pour les opérations en base de données, les suppressions, etc.",
      approvalSaveFailed: "Échec de la sauvegarde de l’option d’approbation",
      toolEnabled: "Activer l’outil",
      toolEnabledTip:
        "Lorsqu’il est désactivé, l’agent ne verra pas ou ne appellera pas cet outil",
      toolEnabledSaveFailed: "Échec de sauvegarde de l’option de l’outil",
    },
  },
  error: {
    networkError: "Erreur réseau, veuillez vérifier votre connexion",
    requestTimeout:
      "Requête expirée. Les fichiers volumineux ou les connexions lentes peuvent nécessiter une autre tentative.",
    invalidCredentials: "Nom d’utilisateur ou mot de passe invalide",
    tokenRefreshFailed: "Échec de rafraîchissement du jeton",
    pleaseRelogin: "Veuillez vous connecter à nouveau",
    fileSizeExceeded: "La taille du fichier ne peut pas dépasser {size} Mo!",
    unsupportedFileType: "Type de fichier non pris en charge!",
    invalidFileType: "Type de fichier invalide!",
    invalidImageLink: "Lien d’image invalide",
    missingKbId: "ID de la base de connaissances manquant",
    tokenNotFound:
      "Jeton de connexion non trouvé, veuillez vous connecter à nouveau",
    streamFailed: "Échec de connexion de flux",
    auth: {
      loginFailed: "Échec de connexion",
      registerFailed: "Inscription échouée",
      getUserFailed: "Échec de récupération des informations de l’utilisateur",
      getTenantFailed:
        "Échec de récupération des informations de l’espace de travail",
      updatePreferencesFailed: "Échec de mise à jour des préférences",
      refreshTokenFailed: "Échec de renouvellement du jeton",
      logoutFailed: "Déconnexion échouée",
      validateTokenFailed: "Échec de validation du jeton",
    },
    model: {
      createFailed: "Échec de la création de la clé API de plateforme",
      getFailed: "Échec de récupération du modèle",
      updateFailed: "Échec de la mise à jour du service MCP",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
    },
    tenant: {
      listFailed: "Échec de récupération de la liste des espaces de travail",
      searchFailed: "Échec de recherche des espaces de travail",
      getApiPrincipalConfigFailed:
        "Échec de récupération de la configuration du principal API",
      updateApiPrincipalConfigFailed:
        "Échec de mise à jour de la configuration du principal API",
      createApiPrincipalTestTokenFailed:
        "Échec de création du jeton de test du principal API",
      updateFailed: "Échec de la mise à jour du service MCP",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
    },
    initialization: {
      checkFailed: "Échec de vérification",
      testFailed: "Connexion échouée",
    },
  },
  model: {
    reasoning: {
      levels: {
        off: "Pensée désactivée; aucun paramètre de pensée n’est envoyé",
        auto: "Auto (du fournisseur / URL)",
        minimal: "Le moins de réflexion, les réponses les plus rapides",
        low: "Réflexion légère",
        medium: "Réflexion modérée",
        high: "Réflexion approfondie, réponses plus lentes",
        xhigh:
          "Budget de réflexion très élevé (sélectionnez uniquement les modèles)",
        max: "Budget de réflexion maximal (seulement les modèles disponibles)",
      },
      levelDescriptions: {
        off: "Pensée désactivée; aucun paramètre de pensée n’est envoyé",
        auto: "Auto (du fournisseur / URL)",
        minimal: "Le moins de réflexion, les réponses les plus rapides",
        low: "Réflexion légère",
        medium: "Réflexion modérée",
        high: "Réflexion approfondie, réponses plus lentes",
        xhigh:
          "Budget de réflexion très élevé (sélectionnez uniquement les modèles)",
        max: "Budget de réflexion maximal (seulement les modèles disponibles)",
      },
    },
    modelName: "Nom du modèle",
    defaultTag: "Défaut",
    addModelInSettings:
      "Accédez aux paramètres globaux pour ajouter des modèles",
    loadFailed: "Échec du chargement des clés API de plateforme",
    selectModelPlaceholder: "Sélectionnez un modèle",
    searchPlaceholder: "Recherche par nom ou e-mail",
    editor: {
      maxOutputTokensLabel: "Nombre maximum de jetons de sortie",
      maxOutputTokensPlaceholder:
        "Laissez vide pour utiliser la valeur par défaut du catalogue",
      maxOutputTokensDesc:
        "Limite de sortie par réponse. Laissez vide pour utiliser la valeur par défaut du catalogue pour ce modèle.",
      catalog: {
        reasoning: "Raisonnement",
        vision: "Vision",
        hint: "Laissez vide ou 0 pour utiliser la valeur par défaut (120 secondes)",
      },
      resolved: {
        title: "Permissions des rôles",
        empty: "Aucune clé API de plateforme",
        failed:
          "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
        protocol: "Protocole de demande",
        catalog: "Suivre la valeur par défaut du catalogue (recommandé)",
        catalogedYes: "Profil de modèle intégré",
        catalogedNo:
          "Paramètres par défaut du fournisseur (le modèle n\'est pas dans le catalogue)",
        endpoint: "Point de terminaison de la demande",
        thinkingFormat: "Format de raisonnement",
        thinkingLevels: "Niveaux d’effort sélectionnables",
        noThinking: "Ce modèle ne peut pas réfléchir",
      },
      advanced: {
        toggle: "Importer à partir du code",
        api: {
          label: "Changer le mot de passe",
          auto: "Auto (du fournisseur / URL)",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        remoteModelName: {
          label: "Changer le mot de passe",
          placeholder: "Entrez des secondes, plage recommandée 60-1800",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        legacyThinking: {
          label: "Changer le mot de passe",
          catalog: "Suivre la valeur par défaut du catalogue (recommandé)",
          none: "Ne pas envoyer les champs de réflexion",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        compat: {
          label: "Changer le mot de passe",
          placeholder: "Entrez des secondes, plage recommandée 60-1800",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
          invalid: "JSON invalide",
          mustBeObject: "Doit être un objet JSON",
        },
      },
      addTitle: "Ajouter un service MCP",
      editTitle: "Modifier le point de terminaison MCP",
      sectionType: "Type de Modèle",
      typeLabel: "Type de Modèle",
      sectionSource: "Source",
      sectionProvider: "Paramètres du Fournisseur",
      sectionAdvanced: "Options Avancées",
      sourceLabel: "Source du Modèle",
      sourceLocal: "Ollama",
      sourceRemote: "API",
      description: {
        chat: "Requêtes",
        embedding: "Embedding",
        rerank: "ReRank",
        vllm: "Vision",
        asr: "Speech",
        default: "Défaut",
      },
      modelNamePlaceholder: {
        local: "e.g. llama2:latest",
        remote: "Distant",
        localVllm: "e.g. llava:latest",
        remoteVllm: "e.g. gpt-4-vision-preview",
        remoteAsr: "e.g. whisper-1",
      },
      baseUrlLabel: "URL de base",
      displayNameLabel: "Nom d’affichage (facultatif)",
      displayNamePlaceholder: "e.g. Modèle de support QA",
      displayNameDesc:
        "Utilisé uniquement dans l’interface utilisateur. Les appels à runtime continuent d’utiliser le nom du modèle en haut.",
      baseUrlPlaceholder: "e.g. https://api.openai.com/v1",
      baseUrlPlaceholderVllm: "e.g. http://localhost:11434/v1",
      baseUrlPlaceholderAsr: "e.g. https://api.openai.com/v1",
      apiKeyOptional: "Clé API (facultatif)",
      apiKeyPlaceholder: "Entrez la clé API",
      customHeadersLabel: "En-têtes de requête personnalisés (facultatif)",
      customHeadersDesc:
        "En-têtes HTTP supplémentaires ajoutés aux requêtes à l’API du modèle distant (par exemple, pour l’authentification par passerelle d’entreprise ou le suivi). Les en-têtes réservés comme Authorization / Content-Type sont ignorés.",
      customHeadersAdd: "Ajouter un en-tête",
      customHeadersKeyPlaceholder: "Nom de l’en-tête",
      customHeadersValuePlaceholder: "Valeur de l’en-tête",
      testing: "Test en cours de {name}...",
      testConnection: "Tester la connexion",
      downloadLabel: "Télécharger: {keyword}",
      refreshList: "Actualiser la liste",
      dimensionLabel: "Dimension vectorielle",
      dimensionPlaceholder: "e.g. 1536",
      checkDimension: "Détection de la dimension",
      dimensionDetected: "Détection réussie. Dimension vectorielle: {value}",
      dimensionFailed:
        "Détection échouée, veuillez entrer la dimension manuellement",
      remoteDimensionDetected: "Dimension vectorielle détectée: {value}",
      dimensionOverrideLabel: "Dimension de sortie personnalisée",
      dimensionOverrideDesc:
        "Activer uniquement si la documentation du fournisseur indique que ce modèle accepte un paramètre dimensions.",
      supportsVisionLabel: "Supporte la vision / multimodal",
      supportsVisionDesc:
        "Si le modèle accepte les entrées d’image et multimodales",
      contextWindowLabel: "Fenêtre contextuelle",
      contextWindowPlaceholder: "Défaut {value}",
      contextWindowDesc:
        "Combien de tokens ce modèle peut-il prendre en une seule requête. La compression de l’historique de l’agent utilise cette limite. Laissez vide pour la valeur par défaut 200000 (200K). Utilisez la fenêtre réelle du fournisseur — une estimation plus grande signifie que la compression ne se produit jamais et le fournisseur refuse la requête.",
      contextWindowDefaultHint:
        "Non défini, utilise la valeur par défaut {value}",
      contextWindowTokens: "{count} tokens",
      maxConcurrencyLabel: "Limite de concurrence en arrière-plan",
      maxConcurrencyPlaceholder: "0 = utiliser la valeur par défaut globale",
      maxConcurrencyDesc:
        "Limite les appels concurrents en arrière-plan (ingestion/enrichissement) à ce modèle, partagés par modèle entre toutes les répliques. 0 ou vide revient à la valeur par défaut globale; la conversation interactive n\'est jamais affectée.",
      dimensionHint:
        'Modèle sélectionné. Cliquez sur "Détection de la dimension" pour obtenir automatiquement la dimension du vecteur.',
      loadModelListFailed: "Échec du chargement de la liste de modèles",
      listRefreshed: "Liste actualisée",
      fillModelAndUrl:
        "Veuillez d\'abord remplir l\'identifiant du modèle et l\'URL de base",
      remoteBaseUrlRequired: "Le type d\'API distant nécessite une URL de base",
      unsupportedModelType: "Type de modèle non pris en charge",
      saveAndClose: "Enregistrer et fermer",
      testDraftHint:
        "Testez les paramètres de connexion actuels sans les enregistrer d\'abord.",
      testDraftEditHint:
        "Testez les paramètres de connexion actuels à l\'aide de la clé API enregistrée séparément.",
      testStale: "Paramètres modifiés. Exécutez le test à nouveau.",
      connectionSuccess: "Connexion réussi",
      connectionFailed: "Connexion échouée",
      connectionConfigError: "Échec de la connexion, vérifiez la configuration",
      downloadStarted: "Début du téléchargement de {name}",
      downloadCompleted: "Le modèle {name} a été téléchargé avec succès",
      downloadFailed: "Échec du téléchargement de {name}",
      downloadStartFailed: "Échec du lancement du téléchargement",
      ollamaUnavailable:
        "Le service Ollama n\\\'est pas disponible, les modèles locaux ne peuvent pas être sélectionnés",
      ollamaNotSupportRerank:
        "Ollama ne prend pas en charge les modèles ReRank, utilisez une API distante à la place",
      goToOllamaSettings: "Ouvrir les paramètres",
      validation: {
        extraFieldRequired: "Veuillez remplir {name}",
        modelNameRequired: "Veuillez entrer le nom du modèle",
        modelNameEmpty: "Le nom du modèle ne peut pas être vide",
        modelNameMax: "Le nom du modèle ne peut pas dépasser 100 caractères",
        baseUrlRequired: "L\\\'URL de base est requise pour les API distantes",
        baseUrlEmpty: "L\\\'URL de base ne peut pas être vide",
        baseUrlInvalid: "URL de base invalide, veuillez entrer une URL valide",
      },
      providerLabel: "Fournisseur",
      providerPlaceholder: "Sélectionnez le fournisseur de modèle",
      providerDocs: "Lire les documents du modèle {provider}",
    },
    builtinTag: "Intégré",
  },
  language: {
    zhCN: "Chinois simplifié",
    enUS: "Anglais",
    ruRU: "Russe",
    koKR: "Coréen",
    jaJP: "Japonais",
    frFR: "Français",
    selectLanguage: "Sélectionnez la langue",
    language: "Langue",
    languageDescription:
      "Sélectionnez la langue d\\\'affichage de l\\\'interface",
    languageSaved: "Paramètres de langue enregistrés",
  },
  general: {
    title: "Permissions des rôles",
    allSettings: "Tous les paramètres",
    personalSettings: "Paramètres personnels",
    helpAndDocs: "Aide et Documentation",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    settings: "Ouvrir les paramètres",
    close: "Fermer",
  },
  theme: {
    theme: "Thème",
    themeDescription:
      "Choisissez le thème d\\\'affichage de l\\\'interface, avec le basculement automatique selon les paramètres du système",
    light: "Clair",
    dark: "Sombre",
    system: "Prompt système",
    selectTheme: "Sélectionnez un thème",
  },
  font: {
    uiFont: "Police de l\\\'interface",
    uiFontDescription:
      "Utilisée pour les menus, le texte du corps, les boutons et la majorité du texte de l\\\'interface",
    monoFont: "Police de code",
    monoFontDescription:
      "Utilisée pour les blocs de code, les commandes de terminal, les clés API, les chemins de fichiers et d\\\'autres textes techniques. Chaque caractère a la même largeur, permettant de distinguer 0 de O et 1 de l.",
    selectFont: "Sélectionnez une police",
    sansPreview: "Le renard brun rapide saute — Aa Gg Oo 0123",
    monoPreview: "const msg = \\\'Hello\\\'; // 0O1l",
    sans: {
      system: "Prompt système",
      pingfang: "PingFang SC",
      georgia: "Georgia (Serif)",
      yahei: "Microsoft YaHei",
      times: "Times New Roman (Serif)",
      "noto-cjk": "Noto Sans CJK",
      "dejavu-serif": "DejaVu Serif (Serif)",
      "sans-serif": "Generic Sans-Serif",
    },
    mono: {
      system: "Prompt système",
      menlo: "Menlo",
      monaco: "Monaco",
      consolas: "Consolas",
      cascadia: "Cascadia Code",
      "dejavu-mono": "DejaVu Sans Mono",
      "liberation-mono": "Liberation Mono",
      monospace: "Police monospace générique",
    },
    fontSize: "Taille de la police",
    fontSizeDescription:
      "Échelle de l’ensemble de l’interface (texte, icônes, espacement) et applique immédiatement",
    size: {
      small: "Petit",
      normal: "Normal",
      large: "Grand",
    },
  },
  platform: {
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    rag: "RAG améliorée",
    agent: "Agent ReAct",
    wiki: "Wiki",
    hybridSearch: "Recherche hybride",
    multimodalParsing: "Analyse de documents multimodaux",
    hybridSearchEngine: "Recherche hybride + Graphique de connaissances",
    ragQandA: "Agent ReAct Q&A",
    independentTenant: "Espace de travail indépendant",
    fullApiAccess: "Accès complet à l’API",
    knowledgeBaseManagement: "Gestion de la base de connaissances",
    carousel: {
      agenticRagTitle: "ReAG agéntiel",
      agenticRagDesc:
        "Raisonnement ReAct + appels d’outils + pensée à plusieurs étapes",
      hybridSearchTitle: "Stratégie de recherche hybride",
      hybridSearchDesc: "BM25 + Vecteurs + Graphique de connaissances",
      wikiTitle: "Base de connaissances Wiki",
      wikiDesc:
        "Résume les documents en connaissances structurées et interconnectées",
      smartDocRetrievalTitle: "Récupération de documents intelligente",
      smartDocRetrievalDesc:
        "Analyse de formats multiples de document PDF/Word/Image",
    },
  },
  time: {
    today: "Aujourd\'hui",
    yesterday: "Hier",
    last7Days: "Les 7 derniers jours",
    last30Days: "Les 30 derniers jours",
    lastYear: "L\\\'an dernier",
    earlier: "Plus tôt",
    pinned: "Fixé",
  },
  upload: {
    uploadDocument: "Télécharger un document",
    uploadFolder: "Télécharger un dossier",
    onlineEdit: "Édition en ligne",
    deleteRecord: "Supprimer enregistrement",
  },
  uploadTasks: {
    panelLabel: "Téléchargements",
    titleUploading: "Téléchargement en cours {done} sur {total}",
    titleParsing: "Analyse en cours {done} sur {total}",
    titleDone: "Tous terminés",
    titleDoneWithIssues: "{ok} terminés, {bad} non terminés",
    titleCancelled: "Téléchargement annulé",
    destination: "Destination: {name}",
    destinationMany: "Destination: {count} bases de connaissances",
    remaining: "environ {time} restant",
    eta: {
      seconds: "{n} sec",
      minutes: "{n} min",
      hours: "{n} hr",
    },
    hintUploading:
      "Gardez cette page ouverte jusqu\'à ce que le téléchargement soit terminé",
    hintParsing:
      "Tous les fichiers sont téléchargés. L\\\'analyse continue en arrière-plan, donc vous pouvez quitter cette page",
    legend: {
      ready: "Prêt",
      active: "Connecté",
      waiting: "En attente...",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      duplicate: "Déjà existant",
    },
    filterAll: "Tous",
    filterIssues: "Non terminés",
    phaseWaiting: "En attente",
    phaseSaving: "Sauvegarde...",
    phasePending: "En attente de l\\\'analyse",
    phaseParsing: "Analyse",
    phaseFinalizing: "Recherchable, toujours en optimisation",
    phaseReady: "Terminé",
    phaseUploadFailed: "Échec du téléchargement",
    phaseParseFailed: "Échec de l\\\'analyse",
    phaseDuplicate: "Fichier identique déjà dans cette base de connaissances",
    phaseCancelled: "Annulé",
    phaseDeleted: "Supprimé",
    cancel: "Annuler",
    cancelAll: "Annuler tout",
    retry: "Recommencer",
    retryFailed: "Reessayer ({count})",
    open: "Ouvrir",
    collapse: "Montrer moins",
    expand: "Développer",
    close: "Fermer",
    closeConfirm:
      "La fermeture arrête les téléchargements non terminés ({count})",
    closeConfirmOk: "Annuler le téléchargement",
    closeConfirmKeep: "Continuer le téléchargement",
  },
  agentSettings: {
    modelRecommendation: {
      title: "Permissions des rôles",
    },
    maxIterations: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    thinkingModel: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    rerankModel: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    temperature: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    allowedTools: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    systemPrompt: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
  },
  conversationSettings: {
    models: {
      chatGroupLabel: "Modèles de réflexion / Chat",
    },
    maxRounds: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    embeddingTopK: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    keywordThreshold: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    vectorThreshold: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    rerankTopK: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    rerankThreshold: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    enableRewrite: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    enableQueryExpansion: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    fallbackStrategy: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    fallbackResponse: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    fallbackPrompt: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    rewritePrompt: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    chatModel: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    rerankModel: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    contextTemplate: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    systemPrompt: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    temperature: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    maxTokens: {
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
  },
  mcpSettings: {
    addUsageInstructions: "Ajouter des instructions d'utilisation",
    noUsageInstructions: "Aucunes instructions d'utilisation pour l'instant",
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    enabled: "Activer le canal",
    disabled: "Désactivé",
    configuredServices: "Services configurés",
    manageAndTest: "Gérer et tester les connexions de service MCP",
    addService: "Ajouter un service",
    empty: "Aucune clé API de plateforme",
    actions: {
      test: "Tester la connexion",
    },
    toasts: {
      loadFailed: "Échec du chargement des clés API de plateforme",
      enabled: "Activer le canal",
      disabled: "Désactivé",
      updateStateFailed: "Échec de la mise à jour de l\'état du service MCP",
      testing: "Test en cours de {name}...",
      noResponse: "Test échoué: aucune réponse du serveur",
      testFailed: "Connexion échouée",
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
    },
    deleteConfirmBody:
      'Supprimer le service MCP "{name}"? Cette action ne peut pas être annulée.',
    unnamed: "Canal sans Nom",
    builtin: "Intégré",
    toolCount: "{count} outils",
    toolsNotSynced: "Outils non synchronisés",
    toolsStale: "Besoin de synchronisation",
  },
  modelSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    typeShort: {
      chat: "Requêtes",
      embedding: "Embedding",
      rerank: "ReRank",
      vllm: "Vision",
      asr: "Speech",
    },
    actions: {
      addModel: "Ajouter un modèle",
      debugModel: "Tester le modèle",
    },
    source: {
      remote: "Distant",
      openaiCompatible: "Compatible OpenAI",
      custom: "Personnalisé",
    },
    chat: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      empty: "Aucune clé API de plateforme",
    },
    embedding: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      empty: "Aucune clé API de plateforme",
    },
    rerank: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      empty: "Aucune clé API de plateforme",
    },
    vllm: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      empty: "Aucune clé API de plateforme",
    },
    asr: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      empty: "Aucune clé API de plateforme",
    },
    toasts: {
      nameRequired: "Entrez un nom",
      nameTooLong: "Le nom du modèle ne doit pas dépasser 100 caractères",
      displayNameTooLong:
        "Le nom d\\\'affichage ne doit pas dépasser 100 caractères",
      baseUrlRequired: "L\\\'URL de base est requise pour les API distantes",
      baseUrlInvalid: "URL de base invalide, veuillez entrer une URL valide",
      dimensionInvalid:
        "La dimension d\\\'embedding doit être comprise entre 128 et 4096",
      updated: "Point de terminaison mis à jour",
      added: "Ajouté",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
      builtinCannotEdit: "Les modèles intégrés ne peuvent pas être édités",
      builtinCannotDelete: "Les modèles intégrés ne peuvent pas être supprimés",
      builtinCannotCopy: "Les modèles intégrés ne peuvent pas être copiés",
      copied: "Copié dans le presse-papiers",
      copyFailed:
        "La copie a échoué; veuillez sélectionner le texte manuellement",
    },
    copySuffix: " Copie",
    builtinModels: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      descriptionAdmin:
        "Les modèles intégrés sont visibles pour tous les espaces de travail. Les administrateurs système peuvent éditer la configuration et les identifiants; la suppression reste gérée par le déploiement.",
      viewGuide: "Voir le Guide des modèles intégrés",
    },
    builtinTag: "Intégré",
    confirmDelete: 'Supprimer le modèle "{name}"?',
    usage: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      knowledgeBases: "Ouvrir les bases de connaissances",
      agents: "Ouvrir les agents",
      longTermMemory: "Mémoire à long terme",
      openConfiguration: "Ouvrir les paramètres",
      truncated: "Sortie partielle",
      bindings: {
        embedding_model: "Modèle d\'embedding",
        summary_model: "Modèle de résumé",
        image_processing_model: "Modèle de traitement d\'images",
        vlm_model: "Modèle de vision",
        asr_model: "Modèle de reconnaissance vocale",
        wiki_synthesis_model: "Modèle de synthèse wiki",
        auto_tag_model: "Modèle d\'étiquetage automatique",
        chat_model: "Modèle de chat",
        rerank_model: "Modèle de reclassement",
        query_understand_model: "Modèle de compréhension des requêtes",
        follow_up_model: "Modèle de suivi",
        extract_model: "Modèle d\'extraction de mémoire",
        unknown: "Inconnu",
      },
    },
    debug: {
      reasoningEffort: "Effort de raisonnement",
      reasoningEffortDesc:
        "Transmettez reasoning_effort selon les niveaux indiqués par le catalogue de modèles",
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      groupModel: "Sélectionnez un modèle",
      groupInput: "Entrée de test",
      groupResult: "Résultat",
      modelType: "Type de modèle",
      model: "Modèle Généré",
      modelPlaceholder: "Sélectionnez un modèle à tester",
      noModelsForType: "Aucun modèle enregistré de ce type",
      query: "Entrée",
      queryPlaceholder: "Entrez le texte à envoyer au modèle",
      embeddingInput: "Texte à insérer",
      embeddingPlaceholder: "Entrez le texte pour générer une représentation",
      vlmPrompt: "Prompt d\'image",
      vlmPromptPlaceholder: "Par exemple: Décrivez cette image en détail",
      documents: "Documentation de la ligne de commande",
      documentsPlaceholder: "Entrez un document candidat par ligne",
      documentsHint:
        "Chaque ligne non vide est envoyée comme un document distinct au modèle ReRank",
      imageFile: "Fichier image",
      audioFile: "Fichier audio",
      chooseFile: "Sélectionner un fichier",
      parameters: "Paramètres",
      systemPrompt:
        "Prompt système personnalisé pour définir le comportement et le rôle de l\'agent",
      systemPromptPlaceholder: "Prompt système optionnel",
      run: "Exécuter le test",
      copyResult: "Copier le résultat",
      history: "Historique",
      runLabel: "Exécuter #{n}",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      rawResponse: "Réponse brute",
      requestPreview: "Aperçu de la requête",
      requestFailed: "Échec de la soumission de la demande, veuillez réessayer",
      metrics: {
        api: "Intégration API",
        thinkingFormat: "Format de raisonnement",
        requestedReasoningEffort: "Effort demandé",
        dimension: "Dimensions",
        resultCount: "Nombre de résultats",
        answerChars: "Caractères de réponse",
        reasoningChars: "Caractères de raisonnement",
        reasoningReturned: "Reasoning returned",
        textChars: "Transcript chars",
        segmentCount: "Nombre de segments",
      },
    },
  },
  ollamaSettings: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    status: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      testing: "Test en cours de {name}...",
      available: "Variables disponibles: ",
      unavailable: "Indisponible",
      untested: "Not Tested",
      retest: "Retest",
    },
    address: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      placeholder: "Entrez des secondes, plage recommandée 60-1800",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    },
    download: {
      title: "Permissions des rôles",
      descPrefix: "Enter a model name to download,",
      browse: "Browse Ollama model library",
      placeholder: "Entrez des secondes, plage recommandée 60-1800",
      download: "Télécharger l\'image",
      downloading: "Téléchargement en cours...",
    },
    installed: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      empty: "Aucune clé API de plateforme",
    },
    toasts: {
      connected: "Connecté",
      connectFailed:
        "Connection failed. Please check whether Ollama is running",
      listFailed: "Échec de récupération de la liste des espaces de travail",
      downloadFailed: "Échec du téléchargement de {name}",
      downloadStarted: "Début du téléchargement de {name}",
      downloadCompleted: "Le modèle {name} a été téléchargé avec succès",
      progressFailed: "Échec de la requête de progression de téléchargement",
    },
  },
  mcpMetadata: {
    searchTools: "Search tool names or descriptions",
    retry: "Retry",
    details: "Details",
    description: "Description",
    parameters: "Parameters",
    required: "Required",
    fullSchema: "Full definition",
    noDescription: "No description",
    noParameters: "No parameter definition",
    enabled: "Enabled",
    approval: "Require approval",
    noTools: "No matching tools",
    next: "Next",
    policyLoadFailed: "Could not load tool policies. Retry before editing.",
    policySaveFailed: "Could not save tool settings",

    tools: "Tools",
    cacheHint:
      "This step connects automatically if no directory is saved yet. Later visits only connect when you refresh.",
    refresh: "Refresh tools",
    fetch: "Fetch again",
    fetching: "Connecting and fetching tools…",
    toolCount: "{count} tools",
    stale:
      "Connection or authentication settings changed. Refresh this old directory before models can use it.",
    notSynced:
      "No tools synchronized yet. Fetch to save full descriptions and parameter definitions.",
    syncRequired:
      "Connect and fetch tools first. Models can only use a synchronized directory.",
    needsRefresh: "Refresh required",
    saved: "Saved directory",
    syncedAt: "Last synchronized:",
    serverDocumentation: "Original server documentation",
    noServerDocumentation:
      "This MCP server's initialize result did not include instructions or serverInfo.description (both are optional). Tool text lives in each tool's description below.",
    policyHint:
      "Tool and approval switches save immediately and survive directory refreshes.",
    failed: "Could not load the tool directory",
    setupProgress: "MCP setup steps",
    connection: "Connection",
    toolsAndUsage: "Tools and usage",
    previous: "Previous",
    usage: "Service usage",
    usageHint:
      "Models read this overview before loading specific tools. Your text is preserved when refreshing.",
    summary: "Usage summary",
    summaryPlaceholder:
      "For example: Look up order status, shipping progress, and refunds.",
    usageInstructions: "Usage instructions",
    instructionsPlaceholder:
      "Briefly describe the purpose, use cases, and key constraints.",
    generateUsage: "Generate with AI",
    generateHint:
      "Generate concise instructions from synced, enabled tools. Edit the result and save to apply it.",
    instructionsRequired: "Usage instructions are required",
    generated: "Generated. Review and save to apply.",
    generateFailed:
      "Generation failed. Check that tools are synced and an active chat model is configured, then retry.",
    saveNext: "Save and continue",
  },
  mcpServiceDialog: {
    addTitle: "Ajouter un service MCP",
    editTitle: "Modifier le point de terminaison MCP",
    basicSection: "Basique",
    connectionSection: "Connexion",
    enableServiceDesc:
      "Lorsqu\'il est désactivé, ce service ne sera pas appelé",
    testAfterSaveHint: "Enregistrez d\'abord pour tester la connexion",
    unitSecond: "s",
    unitTimes: "×",
    name: "Nom",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    descriptionPlaceholder:
      "Optionnel: qui utilise cet point d\'accès et pourquoi",
    transportType: "Type de transport",
    serviceUrl: "URL du service",
    serviceUrlPlaceholder: "https://example.com/mcp",
    enableService: "Activer le service",
    authConfig: "Authentification",
    authType: "Méthode d’authentification",
    authTypeNone: "Aucune / En-tête personnalisé",
    authTypeApiKey: "Clé API / Jeton",
    authTypeOAuth: "OAuth 2.0 (autorisez lors de la première connexion)",
    oauthScopes: "Portées (facultatif, séparées par espace)",
    oauthAuthorization: "État d’autorisation",
    oauthAuthorized: "Autorisé",
    oauthRefreshable:
      "Jeton expiré; il se renouvelera automatiquement à la prochaine utilisation",
    oauthUnauthorized: "Non autorisé",
    oauthAuthorize: "Autoriser",
    oauthReauthorize: "Ré-autoriser",
    oauthRevoke: "Révoquer",
    oauthAuthorizeHint:
      'En cliquant sur "Autoriser", la configuration actuelle est enregistrée d’abord, puis le processus d’autorisation commence (chaque utilisateur autorise individuellement).',
    apiKeyHeader: "Nom de l’en-tête",
    apiKeyHeaderDesc:
      'Par défaut, X-API-Key. Pour Bearer, définissez l’Authorization et entrez "Bearer <token>" dans la valeur ci-dessous; pour les services utilisant des jetons bruts, utilisez l’Authorization avec le jeton brut.',
    credentialValue: "Secret / Jeton",
    optional: "Facultatif",
    advancedConfig: "Avancé",
    timeoutSec: "Délai d’expiration (s)",
    retryCount: "Nombre d’essais",
    retryDelaySec: "Délai entre les essais (s)",
    rules: {
      nameRequired: "Entrez un nom",
      transportRequired: "Veuillez sélectionner un type de transport",
      urlRequired: "Veuillez entrer l’URL du service",
      urlInvalid: "Veuillez entrer une URL valide",
    },
    toasts: {
      created: "Point de terminaison créé",
      updated: "Point de terminaison mis à jour",
      createFailed: "Échec de la création de la clé API de plateforme",
      updateFailed: "Échec de la mise à jour du service MCP",
      oauthRequired:
        "Ce serveur nécessite OAuth. Passé à OAuth 2.0 — enregistrez, puis cliquez sur « Autoriser ».",
      authorized: "Autorisation réussie",
      authorizeFailed: "Échec de démarrage de l’autorisation",
      revoked: "Autorisation révoquée",
      revokeFailed: "Échec de la révocation de l’autorisation",
    },
    customHeaders: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      add: "Ajouter une source d_a_t_a",
      keyPlaceholder: "Nom de l’en-tête",
      valuePlaceholder: "Valeur de l’en-tête",
    },
    codeImport: {
      toggle: "Importer à partir du code",
      hint: "Laissez vide ou 0 pour utiliser la valeur par défaut (120 secondes)",
      parse: "Analyser et remplir",
      editOverwriteHint:
        "L’importation écrase le formulaire actuel (les identifiants enregistrés ne sont pas affectés; cliquez sur Enregistrer pour appliquer)",
      errors: {
        empty: "Aucune clé API de plateforme",
        invalidJson: "Les arguments doivent être au format JSON valide",
        noServer: "Aucune configuration de service MCP n’a été trouvée",
        missingUrl: "La configuration manque une URL",
        stdioUnsupported:
          "Les configurations stdio (commandes/arguments) ne sont pas prises en charge; veuillez utiliser une configuration distante avec une URL",
      },
      toasts: {
        filled: "Formulaire rempli, veuillez vérifier et enregistrer",
        multipleServers:
          "Plusieurs services ont été détectés, le premier a été importé: {name}",
      },
    },
  },
  promptTemplate: {
    noTemplates: "Aucun modèle disponible",
    selectTemplate: "Sélectionner un Modèle",
    useTemplate: "Utiliser un Modèle",
    resetDefault: "Réinitialiser par défaut",
    default: "Défaut",
    withKnowledgeBase: "KB",
    withWebSearch: "Recherche Web",
  },
  organization: {
    title: "Permissions des rôles",
    subtitle:
      "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
    createOrg: "Créer un Espace Partagé",
    joinOrg: "Rejoindre un Espace Partagé",
    name: "Nom",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    nameRequired: "Entrez un nom",
    avatar: "Avatar de l’espace partagé",
    avatarClear: "Effacer",
    avatarPickerHint: "Choisissez un emoji comme avatar de l’espace partagé",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    descriptionPlaceholder:
      "Optionnel: qui utilise cet point d\'accès et pourquoi",
    noDescription: "Aucune description",
    memberCount: "Nombre de membres",
    owner: "Propriétaire",
    inviteCode: "Code d\'invitation",
    inviteCodePlaceholder: "Entrez le code d\'invitation",
    inviteCodeRequired: "Veuillez entrer le code d\'invitation",
    refreshInviteCode: "Actualiser le code d\'invitation",
    inviteCodeRefreshed: "Code d\'invitation actualisé",
    inviteCodeRefreshFailed: "Échec de l\'actualisation du code d\'invitation",
    rbac: {
      needTenantAdminTip:
        "Cette action nécessite le rôle dadministrateur (ou supérieur) dans le workspace actuel. Veuillez contacter le propriétaire du workspace.",
      cannotCreate:
        "Votre rôle de workspace est insuffisant pour créer un espace partagé",
      cannotJoin:
        "Votre rôle de workspace est insuffisant pour rejoindre ou demander à rejoindre un espace partagé",
      cannotManage:
        "Votre rôle de workspace est insuffisant pour gérer cet espace partagé",
    },
    join: {
      title: "Permissions des rôles",
      joining: "Joining shared space...",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      noCode: "Invite code not found",
      goToOrganizations: "Go to Shared Spaces",
      confirmTitle: "Quitter ce workspace?",
      confirm: "Révoquer",
      preview: "Aperçu",
      memberCount: "Nombre de membres",
      shareCount: "{count} shared knowledge bases",
      agentShareCount: "{count} agents",
      alreadyMember: "You are already a member of this shared space",
      invalidCode: "Invalid invite code",
      byInviteCode: "Enter invite code",
      searchSpaces: "Search shared spaces",
      searchSpacesDesc:
        "Browse or search shared spaces that are open for discovery; join without an invite code",
      searchSpacesPlaceholder: "Search by shared space name, description or ID",
      spaceId: "Shared Space ID",
      noSearchResult: "No matching shared spaces",
      noSearchableSpaces: "No discoverable shared spaces yet, or try a search",
      memberLimitReached: "Full",
      backToSearch: "Back to search",
    },
    invite: {
      loading: "Chargement...",
      previewTitle: "Join Shared Space",
      inputDesc:
        "Enter the invite code (or paste from an invite link) to view the shared space and join",
      previewAction: "View",
      primaryJoin: "Join",
      invalidCode: "Invite code is invalid or expired",
      previewFailed: "Preview failed, please try again",
      knowledgeBases: "Ouvrir les bases de connaissances",
      agents: "Ouvrir les agents",
      alreadyMember: "You are already a member of this shared space",
      submitRequest: "Request to Join",
      requireApprovalTip:
        "Lorsqu’il est activé, l’agent met en pause avant d’appeler cet outil jusqu’à ce que vous l’approbiez — utilisez pour les opérations en base de données, les suppressions, etc.",
      approvalLabel: "Join method",
      needApproval: "Requires approval",
      noApproval: "Aucune approbation requise",
      defaultRoleAfterJoin: "Rôle par défaut après l’inscription: {role}",
      requestRole: "Rôle demandé",
      selectRole: "Attribuer un rôle",
      messagePlaceholder:
        "Optionnel: message (par exemple: présentation ou raison pour rejoindre)",
      applicationNote: "Note d’application (optionnel)",
      joinSuccess: "L’espace partagé a été rejoint avec succès",
      joinFailed: "Échec de la connexion à l’espace partagé",
      requestSubmitted:
        "Demande soumise, veuillez patienter l’approbation de l’administrateur",
      requestFailed: "Échec de la soumission de la demande, veuillez réessayer",
      viewOrganization: "Voir l’espace partagé",
    },
    leave: "Quitter l’espace partagé",
    leaveConfirmTitle: "Quitter l’espace partagé",
    leaveConfirmMessage:
      'Êtes-vous sûr de vouloir quitter l’espace partagé "{name}"? Vous ne pourrez plus accéder aux bases de connaissances partagées dans cet espace partagé.',
    leaveSuccess: "L’espace partagé a été quitté avec succès",
    leaveFailed: "Échec de la déconnexion de l’espace partagé",
    deleteConfirmTitle: "Supprimer l’espace partagé",
    deleteConfirmMessage:
      'Êtes-vous certain de vouloir supprimer l’espace partagé "{name}"? Tous les membres seront supprimés. Cette action ne peut pas être annulée.',
    deleteSuccess: "Clé API de plateforme supprimée",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
    createSuccess: "L’espace partagé a été créé avec succès",
    createFailed: "Échec de la création de la clé API de plateforme",
    joinSuccess: "L’espace partagé a été rejoint avec succès",
    joinFailed: "Échec de la connexion à l’espace partagé",
    manageMembers: "Gérer les membres",
    noMembers: "Aucun membre",
    members: {
      listTitle: "Membres du workspace",
      searchPlaceholder: "Recherche par nom ou e-mail",
      loading: "Chargement...",
      emptySearch: 'Aucun membre ne correspond à "{q}".',
      columns: {
        member: "Nom et e-mail",
        role: "Rôle",
        joinedAt: "Joins le",
        operations: "Actions",
      },
    },
    joinRequests: {
      listTitle: "Membres du workspace",
      searchPlaceholder: "Recherche par nom ou e-mail",
      loading: "Chargement...",
      emptySearch: 'Aucun membre ne correspond à "{q}".',
      typeJoin: "Rejoindre",
      typeUpgrade: "Mettre à niveau",
      rejectConfirm: "Rejeter cette requête?",
      approveTitle: "Approuver la requête",
      approveDesc: 'Attribuez un rôle à "{name}" après l’approbation',
      columns: {
        applicant: "Candidat",
        type: "Type",
        requestedRole: "Rôle demandé",
        message: "Note",
        appliedAt: "Postulé le",
      },
    },
    sharedResources: {
      kbListTitle: "Bases de connaissances partagées",
      agentListTitle: "Agents partagés",
      loading: "Chargement...",
      columns: {
        name: "Nom",
        sharedBy: "Partagé par",
        sharedAt: "Partagé le",
        permission: "Droits d\\\'Accès",
      },
    },
    roleUpdated: "Rôle mis à jour",
    roleUpdateFailed: "Échec de mise à jour du rôle",
    memberRemoved: "Membre supprimé",
    memberRemoveFailed: "Échec de suppression du membre",
    empty: "Aucune clé API de plateforme",
    emptyDesc:
      "Créez un espace partagé ou rejoignez-en un existant avec un code d’invitation",
    createdByMe: "Créé par moi",
    joinedByMe: "Rejoins",
    emptyCreated: "Vous n’avez pas encore créé d’espace partagé",
    emptyCreatedDesc:
      'Cliquez sur "Créer un espace partagé" pour en créer un nouveau',
    emptyJoined: "Vous n’êtes pas encore membre d’un espace partagé",
    emptyJoinedDesc:
      "Rejoignez un espace partagé existant avec un code d’invitation",
    role: {
      admin: "Admin",
      editor: "Éditeur",
      viewer: "Observateur",
    },
    detail: {
      removeMemberConfirm: 'Êtes-vous sûr de vouloir supprimer "{name}"?',
      removeMember: "Supprimer le membre",
    },
    settings: {
      editTitle: "Modifier le point de terminaison MCP",
      membersDesc:
        "Affichez et gérerez les membres et les rôles de l’espace partagé. Chaque membre représente un espace de travail, et tous les utilisateurs de cet espace partagent l’accès à cet espace partagé.",
      permissionsIconHint: "Affichez les permissions de rôle",
      sharedDesc:
        "Affichez toutes les bases de connaissances partagées avec cet espace partagé",
      noSharedKB: "Aucune base de connaissances partagée pour l’instant",
      noSharedKBTip:
        "Les propriétaires de bases de connaissances peuvent partager leurs bases de connaissances avec cet espace partagé dans les paramètres de la base de connaissances",
      sharedAgents: "Agents partagés",
      noSharedAgents: "Aucun agent partagé pour l’instant",
      sharedAgentsDesc:
        "Agents partagés avec cet espace partagé. Les membres peuvent les utiliser dans le chat",
      sharedAgentsKbHint:
        "Les bases de connaissances associées à un agent sont disponibles en lecture seule (en lecture seule) dans le chat uniquement lorsque les membres utilisent cet agent dans une conversation (via {\\\'@\\\'}). Elles ne figurent pas dans la liste des bases de connaissances. Pour permettre aux membres de voir ou de modifier une base de connaissances dans la liste, partagez cette base de connaissances à cet espace partagé séparément.",
      sharedAgentsKbHintShort:
        "La connaissance liée à un agent est en lecture seule dans le chat; partagez la base de connaissances à cet espace si les membres doivent la voir ou la modifier dans la liste",
      noSharedAgentsTip:
        "Les administrateurs peuvent partager les agents avec cet espace partagé à partir des paramètres de l’agent",
      sharePermissionLabel: "Permissions de l’espace partagé",
      myPermissionLabel: "Effectif",
      permissionCalcFormula:
        "Les permissions de l’espace partagé sont définies lors du partage; les permissions effectives sont le minimum entre celles-ci et votre rôle dans l’espace partagé",
      permissionCalcTip:
        "Les permissions effectives sont le minimum entre les permissions de l’espace partagé et votre rôle ici; les observateurs ont au maximum une lecture seule sur cette base de connaissances",
      inviteMembers: "Inviter des membres",
      inviteMembersDesc:
        "Invitez d’autres à rejoindre l’espace partagé via un code ou un lien",
      inviteLink: "Lien d’invitation",
      inviteLinkValidity: "Validité du lien d’invitation",
      inviteLinkValidityDesc:
        "Période de validité du nouveau lien d’invitation",
      validity1Day: "1 jour",
      validity7Days: "7 jours",
      validity30Days: "30 jours",
      validityNever: "N’importe quand",
      remainingValidity: "Expire dans {n} jours",
      remainingValidityNever: "N’importe quand",
      remainingValidityExpired: "Expiré",
      removeShareFromOrg: "Supprimer de l’espace partagé",
      removeShareConfirm:
        'Supprimer "{name}" de cet espace partagé? Les membres ne pourront plus accéder à cette base de connaissances',
      removeAgentShareConfirm:
        'Supprimer "{name}" de cet espace partagé? Les membres ne pourront plus accéder à cet agent',
      removeShareSuccess: "Supprimé de l’espace partagé",
      removeShareFailed: "Échec de la suppression, veuillez réessayer",
      requireApproval: "Requête d’approbation",
      requireApprovalDesc:
        "Lorsqu’elle est activée, les nouveaux membres doivent être approuvés par un administrateur pour rejoindre",
      searchable: "Accessible aux recherches",
      searchableDesc:
        'Lorsqu’elle est activée, cet espace partagé apparaît dans la liste des recherches "Rejoindre un espace partagé"; les autres peuvent rechercher et demander à rejoindre sans code d\'invitation',
      memberLimit: "Limite de membres",
      memberLimitDesc:
        "Aucun nouveau membre ne peut être ajouté lorsque la limite est atteinte; 0 signifie illimité",
      memberLimitPlaceholder: "0 = illimité",
      memberLimitHint: "Membres actuels: {count}",
      joinRequests: "Requêtes de rejoindre",
      joinRequestsDesc:
        "Examiner les demandes en attente de rejoindre l\'espace partagé",
      noPendingRequests: "Aucune demande en attente",
      pendingJoinRequestsBadge: "Requêtes en attente à examiner",
      pendingReview: "En attente",
      assignRole: "Attribuer un rôle",
      approve: "Approuver et exécuter",
      reject: "Rejeter",
      approveSuccess: "Requête approuvée",
      rejectSuccess: "Requête rejetée",
      reviewFailed: "Opération échouée, veuillez réessayer",
    },
    navGroups: {
      basic: "Fondamentaux",
      management: "Membres et Collaboration",
      resources: "Ressources",
    },
    editor: {
      navBasic: "Informations de base",
      navPermissions: "Permissions",
      navJoin: "Rejoindre un espace partagé",
      basicTitle: "Informations de base",
      basicDesc:
        "Définissez le nom et la description de l’espace partagé pour une identification facile",
      nameTip:
        "Utilisez le nom de votre équipe ou de votre projet pour une identification facile",
      descriptionTip:
        "Décrivez l’objectif et les buts de l’espace partagé pour faciliter la compréhension des membres",
      permissionsTitle: "Permissions des membres",
      permissionsDesc:
        "Comprendre l’étendue des privilèges associés à différents rôles pour les bases de connaissances et les agents dans l’espace partagé",
      permissionFeature: "Fonctionnalité de permission",
      fullAccess: "Accès complet",
      editAccess: "Accès en édition",
      viewAccess: "Affichage uniquement",
      adminPerm1:
        "Gérer les paramètres de l’espace partagé, les membres et le partage des bases de connaissances et des agents",
      adminPerm2: "Partager et gérer les bases de connaissances et les agents",
      adminPerm3: "Modifier le contenu de la base de connaissances partagée",
      adminPerm4: "Afficher et rechercher les bases de connaissances",
      useSharedAgentsPerm: "Utiliser les agents partagés",
      shareKBPerm: "Partager les bases de connaissances dans l’espace partagé",
      editorPerm1: "Modifier le contenu de la base de connaissances partagée",
      editorPerm2: "Afficher et rechercher les bases de connaissances",
      editorPerm3: "Gérer les paramètres de l’espace partagé et les membres",
      viewerPerm1: "Afficher et rechercher les bases de connaissances",
      viewerPerm2: "Modifier le contenu de la base de connaissances",
      viewerPerm3: "Gérer les paramètres de l’espace partagé",
      ownerNote:
        "En tant que créateur de l’espace partagé, vous deviendrez automatiquement un administrateur avec des permissions pleines.",
      joinTitle: "Rejoindre un espace partagé",
      joinDesc:
        "Rejoignez un espace partagé existant en utilisant un code d’invitation pour accéder aux connaissances et aux agents partagés.",
      joinIllustration:
        "Entrez le code d’invitation fourni par l’administrateur de l’espace partagé pour vous inscrire.",
      inviteCodeTip:
        "Le code d’invitation est généré par les administrateurs de l’espace partagé. Veuillez les contacter pour obtenir celui-ci.",
      howToGetCode: "Comment obtenir un code d’invitation?",
      step1:
        "Contactez l’administrateur de l’espace partagé que vous souhaitez rejoindre.",
      step2:
        "Demandez-lui de partager le code d’invitation de l’espace partagé.",
      step3: "Collez le code d’invitation dans le champ d’entrée ci-dessus.",
    },
    upgrade: {
      requestUpgrade: "Demander une mise à niveau",
      pending: "En attente",
      dialogTitle: "Générer un lien d\\\'invitation partagé",
      dialogDesc:
        "Votre rôle sera mis à jour une fois que l’administrateur de l’espace le pourra approuver.",
      currentRole: "Rôle actuel",
      selectRole: "Attribuer un rôle",
      reason: "Motif (facultatif)",
      reasonPlaceholder:
        "Veuillez expliquer brièvement pourquoi vous avez besoin de permissions élevées...",
      submitBtn: "Soumettre la demande",
      submitSuccess:
        "La demande de mise à niveau a été soumise et est en attente d’approbation de l’administrateur.",
      submitFailed: "Soumission échouée",
    },
    addMember: {
      button: "Révoquer",
      dialogTitle: "Générer un lien d\\\'invitation partagé",
      tipTenant:
        "Le partage est effectué au niveau de l’espace de travail: une fois un espace de travail ajouté, tous ses utilisateurs partagent l’accès à cet espace. Les résultats suivants sont dédupliqués par espace de travail.",
      searchTenant: "Identifiant de l’espace de travail",
      searchTenantPlaceholder:
        "Entrez l’identifiant de l’espace de travail exact",
      searchTenantHint:
        "Recherchez un identifiant de l’espace de travail exact, ou partagez un lien d’invitation.",
      selectRole: "Attribuer un rôle",
      confirmBtn: "Ajouter",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    },
    share: {
      title: "Permissions des rôles",
      selectOrg: "Sélectionnez un espace partagé",
      selectOrgPlaceholder: "Sélectionnez un espace partagé à partager",
      permission: "Droits d\\\'Accès",
      permissionTip:
        "Les permissions d’édition permettent aux membres de modifier le contenu de la base de connaissances, tandis que les permissions en lecture seule ne permettent que la recherche et les questions-réponses",
      shareSuccess: "La base de connaissances a été partagée",
      shareFailed: "Échec de la partage",
      unshareSuccess: "Partage annulé",
      unshareFailed: "Échec de l’annulation du partage",
      sharedTo: "Partagé avec",
      noShares: "Encore aucune partage",
      searchPlaceholder: "Recherche par nom ou e-mail",
      loading: "Chargement...",
      emptySearch: 'Aucun membre ne correspond à "{q}".',
      addShareDialogTitle: "Partager dans un espace partagé",
      unshareAction: "Retirer le partage",
      columns: {
        space: "Espace Partagé",
        permission: "Droits d\\\'Accès",
        sharedAt: "Partagé le",
        operations: "Actions",
      },
      sharedKnowledgeBase: "Bibliothèque de Connaissances Partagées",
      agentShareDesc:
        "Partagez cet agent à un espace partagé afin que les membres puissent l’utiliser",
      sharedFrom: "De",
      permissionReadonly: "Lecture Seule",
      permissionEditable: "Éditable",
    },
  },
  preview: {
    tab: "Aperçu",
    loading: "Chargement...",
    loadFailed: "Échec du chargement des clés API de plateforme",
    retry: "Recommencer",
    unsupported:
      "Ce type de fichier ne prend pas en charge la prévisualisation en ligne",
    unsupportedHint:
      "Veuillez télécharger et ouvrir avec une application locale",
    fullscreen: "Plein Écran",
    exitFullscreen: "Quitter le Plein Écran",
    htmlRendered: "Aperçu Rendu",
    htmlSource: "Voir le Code Source",
    audioLoading: "Chargement de l’audio...",
    audioNotSupported:
      "Votre navigateur ne prend pas en charge la lecture de l’audio",
    videoNotSupported:
      "Votre navigateur ne prend pas en charge la lecture de la vidéo",
  },
  commandPalette: {
    placeholder: "Entrez des secondes, plage recommandée 60-1800",
    clearRecent: "Effacer",
    retrieval: "Paramètres de Récupération",
    untitledSession: "Conversation Sans Titre",
    scope: {
      placeholder: "Entrez des secondes, plage recommandée 60-1800",
      remove: "Supprimer",
    },
    group: {
      chunks: "Fichiers",
      messages: "Messages",
      kbs: "Bibliothèques de connaissances",
      agents: "Ouvrir les agents",
      sessionsByTitle: "Chats (par titre)",
      commands: "Commandes",
      recent: "Récent",
      quickActions: "Actions rapides",
    },
    match: {
      vector: "Vector",
      keyword: "Mots-clés",
    },
    quick: {
      newChat: "Nouvelle conversation",
      knowledgeBases: "Ouvrir les bases de connaissances",
      agents: "Ouvrir les agents",
      organizations: "Ouvrir les espaces partagés",
      settings: "Ouvrir les paramètres",
      productTour: "Démonstration du produit",
    },
    empty: {
      noResults: "Aucun contenu correspondant trouvé",
      askAi: "Interroger directement l\\\'IA",
      adjustRetrieval: "Ajuster la récupération",
    },
    hotkey: {
      select: "Navigation",
      enter: "Ouvrir",
      cmdNumber: "Sauter à",
      cmdEnter: "Démarrer la conversation",
      esc: "Fermer",
    },
  },
  tools: {
    multiKbSearch: "Recherche跨基",
    searchKnowledge: "Rechercher des connaissances",
    readDocument: "Lire un document",
    listDocuments: "Lister les documents",
    knowledgeSearch: "Recherche sémantique",
    grepChunks: "Recherche de mots-clés",
    getChunkDetail: "Obtenir les détails du segment",
    listKnowledgeChunks: "Lister les Extraits de Connaissance",
    listKnowledgeBases: "Lister les bases de connaissances",
    getDocumentInfo: "Obtenir des Informations sur le Document",
    queryKnowledgeGraph: "Requête sur le Graphique de Connaissance",
    think: "Pensée profonde",
    todoWrite: "Plan",
  },
  vectorStoreBadge: {
    systemDefault: "Valeur par défaut du système",
    sharedFromOrg: "Partagé depuis une autre organisation",
    unknownStore: "Magasin inconnu",
    unavailable: "Indisponible",
  },
  kbSettings: {
    vectorStore: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      loading: "Chargement...",
      engineLabel: "Magasin de vecteurs",
      engineDesc:
        "Choisissez un magasin dans la configuration globale des magasins de vecteurs, ou laissez-le comme la valeur par défaut du système pour utiliser l’outil RETRIEVE_DRIVER du workspace.",
      boundLabel: "Magasin de vecteurs lié",
      systemDefault: "Valeur par défaut du système",
      immutableHint:
        "Ne peut pas être modifié après la création. Pour la migrer plus tard, créez un nouveau KB lié au magasin souhaité et réindexez-le.",
      immutableEdit:
        "La liaison avec le magasin de vecteurs ne peut pas être modifiée après la création.",
      unavailableHint:
        "Le magasin de vecteurs lié actuellement est indisponible; vérifiez sa configuration de connexion dans les paramètres → Magasins de vecteurs.",
      goGlobalSettings: "Aller aux paramètres des magasins de vecteurs",
    },
    storage: {
      title: "Permissions des rôles",
      selectDescription:
        "Sélectionnez l’instance de stockage spécifique à associer à cette base de connaissances.",
      defaultTag: "Défaut",
      instanceLabel: "Instance de stockage",
      instanceDesc:
        "Le même type de stockage peut avoir plusieurs instances, chacune ayant des points de terminaison, des compartiments ou des identifiants différents.",
      migrateHint:
        "Cette base de connaissances contient déjà des fichiers; utilisez le flux de migration de stockage pour passer d’instances.",
      manageInstances: "Gérer les instances de stockage",
      localStorage: "Stockage local",
      loading: "Chargement...",
    },
    parser: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      loading: "Chargement...",
      noEngineAvailable:
        "Aucun moteur de parsing disponible, ou le service de parsing de documents n’est pas configuré.",
      default: "Défaut",
      goConfig: "Aller dans les paramètres →",
      noEngine: "Aucun moteur disponible",
      fileTypePdf: "Documents PDF",
      fileTypeWord: "Documents Word",
      fileTypePpt: "Présentations",
      fileTypeExcel: "Feuilles de calcul Excel",
      xlsxFirstRowAsHeader:
        "Utiliser la première ligne comme en-tête pour chaque ligne",
      fileTypeEbook: "E-books",
      fileTypeWebArchive: "Archives Web",
      fileTypeCsv: "Fichiers CSV",
      fileTypeText: "Texte brut",
      fileTypeJson: "Fichiers JSON",
      fileTypeImage: "Images",
      fileTypeAudiovisual: "Audio",
      engines: {
        builtin: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        simple: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        anydoc: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        mineru: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        mineru_cloud: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        paddleocr_vl: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        paddleocr_vl_cloud: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        weknoracloud: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        markitdown: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        opendataloader: {
          name: "Nom",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
    },
  },
  agentStream: {
    toolApproval: {
      waiting: "En attente...",
      waitingStatus: "En attente de l\\\'approbation",
      targetWithTool: "{service} › {outil}",
      titleWithTarget: "Aujourd\'hui · {service} › {outil}",
      argsLabel: "Arguments",
      argsModified: "Modifiés",
      countdownShort: "{secondes}s",
      approve: "Approuver et exécuter",
      reject: "Rejeter",
      approvedTag: "Approuvé",
      rejectedTag: "Rejeté",
      invalidJson: "Les arguments doivent être au format JSON valide",
      submitted: "Soumis",
      submitFailed: "Soumission échouée",
      userRejected: "Utilisateur a rejeté",
    },
    mcpOAuth: {
      waiting: "En attente...",
      waitingStatus: "En attente de l\\\'approbation",
      targetWithTool: "{service} › {outil}",
      titleWithService: "OAuth · {service}",
      titleWithTool: "OAuth · {service} › {outil}",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      authorize: "Approuver",
      skip: "Ignorer les éléments existants",
      countdownShort: "{secondes}s",
      authorizedTag: "Approuvé",
      timedOutTag: "Approbation expirée",
      canceledTag: "Annulé",
      authorizedToast: "Approuvé. Reprise en cours...",
      startFailed: "Échec de démarrage de l\\\'approbation",
      resumeFailed: "Échec de reprise. Veuillez essayer à nouveau.",
      skipFailed: "Échec du passage. Veuillez essayer à nouveau.",
    },
    tools: {
      searchKnowledge: "Rechercher des connaissances",
      grepChunks: "Recherche de mots-clés",
      webSearch: "Recherche Web",
      webFetch: "Récupération Web",
      getDocumentInfo: "Obtenir des Informations sur le Document",
      listKnowledgeChunks: "Lister les Extraits de Connaissance",
      getRelatedDocuments: "Trouver les Documents Associés",
      getDocumentContent: "Obtenir le Contenu du Document",
      wikiReadSourceDoc: "Lire la documentation source approfondie",
      readDocument: "Lire un document",
      listDocuments: "Lister les documents",
      todoWrite: "Plan",
      knowledgeGraphExtract: "Extraction du Graphique de Connaissance",
      thinking: "Pensée",
      attachmentParsing: "Analyse des pièces jointes...",
      imageAnalysis: "Analyse d’Images",
      queryUnderstand: "Comprendre la Requête",
      queryKnowledgeGraph: "Requête sur le Graphique de Connaissance",
      readSkill: "Compétence de Lecture",
      executeSkillScript: "Exécuter un Script de Compétence",
      listSandboxFiles: "Lister les Fichiers du Béquilleau",
      readFile: "Lire un Fichier",
      readSandboxFile: "Lire un Fichier du Béquilleau",
      writeSandboxFile: "Écrire un Fichier dans le Béquilleau",
      editSandboxFile: "Modifier un Fichier du Béquilleau",
      shellExec: "Exécuter une Commande du Béquilleau",
      dataAnalysis: "Data Analysis",
      dataSchema: "Data Schema",
      databaseQuery: "Database Query",
    },
    skillFiles: {
      heading: "Fichiers de Compétences",
      script: "script",
      instructions: "Instructions",
    },
    sandboxFiles: {
      found: "Trouvé {count} fichier(s)",
      empty: "Aucune clé API de plateforme",
      truncated: "Sortie partielle",
      wrote: "Écrit",
      edited: "Modifié",
      replacements: "Remplacements {count}",
      moreLines: "{count} lignes supplémentaires",
    },
    shellExec: {
      workDir: "Répertoire de travail",
      exitCode: "Code de sortie",
      stdout: "Sortie standard",
      stderr: "Sortie d’erreur",
      emptyOutput: "Aucune sortie",
      truncated: "Sortie partielle",
      killed: "Exécution limitée",
      binarySuppressed:
        "Sortie binaire supprimée. Écrivez les fichiers dans le répertoire des artefacts pour les télécharger.",
    },
    citation: {
      notFound: "Inscription non trouvée.",
      loadFailed: "Échec du chargement des clés API de plateforme",
      noKbForWiki:
        "Impossible d’identifier la base de connaissances associée. Impossible d’ouvrir le Wiki.",
    },
    toolSummary: {
      getDocument: "Get document: {title}",
      document: "Document",
      listChunks: "Afficher les segments de document",
      listFaqEntry: "Afficher FAQ: {question}",
      deepThinking: "Réflexion Profonde",
    },
    plan: {
      inProgress: "En cours",
      pending: "En attente",
      completed: "Terminé",
    },
    search: {
      noResults: "Aucun contenu correspondant trouvé",
      candidatesBelowThreshold:
        "Correspondance de {count} candidat(s), aucun assez pertinent pour être utilisé",
      foundResultsFromFiles:
        "Trouvé {count} résultat(s) dans {files} fichier(s)",
      foundResults: "Trouvé {count} résultat(s)",
      foundMixedResults:
        "Trouvé {count} résultat(s) ({docCount} documents, {webCount} résultats web)",
      webResults: "Trouvé {count} résultat(s) web",
      grepSummary:
        "Trouvé {chunks} correspondance(s) de segment(s) dans {docs} document(s)",
    },
    grepResults: {
      chunkHits: "{count} segments",
      keywordHits: "{count} correspondances",
      titleMatch: "titre",
      faqEntry: "entrée FAQ",
    },
    knowledgeChunksList: {
      chunkRange: "Chargement {fetched} / {total} segments",
      page: "Page {page}, {pageSize} par page",
      offsetRange: "Segments {from}–{to}",
      queryMatches: '{count} correspondances pour "{query}" dans ce document',
      queryNoMatch: 'Aucune correspondance pour "{query}" dans ce document',
    },
    attachmentParsing: {
      parsedSummary: "Analyse de {count} pièces jointes",
      parsedWithSkipped:
        "Analyse de {parsed} pièces jointes, {skipped} sautées (encore en traitement)",
      noneReady: "Aucune pièce jointe analysée disponible",
    },
    ragPipeline: {
      searching: "Recherche de la base de connaissances...",
      searchingWithQuery: 'Recherche de la base de connaissances: "{query}"',
      searchingWeb: "Recherche sur le Web...",
      searchingWebWithQuery: 'Recherche sur le Web: "{query}"',
      searchingMixed: "Recherche de la base de connaissances et sur le Web...",
      searchingMixedWithQuery:
        'Recherche de la base de connaissances et sur le Web: "{query}"',
      searchDone: "Recherche terminée",
    },
    mcp: {
      discoverTools: "Découvrir les outils MCP",
      listServers: "Lister les services MCP",
      listTools: "Enumérer les outils MCP",
      searchTools: "Chercher les outils MCP",
      describeTool: "Examiner la définition de l'outil",
      callTool: "Utiliser l'outil MCP",
      showing: "Affichage de {count} parmi {total}",
      moreAvailable: "Plus de résultats disponibles",
      empty: "Aucune clé API de plateforme",
      parameters: "Paramètres",
      expand: "Développer",
      collapse: "Montrer moins",
      required: "Obligatoire",
      fullSchema: "Définition complète des paramètres",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      result: "Résultat",
      status: {
        not_loaded: "Non chargé",
        loading: "Chargement...",
        ready: "Prêt",
        needs_auth: "Authentification requise",
        error: "Erreur",
        disabled: "Désactivé",
        unavailable: "Indisponible",
      },
    },
    toolStatus: {
      calling: "Appel à {name}...",
      searchKb: "Recherche dans la base de connaissances",
      searchKbFailed: "Recherche dans la base de connaissances échouée",
      searchMixed: "Recherche dans la base de connaissances et sur le Web",
      searchMixedFailed: "Recherche échouée",
      webSearch: "Recherche Web",
      webSearchFailed: "Recherche sur le Web échouée",
      grepSearch: "Recherche de mots-clés",
      grepSearchFailed: "Recherche de mots-clés échouée",
      getDocInfo: "Obtenir des informations sur le document",
      getDocInfoFailed: "Échec de la récupération des informations du document",
      viewDocument: "Afficher le document",
      thinkingDone: "Réflexion terminée",
      thinkingFailed: "Échec de la réflexion",
      updateTodos: "Mise à jour de la liste des tâches",
      updateTodosFailed: "Échec de la mise à jour de la liste des tâches",
      imageAnalyzing: "Affichage du contenu de l\'image...",
      imageAnalysisDone: "Contenu de l\'image affiché",
      imageAnalysisFailed: "Échec de l\'affichage de l\'image",
      attachmentParsing: "Analyse des pièces jointes...",
      attachmentParsingDone: "Pièces jointes analysées",
      attachmentParsingFailed: "Échec de l\'analyse des pièces jointes",
      queryUnderstanding: "Compréhension de la requête...",
      queryUnderstandDone: "Requête comprise",
      called: "Appelé {name}",
      calledFailed: "Échec de l\'appel à {name}",
      shellExecRunning: "Exécution de la commande de sandbox...",
    },
    copy: {
      emptyContent:
        "La réponse actuelle est vide, ne peut pas être enregistrée dans la base de connaissances",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    },
    saveToKb: {
      emptyContent:
        "La réponse actuelle est vide, ne peut pas être enregistrée dans la base de connaissances",
      editorOpened:
        "Éditeur ouvert, veuillez sélectionner une base de connaissances et enregistrer",
    },
  },
  agentEditor: {
    builtinHint:
      "Cet agent est intégré. Le nom et la description ne peuvent pas être modifiés, mais les paramètres de configuration peuvent être ajustés.",
    navGroups: {
      basic: "Fondamentaux",
      knowledge: "Connaissance et Récupération",
      capability: "Capacités",
      integration: "Publication et Intégrations",
    },
    questionSuggestions: {
      navLabel: "Upload d’attachments",
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      startersTitle: "Démarrages de conversation",
      followUpsTitle: "Réponses contextuelles après la réponse",
      enableStarters: "Afficher les questions de démarrage",
      enableStartersDesc:
        "Affichées avant le premier message utilisateur provenant de sources curieuses, de connaissances ou mixtes.",
      enableFollowUps: "Générer des questions de suivi",
      enableFollowUpsDesc:
        "Générées de manière asynchrone après chaque réponse complète. L\\\'activation de cette option ajoute un usage de modèle.",
      sourceMode: "Mode source",
      count: "Nombre de questions",
      curatedItems: "Questions curées",
      curatedItemsDesc:
        "Utilisées comme point de départ et priorisées en mode hybride.",
      addItem: "Ajouter une question",
      model: "Modèle Généré",
      modelDesc: "Utilise le modèle de la tour terminée lorsqu\\\'il est vide.",
      advancedSettings: "Paramètres de génération avancés",
      displayRules: "Règles d\\\'affichage et de retraite",
      contextTurns: "Tours de contexte",
      categories: "Types de questions",
      instruction: "Instruction supplémentaire",
      instructionPlaceholder:
        "Par exemple: prioriser les questions pratiques pour les étapes suivantes et éviter les questions larges ou les réponses répétitives...",
      suppressFallback: "Masquer après les réponses de retraite",
      suppressQuestion:
        "Masquer lorsque la réponse se termine par une question",
      knowledgeFallback:
        "Utiliser les candidats de connaissance en cas d\'échec de la génération",
      allowRegenerate: "Autoriser les utilisateurs à regénérer",
      modeCurated: "Curées",
      modeKnowledge: "Connaissance",
      modeGenerated: "Générées",
      modeHybrid: "Hybride",
      categoryClarify: "Clarifier",
      categoryDeepen: "Approfondir",
      categoryAction: "Étape suivante",
    },
    placeholders: {
      available: "Variables disponibles: ",
      clickToInsert: "(cliquez pour insérer)",
      hint: "Laissez vide ou 0 pour utiliser la valeur par défaut (120 secondes)",
    },
    intentPrompts: {
      title: "Permissions des rôles",
      sectionDesc:
        "Configurez les pièces jointes d’images, de documents et d’audio dans la conversation, ainsi que les règles de parsing et les modèles associés",
      intentLabel: "Intention",
      promptPlaceholder: "Entrez un prompt système personnalisé...",
      customized: "Personnalisé",
      empty: "Aucune clé API de plateforme",
    },
    promptNav: {
      ariaLabel: "Aperçu du prompt",
      system: "Prompt système",
      context: "Modèle de contexte",
      intent: "Prompts d\'intention",
      rewriteSystem: "Reformuler · Système",
      rewriteUser: "Reformuler · Utilisateur",
      fallback: "Retour en cas d\'échec",
    },
    selection: {
      all: "Tout",
      selected: "Sélectionné",
      disabled: "Désactivé",
    },
    desc: {
      name: "Nom",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      systemPrompt:
        "Prompt système personnalisé pour définir le comportement et le rôle de l\'agent",
      promptInheritance:
        "Le texte du modèle tampon reste inchangé après les mises à jour du modèle; le texte édité est enregistré comme un prompt personnalisé. En mode agent, ce champ définit le rôle et le flux de travail; les autorisations des outils et les sélections de sources par tour sont contrôlées séparément.",
      leaveEmptyDefault:
        "(laisser vide pour utiliser la valeur par défaut du système)",
      contextTemplate:
        "Définissez la façon dont le contenu récupéré est formaté avant de passer au modèle",
      model: "Modèle Généré",
      temperature:
        "Contrôlez la randomisation de la sortie, 0 est le plus déterministe, 1 est le plus aléatoire",
      maxTokens:
        "Nombre maximal de jetons pour la réponse du modèle. La valeur par défaut est 2048. Les valeurs personnalisées sont enregistrées tels quelles.",
      maxTokensAgent:
        "Nombre maximal de jetons générés par tour de raisonnement, y compris le JSON des appels d’outils. La valeur par défaut est 4096 sans sandbox, ou 24576 quand un sandbox peut écrire ou modifier des fichiers. Une valeur personnalisée est enregistrée tels quelles et ne change pas ultérieurement.",
      thinking: "Pensée",
      conversationSection:
        "Configurez les paramètres de conversation multi-tour et de réécriture des requêtes",
      conversationSectionAgent:
        "Le raisonnement intelligent est toujours multi-tour. L’histoire antérieure est conservée jusqu\'à la fenêtre de contexte du modèle, et les tours plus anciens sont résumés automatiquement une fois qu’il est rempli",
      multiTurn:
        "Lorsque activé, le contexte de conversation historique est conservé",
      historyRounds:
        "Nombre de tours de conversation récents à conserver comme contexte",
      retainRetrievalHistory:
        "Conservez les résultats de la base de connaissances des tours précédents. Lorsque désactivé, chaque tour effectue une nouvelle recherche",
      rewrite:
        "Réécrit automatiquement les questions de l’utilisateur dans les conversations multi-tour pour résoudre les références et les omissions",
      memoryEnabled:
        "Permet à cet agent de lire et d’ajouter à votre mémoire à long terme. Lorsqu’il est désactivé, les conversations avec lui ne lisent pas vos mémoires et ne ajoutent pas de nouvelles. Activer-le ici n’affecte rien tant que le workspace ou le switch personnel n’est pas activé",
      queryUnderstandModel:
        "Modèle utilisé pour comprendre les requêtes (réécriture et détection d’intention). Laissez vide pour réutiliser le modèle de chat principal.",
      rewriteSystemPrompt:
        "Prompt système pour la réécriture des questions (laissez vide pour la valeur par défaut)",
      rewriteUserPrompt:
        "Modèle de prompt utilisateur pour la réécriture des questions (laissez vide pour la valeur par défaut)",
      selectTools: "Sélectionnez les outils disponibles pour l’Agent",
      maxIterations:
        "Limite le nombre de pas de raisonnement que une tâche peut prendre. L’infini continue jusqu\'à ce que le modèle s’arrête par lui-même ou que vous l’arrêtez",
      kbScope:
        "Sélectionnez l’étendue des bases de connaissances accessibles à l’agent",
      webSearch: "Recherche Web",
      webSearchProvider:
        "Spécifiez un moteur de recherche pour cet agent. Laissez vide pour utiliser celui par défaut.",
      webSearchMaxResults:
        "Nombre maximum de résultats retournés par recherche",
      webFetchEnabled:
        "Après le classement, récupérez automatiquement le contenu complet des pages Web des résultats les plus élevés pour une meilleure réponse",
      webFetchTopN:
        "Nombre maximum de pages Web à récupérer après le classement",
      retrievalSection:
        "Configurez la stratégie de récupération de connaissances, le classement et la priorité des FAQ",
      queryExpansion:
        "Élargissez automatiquement les termes de requête pour améliorer la récupération",
      embeddingTopK:
        "Nombre maximum de résultats de la récupération de vecteurs",
      keywordThreshold:
        "Score de pertinence minimum pour la récupération de mots-clés",
      vectorThreshold:
        "Score de similarité minimum pour la récupération de vecteurs",
      rerankTopK: "Nombre maximum de résultats conservés après le classement",
      rerankThreshold: "Score de pertinence minimum pour le classement",
      fallbackStrategy:
        "Comment gérer lorsque le contenu pertinent n\'est pas trouvé dans la base de connaissances",
      fallbackResponse:
        "Texte fixe retourné lorsqu’il n’est pas possible de répondre",
      fallbackPrompt:
        "Prompt pour guider la réponse du modèle lorsque la réponse n’est pas trouvée dans la base de connaissances",
    },
    tools: {
      thinking: "Pensée",
      thinkingDesc: "Outil de résolution de problèmes dynamique et réfléchi",
      todoWrite: "Plan",
      todoWriteDesc: "Créer des plans de recherche structurés",
      searchKnowledge: "Rechercher des connaissances",
      searchKnowledgeDesc:
        "Recherche sémantique, mots-clés ou hybride sur les segments de base de connaissances",
      readDocument: "Lire un document",
      readDocumentDesc:
        "Lire les métadonnées et les segments d’un document, avec la pagination et la recherche au sein du document",
      listDocuments: "Lister les documents",
      listDocumentsDesc: "Parcourir les documents d’une base de connaissances",
      grepChunks: "Recherche de mots-clés",
      grepChunksDesc:
        "Trouver rapidement les documents et les segments contenant des mots-clés spécifiques",
      knowledgeSearch: "Recherche sémantique",
      knowledgeSearchDesc:
        "Comprendre les questions et trouver du contenu sémantiquement pertinent",
      listChunks: "Afficher les segments de document",
      listChunksDesc: "Obtenir le contenu complet des segments d’un document",
      queryGraph: "Interroger la grammaire de connaissances",
      queryGraphDesc:
        "Interroger les relations à partir de la grammaire de connaissances",
      getDocInfo: "Obtenir des informations sur le document",
      getDocInfoDesc: "Afficher les métadonnées d’un document",
      dbQuery: "Interroger la base de données",
      dbQueryDesc: "Interroger les informations à partir de la base de données",
      dataAnalysis: "Data Analysis",
      dataAnalysisDesc: "Understand data files and perform data analysis",
      dataSchema: "View Data Schema",
      dataSchemaDesc: "Get metadata of tabular files",
      requiresKb: "(nécessite une configuration de base de connaissances)",
      requiresRagKb:
        "(nécessite une base de connaissances avec l’indexation vectorielle/mots-clés activée)",
      requiresWikiKb:
        "(nécessite une base de connaissances avec des fonctionnalités de Wiki)",
      wikiSearch: "Rechercher dans le Wiki",
      wikiSearchDesc:
        "Recherche de mots-clés / sémantique sur les pages du Wiki",
      wikiReadPage: "Lire une page du Wiki",
      wikiReadPageDesc: "Lire le contenu complet d’une page Wiki spécifique",
      wikiReadSourceDoc: "Lire la documentation source approfondie",
      wikiReadSourceDocDesc:
        "Découvrir les documents originaux à partir desquels est constituée une page Wiki",
      wikiFlagIssue: "Marquer une erreur dans la Wiki",
      wikiFlagIssueDesc:
        "Signaler des erreurs factuelles ou des conflits de fusion sur une page Wiki",
      wikiWritePage: "Créer / Écraser la Wiki",
      wikiWritePageDesc:
        "Créer une nouvelle page ou écraser complètement une page existante",
      wikiReplaceText: "Remplacer du texte dans la Wiki",
      wikiReplaceTextDesc: "Remplacer un texte spécifique dans une page Wiki",
      wikiRenamePage: "Renommer la page Wiki",
      wikiRenamePageDesc:
        "Renommer une page Wiki et mettre à jour automatiquement les liens croisés",
      wikiDeletePage: "Supprimer la page Wiki",
      wikiDeletePageDesc: "Supprimer une page Wiki et nettoyer les liens morts",
      wikiReadIssue: "Afficher un problème Wiki",
      wikiReadIssueDesc: "Voir les détails d’un problème sur la page Wiki",
      wikiUpdateIssue: "Mettre à jour un problème Wiki",
      wikiUpdateIssueDesc:
        "Mettre à jour le statut d’un problème sur la page Wiki",
      webSearch: "Recherche Web",
      webFetch: "Récupération Web",
      groupBase: "De base",
      groupRag: "Extraction de connaissances (RAG)",
      groupWikiRead: "Lecture Wiki",
      groupWikiEdit: "Édition Wiki",
      groupWikiIssue: "Examen Wiki",
      groupData: "Data Analysis",
      writeWarning: "Modifie le contenu de la Wiki",
      dangerTag: "Écrire",
      statusNoKb: "Aucune base de connaissances liée",
      kbMetricRag: "KBs RAG",
      kbMetricWiki: "KBs Wiki",
      statusInactive:
        "{count} outil(s) cochés ne peuvent pas prendre effet avec la configuration actuelle",
      effectiveLabel: "Outils efficaces",
      effectiveDesc:
        "Calculé à partir de la configuration actuelle — ceci sont les outils que l\'agent pourra effectivement appeler",
      effectiveEmpty:
        "Aucun outil disponible — l\'agent retombera sur une conversation de modèle standard",
    },
    embed: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    },
    im: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      feishu:
        "Synchronise les documents, feuilles de calcul et fichiers depuis le Wiki de Feishu",
      lark: "Synchronise les documents, feuilles de calcul et fichiers depuis le Wiki de Lark (version internationale de Feishu)",
      slack: "Slack",
      telegram: "Telegram",
      dingtalk:
        "Synchronise les documents en ligne depuis les bases de connaissances DingTalk",
      mattermost: "Mattermost",
      wecom: "WeCom",
      wechat: "WeChat",
      qqbot: "QQBot",
      yunzhijia: "Yunzhijia",
      addChannel: "Ajouter un Canal",
      channelsTitle: "Canaux IM",
      disabled: "Désactivé",
      editChannel: "Modifier le Canal",
      deleteConfirm:
        "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
      channelName: "Nom du Canal",
      channelNamePlaceholder: "Entrez un nom pour une identification facile",
      channelNameDefaultHint:
        "Par défaut, le nom de la plateforme; vous pouvez le personnaliser, ou laisser vide pour utiliser le nom de la plateforme lors de la sauvegarde",
      platform: "Plateforme",
      mode: "Mode de Connexion",
      outputMode: "Mode de Sortie",
      outputStream: "Flux",
      outputFull: "Réponse complète",
      callbackUrl: "URL de Callback",
      empty: "Aucune clé API de plateforme",
      unnamed: "Canal sans Nom",
      docLink: "Guide d’Intégration",
      wecomConsole: "Console d’Admin WeCom",
      feishuConsole: "Plateforme Ouverte de Feishu",
      larkConsole: "Plateforme Ouverte de Lark",
      slackConsole: "Console API de Slack",
      telegramConsole: "BotFather Telegram",
      dingtalkConsole: "Plateforme Ouverte de Dingtalk",
      dingtalkCardTemplateId: "ID du modèle de carte (facultatif)",
      dingtalkCardTemplateIdHint:
        "Créez un modèle de carte AI sur open-dev.dingtalk.com/fe/card pour activer l\'affichage de sortie en typing effect",
      mattermostConsole: "Intégrations Mattermost",
      qqbotConsole: "Plateforme Ouverte de QQ",
      qqbotAPIBaseURLHint:
        "Facultatif. Laissez vide pour utiliser le point de terminaison API par défaut de production.",
      qqbotGatewayURLHint:
        "Facultatif. Laissez vide pour récupérer automatiquement la passerelle WebSocket commune.",
      yunzhijiaConsole: "PLATEFORME OUVERTE DE YUNZHUIJIA",
      yunzhijiaRobotDoc: "Docs de messagerie de robot",
      yunzhijiaImageDoc: "Plateforme de développeur (images)",
      yunzhijiaModeHint:
        "Supporte Webhook et WebSocket; le mode WebSocket ne nécessite pas d\'URL de rappel publique.",
      yunzhijiaSendMsgUrl: "URL d\'envoi de message",
      yunzhijiaSendMsgUrlHint: "Utilisé pour les réponses de robot.",
      yunzhijiaSecret: "Clé de signature (facultatif)",
      yunzhijiaSecretPlaceholder:
        "Clé de signature HmacSHA1 du robot Yunzhijia",
      yunzhijiaSecretHint:
        "Si configurée, les rappels entrants seront vérifiés à l’aide de la signature HmacSHA1",
      yunzhijiaAppId: "ID de l’application (téléchargement d’images)",
      yunzhijiaAppIdPlaceholder:
        "ID de l’application de la plateforme ouverte Yunzhijia",
      yunzhijiaAppSecret:
        "Clé secrète de l’application (téléchargement d’images)",
      yunzhijiaAppSecretPlaceholder:
        "Clé secrète de l’application de la plateforme ouverte Yunzhijia",
      yunzhijiaAppCredentialHint:
        "Utilisé pour obtenir appAccessToken et télécharger les images envoyées par les utilisateurs.",
      yunzhijiaTimeout: "Délai d’expiration HTTP (secondes)",
      yunzhijiaTimeoutHint:
        "Délai d’expiration pour envoyer des réponses via l’URL de message, par défaut 10 secondes",
      yunzhijiaAllowedHostSuffix: "Suffixe d’hôte autorisé",
      yunzhijiaAllowedHostSuffixHint:
        "Restrindre l’hôte de l’URL de message à ce suffixe pour des raisons de sécurité (par exemple yunzhijia.com)",
      yunzhijiaSendMsgUrlRequired:
        "Entrez l’URL de message de l’robot Yunzhijia",
      mattermostModeHint:
        "Mattermost ne prend en charge que le mode Webhook (webhook sortant + jeton de bot).",
      mattermostPostToMain: "Publier les réponses dans le fil du canal",
      mattermostPostToMainHint:
        'Lorsqu’il est activé, les réponses du bot sont de nouveaux messages de niveau supérieur dans le canal. Lorsqu’il est désactivé (par défaut), ils restent dans la conversation et la vue principale montre uniquement "N réponses".',
      modeHint: "WebSocket est recommandé pour une configuration plus simple",
      consoleTip: "pour obtenir des informations d’identification",
      wecomWSEndpointHint:
        "Facultatif. Pour les déploiements privés de WeCom, entrez une adresse WebSocket personnalisée. Laisser vide pour utiliser l’endpoint cloud public par défaut. Pour les adresses internes, ajoutez le nom d’hôte à la variable d’environnement SSRF_WHITELIST.",
      wecomAPIBaseURLHint:
        "Facultatif. Pour les déploiements privés de WeCom, entrez une URL de base de l’API personnalisée. Laisser vide pour utiliser l’endpoint cloud public par défaut. Pour les adresses internes, ajoutez le nom d’hôte à la variable d’environnement SSRF_WHITELIST.",
      feishuAPIBaseURLHint:
        "Facultatif. Laissez vide si le serveur peut atteindre Internet directement; si un proxy est nécessaire pour accéder à Feishu, entrez l’URL du proxy inversé (par exemple nginx, http://host:port). Pour les adresses internes, ajoutez le nom d’hôte à la variable d’environnement SSRF_WHITELIST.",
      fileKnowledgeBase: "Base de connaissances de stockage de fichiers",
      fileKnowledgeBasePlaceholder:
        "Sélectionnez une base de connaissances (facultatif)",
      fileKnowledgeBaseHint:
        "Lorsqu’elle est configurée, les fichiers envoyés par les utilisateurs seront automatiquement enregistrés dans cette base de connaissances",
      sessionMode: "Mode de session",
      sessionModeUser: "Par utilisateur (par défaut)",
      sessionModeThread: "Par fil de discussion",
      sessionModeHint:
        "Mode utilisateur: chaque personne a sa propre conversation. Utilisez /clear pour commencer une nouvelle conversation. Mode de fil de discussion: chaque fil de discussion est une conversation séparée. Plusieurs personnes peuvent collaborer dans le même fil de discussion.",
      wechatScanBind: "Scanner pour lier WeChat",
      wechatScanning: "Scanner le code QR avec WeChat",
      wechatBindSuccess: "WeChat lié avec succès",
      wechatRebind: "Rélier à nouveau",
      wechatHint: "Nécessite iOS WeChat 8.0.70+, messages directs uniquement",
      wechatQRExpired: "Code QR expiré, veuillez essayer à nouveau",
      wechatBinding: "Lien en cours...",
      sectionChannel: "Informations sur le canal",
      sectionConnection: "Connexion",
      sectionCredentials: "Identifiants de la plateforme",
      selectPlatform: "Sélectionnez la plateforme",
      selectPlatformDesc: "Choisissez le plateforme de messagerie à connecter",
      enabled: "Activer le canal",
      stepBasic: "Informations de base",
      stepConnection: "Connexion",
      stepKnowledge: "Stockage de fichiers",
      stepCredentials: "Identifiants",
      sectionAccess: "Accès et sortie",
      sectionSession: "Session",
      sectionCallback: "URL de rappel",
      sectionKnowledge: "Stockage de fichiers",
      sectionStatus: "Statut",
    },
    agentType: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      defaultNamePattern: "Mon {label}",
      kbMismatch: {
        ragQa: "La récupération RAG n\'est pas activée",
        wikiQa: "Le wiki n\'est pas activé",
        hybridRagWiki: "Aucune surface de récupération n\'est activée",
        dataAnalysis: "Requires RAG (FAQ not supported)",
        quickAnswer: "Le mode Réponse rapide nécessite une récupération RAG",
        generic: "Quelque chose s\'est mal passé. Veuillez essayer à nouveau.",
      },
      kbIncompatibleWarn:
        "{count} surface(s) de connaissances sélectionnées ne sont pas compatibles avec ce type, merci de les ajuster manuellement.",
    },
    mcp: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      selectLabel: "Sélectionnez les Services MCP",
      selectDesc: "Sélectionnez les services MCP à activer",
      selectPlaceholder: "Sélectionnez les services MCP",
      authWaitTimeout: "Délai d\'attente d\'authentification (en secondes)",
      authWaitTimeoutDesc:
        "Durée maximale d’attente pour la complétion de l’authentification OAuth lors d’une conversation; l’invitation est ignorée une fois écoulée (concerne uniquement les services MCP d’authentification OAuth).",
      authWaitTimeoutPlaceholder:
        "Délai d’attente d’authentification par défaut: 600 secondes",
      unavailableService: "Service indisponible",
    },
    llmCallTimeout: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      hint: "Laissez vide ou 0 pour utiliser la valeur par défaut (120 secondes)",
      placeholder: "Entrez des secondes, plage recommandée 60-1800",
    },
    imageUpload: {
      navLabel: "Upload d’attachments",
      sectionTitle: "Upload d’attachments",
      sectionDesc:
        "Configurez les pièces jointes d’images, de documents et d’audio dans la conversation, ainsi que les règles de parsing et les modèles associés",
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      vlmModel: "Modèle VLM",
      vlmModelDesc: "Modèle de langue de vision pour l’analyse d’images",
      vlmModelPlaceholder: "Sélectionnez un modèle VLM",
      vlmModelRequired:
        "Un modèle VLM est requis lorsque l’upload d’images est activé",
      imageUnderstandingLabel:
        "Compréhension des images des pièces jointes / OCR scanné",
      imageUnderstandingDesc:
        "Pour les PDF/PPT en images uniquement (documents scannés), exécutez OCR VLM lorsqu\'aucun texte ne peut être extrait. Cela augmente la latence d’analyse et est désactivé par défaut.",
      ocrMaxPagesLabel: "Pages max d’OCR scannées",
      ocrMaxPagesDesc:
        "Spécifiez le nombre maximal de pages d’un document scanné envoyées au VLM pour l’OCR. Un nombre plus élevé de pages offre une meilleure couverture mais augmente le temps d’analyse et les coûts. Mettre à 0 utilise la valeur globale par défaut.",
      useGlobalDefault: "0 = valeur globale par défaut",
      storageProvider: "Stockage des images",
      storageProviderDesc:
        "Sélectionnez un moteur de stockage pour les images téléchargées. Laissez vide pour utiliser la valeur globale par défaut",
      storageProviderPlaceholder: "Sélectionnez un moteur de stockage",
      storageDefault: "Valeur globale par défaut",
      notConfigured: "Non configuré",
      goStorageSettings: "Aller aux paramètres de stockage",
    },
    audioUpload: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      asrModel: "Modèle ASR",
      asrModelDesc:
        "Modèle de reconnaissance vocale pour la transcription des fichiers audio. Si aucun modèle n’est sélectionné, les fichiers audio seront transmis en tant que remplaçants.",
      asrModelPlaceholder: "Sélectionnez un modèle ASR",
    },
    chatParser: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      waitTimeoutLabel: "Attachment Parse Wait Timeout (s)",
      waitTimeoutDesc:
        "Durée pendant laquelle une tour de chat attend que les pièces jointes en cours d’analyse soient terminées avant de continuer avec celles qui sont terminées. Augmentez cette valeur pour les fichiers volumineux ou scannés. 0 utilise la valeur globale par défaut.",
    },
    faq: {
      title: "Permissions des rôles",
      enableLabel: "Activer l’Analyse de Tableau d_a_t_a",
      enableDesc:
        "Lorsque les extraits récupérés proviennent d’un fichier CSV/Excel, demandez à l’LLM de générer une requête SQL DuckDB avant de répondre. Cela ajoute une appel supplémentaire à l’LLM et plusieurs secondes de latence, donc activez-le uniquement lorsque vous avez besoin d’une analyse de type SQL.",
      thresholdLabel: "Seuil direct de réponse",
      thresholdDesc:
        "Lorsque la similarité entre la question et les FAQ dépasse cette valeur, utilisez directement la réponse FAQ",
      boostLabel: "Boost de Score FAQ",
      boostDesc:
        "Multipliez les scores de pertinence des FAQ par ce facteur pour les classer plus haut",
    },
    dataAnalysis: {
      enableLabel: "Activer l’Analyse de Tableau d_a_t_a",
      enableDesc:
        "Lorsque les extraits récupérés proviennent d’un fichier CSV/Excel, demandez à l’LLM de générer une requête SQL DuckDB avant de répondre. Cela ajoute une appel supplémentaire à l’LLM et plusieurs secondes de latence, donc activez-le uniquement lorsque vous avez besoin d’une analyse de type SQL.",
    },
    fallback: {
      fixed: "Réponse Fixe",
      model: "Modèle Généré",
    },
    fileTypes: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      allTypes: "Tous les Types",
      pdf: "Documents PDF",
      word: "Documents Word (.docx/.doc)",
      textLabel: "Texte",
      text: "Fichiers de Texte Plani (.txt)",
      markdown: "Documents Markdown",
      csv: "Fichiers de Valeurs Séparées par des Virgules",
      excel: "Feuilles de Calcul Excel (.xlsx/.xls)",
      imageLabel: "Images",
      image: "Fichiers Image (.jpg/.jpeg/.png)",
    },
  },
  faqManager: {
    import: {
      recentResult: "Résultats d’Importation Récents",
      totalData: "Total Data",
      success: "Invitation révoquée.",
      added: "Ajouté",
      merged: "Mergé",
      partialFailed: "Échec Partiel",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      skipped: "Ignorées",
      progressHint: "Validation et importation des FAQ...",
      downloadReasons: "Raisons du Téléchargement",
      appendMode: "Mode Ajout",
      replaceMode: "Mode Remplacement",
      importing: "Importation...",
      importDone: "Importation complétée",
      importFailed: "Importation échouée",
      waiting: "En attente...",
      importInProgress:
        "L’importation est en cours, veuillez attendre qu’elle soit terminée",
      noFailedRecords:
        "Aucun enregistrement échoué disponible pour le téléchargement",
    },
  },
  mermaid: {
    diagram: "Schéma",
    expand: "Développer",
    zoomIn: "Zoomer",
    zoomOut: "Dézoomer",
    reset: "Réinitialiser",
    download: "Télécharger l\'image",
    close: "Fermer",
    downloading: "Téléchargement en cours...",
  },
  ollama: {
    unknown: "Inconnu",
    today: "Aujourd\'hui",
    yesterday: "Hier",
    daysAgo: "{days} jours ago",
  },
  datasource: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    add: "Ajouter une source d_a_t_a",
    empty: "Aucune clé API de plateforme",
    edit: "Modifier",
    delete: "Supprimer",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    deleteSuccess: "Clé API de plateforme supprimée",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
    syncNow: "Synchroniser maintenant",
    syncTriggered: "Tâche de synchronisation soumise",
    syncFailed: "Échec de la tâche de synchronisation",
    pause: "Pause",
    resume: "Reprendre",
    paused: "En pause",
    resumed: "Reprise",
    pauseFailed: "Échec de la pause",
    logs: "Journal",
    syncModeLabel: "Mode de synchronisation",
    syncMode: {
      incremental: "Incremental",
      full: "Complet",
    },
    status: {
      active: "Connecté",
      paused: "En pause",
      error: "Erreur",
    },
    createTitle: "Nouveau point de terminaison MCP",
    editTitle: "Modifier le point de terminaison MCP",
    nameLabel: "Nom",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    sectionBasic: "Fondamentaux",
    testConnection: "Tester la connexion",
    testSuccess: "Connexion réussie",
    testFailed: "Connexion échouée",
    connected: "Connecté",
    connectionFailed: "Connexion échouée",
    isRequired: "est requis",
    credentialsLabel: "Identifiants",
    gitlab: {
      baseUrl: "URL de base de l\'API",
      projectsHint:
        "Entrez un ID de projet ou un chemin de namespace (par exemple groupe/projet), avec une branche et des répertoires optionnels.",
      project: "Projet",
      ref: "Branche",
      paths: "Répertoires",
      addProject: "Ajouter un projet",
    },
    resourceHint: "Sélectionnez les espaces ou dossiers à synchroniser",
    untitled: "Sans titre",
    resourceLoadFailed: "Échec du chargement des ressources",
    noResources: "Aucun espace wiki trouvé",
    noResourcesDesc:
      "L’application a besoin d’accès au wiki via un groupe de discussion pour récupérer le contenu",
    noResourcesDesc_notion:
      "L’application a besoin des permissions d\'accès aux pages Notion pour récupérer le contenu",
    retryLoadResources: "Reessayer",
    guideStep1:
      "Créez un groupe de discussion dans Feishu, puis ajoutez votre application en tant que bot dans les paramètres du groupe",
    guideStep2:
      'Ouvrez les "Paramètres" du wiki > "Paramètres des membres" > "Ajouter un membre", recherchez le groupe de discussion et ajoutez-le',
    guideStep3:
      'Assurez-vous que le rôle du groupe de discussion est au moins "Peut lire", puis revenez et cliquez sur Reessayer',
    guideStep1_notion:
      "Ouvrez la page ou la base de données que vous souhaitez synchroniser dans Notion",
    guideStep2_notion:
      'Cliquez sur le menu "···" en haut à droite, sélectionnez "Connecter à" ou "Ajouter des connexions"',
    guideStep3_notion:
      "Recherchez et sélectionnez votre application d\'intégration, puis revenez et cliquez sur Reessayer",
    permissionDocLink: "Voir les documents de permission du wiki de Feishu",
    syncScheduleLabel: "Planification de la synchronisation",
    conflictLabel: "Stratégie de résolution des conflits",
    conflict: {
      overwrite: "Écraser",
      skip: "Ignorer les éléments existants",
    },
    syncDeletions:
      "Synchroniser les suppressions (supprimer les connaissances lorsqu\'elles sont supprimées à la source)",
    createAndSync: "Créer et synchroniser maintenant",
    createAndSyncSuccess:
      "Source de données créée et tâche de synchronisation soumise",
    createButSyncFailed:
      "Source de données créée, mais échec de déclenchement de la synchronisation",
    updateSuccessSyncHint:
      "Source de données mise à jour. La modification ne démarre pas une synchronisation automatiquement; cliquez sur Synchroniser pour importer les changements.",
    saveFailed: "Échec de l’enregistrement de l’information d’identification",
    step: {
      selectType: "Sélectionner le type",
      credentials: "Identifiants",
      resources: "Ressources",
      strategy: "Stratégie",
    },
    syncHistory: "Historique de la synchronisation",
    refreshLogs: "Actualiser les journaux",
    noLogs: "Aucun enregistrement de synchronisation jusqu’ici",
    logStatus: {
      running: "Synchronisation en cours",
      success: "Invitation révoquée.",
      partial: "Partiel",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      canceled: "Annulé",
    },
    logMetric: {
      total: "Exécutions",
      skipped: "Ignorées",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
    },
    logSummary: {
      total: "Exécutions",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      items: "Éléments",
    },
    logDetail: {
      startTime: "Début",
      endTime: "Fin",
      failedItems: "Documents échoués",
      failedItemsMore: "{n} documents échoués supplémentaires non affichés",
      docsFailedSummary: "{n} document(s) ont échoué à la synchronisation",
    },
    connector: {
      feishu:
        "Synchronise les documents, feuilles de calcul et fichiers depuis le Wiki de Feishu",
      lark: "Synchronise les documents, feuilles de calcul et fichiers depuis le Wiki de Lark (version internationale de Feishu)",
      feishu_drive:
        "Synchronise les documents, feuilles de calcul et fichiers depuis un dossier Feishu Drive",
      lark_drive:
        "Synchronise les documents, feuilles de calcul et fichiers depuis un dossier Lark Drive (version internationale de Feishu)",
      notion: "Synchronise les pages et bases de données depuis Notion",
      confluence:
        "Synchronise les espaces et pages depuis Confluence au format Markdown",
      yuque:
        "Synchronise les documents depuis les bases de connaissances Yuque",
      dingtalk:
        "Synchronise les documents en ligne depuis les bases de connaissances DingTalk",
      rss: "Synchronise les articles depuis des flux RSS / Atom",
      ima: "Synchronise les documents, notes et fichiers depuis les bases de connaissances Tencent IMA (les sessions AI et les analyses vidéo ne sont pas prisent en charge)",
      gitlab: "Synchronise les fichiers depuis les projets GitLab",
    },
    connectorDesc: {
      feishu:
        "Synchronise les documents, feuilles de calcul et fichiers depuis le Wiki de Feishu",
      lark: "Synchronise les documents, feuilles de calcul et fichiers depuis le Wiki de Lark (version internationale de Feishu)",
      feishu_drive:
        "Synchronise les documents, feuilles de calcul et fichiers depuis un dossier Feishu Drive",
      lark_drive:
        "Synchronise les documents, feuilles de calcul et fichiers depuis un dossier Lark Drive (version internationale de Feishu)",
      notion: "Synchronise les pages et bases de données depuis Notion",
      confluence:
        "Synchronise les espaces et pages depuis Confluence au format Markdown",
      yuque:
        "Synchronise les documents depuis les bases de connaissances Yuque",
      dingtalk:
        "Synchronise les documents en ligne depuis les bases de connaissances DingTalk",
      rss: "Synchronise les articles depuis des flux RSS / Atom",
      ima: "Synchronise les documents, notes et fichiers depuis les bases de connaissances Tencent IMA (les sessions AI et les analyses vidéo ne sont pas prisent en charge)",
      gitlab: "Synchronise les fichiers depuis les projets GitLab",
    },
    drive: {
      folderTokenLabel: "Jeton du dossier Drive",
      folderTokenPlaceholder:
        "Entrez un folder_token ou une URL de dossier Feishu Drive",
      folderTokenRequired:
        "Veuillez entrer un token de dossier spécifique; la racine de l’espace de stockage cloud n’est pas prise en charge",
      rootNotSupportedHint:
        "Le dossier racine n’est pas paginé et ne retourne pas les raccourcis; choisissez un dossier spécifique",
      load: "Charger",
      shareHint:
        "Partagez d’abord le dossier Drive avec le groupe de l’application, sinon l’application ne peut pas y accéder",
      placeholderTitle: "Chargez d’abord un dossier Drive",
      placeholderDesc:
        'Entrez un token de dossier (ou collez une URL de dossier Drive Feishu) ci-dessus et cliquez sur "Charger"',
      loadForbiddenHint:
        "L\\\'application n\\\'a pas accès à ce dossier. Partagez-le avec le groupe de l\\\'application dans Drive Feishu et réessayez",
      loadAuthHint:
        "Les identifiants de l\\\'application sont invalides ou manquent des portées Drive. Vérifiez l\\\'ID de l\\\'application / le secret de l\\\'application et les permissions drive:drive:readonly",
      loadNotFoundHint:
        "Le token de dossier n\\\'existe pas ou a été supprimé. Vérifiez le token copié à partir de l\\\'URL du dossier Drive Feishu",
    },
    field: {
      appId: "ID de l\\\'application",
      appSecret: "Secret de l\\\'application",
      clientId: "ID du client",
      clientSecret: "Secret du client",
      operatorId: "ID de l\\\'opérateur",
      operatorIdHint:
        "Lit les bases de connaissances avec les permissions de cet utilisateur. Obtenez-le à partir de l\\\'API des détails de l\\\'utilisateur DingTalk",
      integrationToken: "Token d\\\'intégration",
      apiToken: "Token API",
      confluenceEdition: "Édition",
      confluenceEditionServer: "Serveur / Centre de données",
      confluenceEditionCloud: "Cloud",
      confluenceBaseUrl: "URL de Confluence",
      confluenceUsername: "Nom d\\\'utilisateur ou adresse e-mail",
      confluencePassword: "Mot de passe du serveur/DC",
      confluenceApiToken: "Token API Cloud",
      imaClientId: "ClientID IMA",
      imaApiKey: "APIKey IMA",
      baseUrl: "URL de base de l\'API",
      baseUrlHint:
        "Laissez vide pour utiliser l\\\'adresse publique cloud par défaut. Pour des déploiements privés/entreprises ou lors de l\\\'accès via un proxy inverse, entrez votre adresse personnalisée (par exemple https://api-proxy.example.com)",
      feedUrls: "URLs des flux",
      feedUrlsHint:
        "Une URL de flux RSS / Atom par ligne; plusieurs flux sont pris en charge.",
      authHeaders: "En-têtes personnalisés (optionnels)",
      authHeadersHint:
        'Pour des flux privés. Un par ligne au format "Nom: Valeur", par exemple: Authorization: Bearer xxxx',
    },
    comingSoon: "À venir",
    docHint: "Obtenez les identifiants à:",
    openDoc: "Ouvrir la documentation",
    prereqBarText:
      "Première utilisation? Cliquez pour voir le guide de configuration de l\\\'application Feishu",
    prereqBarText_yuque:
      "Première utilisation? Cliquez pour voir le guide de configuration du jeton Yuque",
    prereqStep1Brief_yuque: "Créez un jeton personnel Yuque",
    prereqStep1Desc_yuque:
      "Connectez-vous à Yuque → avatar → Paramètres → Jetons → Nouveau jeton",
    prereqStep2Brief_yuque: "Accordez les permissions nécessaires au jeton",
    prereqStep2Desc_yuque:
      "Vérifiez les permissions au moins repo:lecture et doc:lecture (lecture de la base de connaissances et du contenu du document)",
    prereqStep3Brief_yuque:
      "(Optionnel) Entrez l\\\'URL de base pour les déploiements d\\\'entreprise",
    prereqStep3Desc_yuque:
      "Laissez vide pour le cloud public; pour Yuque Entreprise ou hébergé, entrez le domaine de votre entreprise.",
    prereqStep1Brief_feishu: "Créez une application Feishu personnalisée",
    prereqStep1Desc_feishu:
      "Connectez-vous à la Plateforme Ouverte Feishu → Créez une application personnalisée",
    prereqStep2Brief_feishu: "Ajoutez la capacité de bot",
    prereqStep2Desc_feishu:
      "Plateforme Ouverte → Votre application → Ajoutez des capacités de l\\\'application → Bot",
    prereqStep3Brief_feishu: "Configurez les permissions de l\\\'application",
    prereqStep3Desc_feishu:
      "Activez les permissions wiki:wiki:lecture seule, drive:drive:lecture seule, drive:export:lecture seule, docx:document:lecture seule",
    prereqStep1Brief_lark: "Créez une application personnalisée Lark",
    prereqStep1Desc_lark:
      "Connectez-vous à la plateforme Open Lark → Créez une application personnalisée pour l\\\'entreprise",
    prereqStep2Brief_lark: "Ajoutez la capacité de bot",
    prereqStep2Desc_lark:
      "Plateforme Open Lark → Votre application → Ajoutez des capacités d\\\'application → Bot",
    prereqStep3Brief_lark: "Configurez les permissions de l\\\'application",
    prereqStep3Desc_lark:
      "Activez les permissions wiki:wiki:lecture seule, drive:drive:lecture seule, drive:export:lecture seule, docx:document:lecture seule",
    prereqStep1Brief_feishu_drive: "Créez une application personnalisée Feishu",
    prereqStep1Desc_feishu_drive:
      "Connectez-vous à la plateforme Open Feishu → Créez une application personnalisée pour l\\\'entreprise",
    prereqStep2Brief_feishu_drive: "Ajoutez la capacité de bot",
    prereqStep2Desc_feishu_drive:
      "Plateforme Open Feishu → Votre application → Ajoutez des capacités d\\\'application → Bot",
    prereqStep3Brief_feishu_drive:
      "Configurez les permissions de l\'application",
    prereqStep3Desc_feishu_drive:
      "Activez les permissions drive:drive:lecture seule, drive:export:lecture seule, docx:document:lecture seule",
    prereqStep1Brief_lark_drive: "Créez une application personnalisée Lark",
    prereqStep1Desc_lark_drive:
      "Connectez-vous à la plateforme Open Lark → Créez une application personnalisée pour l\'entreprise",
    prereqStep2Brief_lark_drive: "Ajoutez la capacité de bot",
    prereqStep2Desc_lark_drive:
      "Plateforme Open Lark → Votre application → Ajoutez des capacités d\'application → Bot",
    prereqStep3Brief_lark_drive: "Configurez les permissions de l\'application",
    prereqStep3Desc_lark_drive:
      "Activez les permissions drive:drive:lecture seule, drive:export:lecture seule, docx:document:lecture seule",
    prereqOpenConsole_yuque: "Ouvrez les paramètres du jeton Yuque",
    prereqBarText_dingtalk:
      "Première utilisation? Cliquez pour voir le guide d\'installation de l\'application DingTalk",
    prereqStep1Brief_dingtalk: "Créez une application interne à l\'entreprise",
    prereqStep1Desc_dingtalk:
      "Créez une application interne à l\'entreprise dans le DingTalk Open Platform et copiez son ID client et le secret client.",
    prereqStep2Brief_dingtalk:
      "Accordez des permissions de lecture à la base de connaissances",
    prereqStep2Desc_dingtalk:
      "Accordez les permissions Wiki.Workspace.Read, Wiki.Node.Read et Storage.File.Read.",
    prereqStep3Brief_dingtalk: "Entrez l’ID d’Union de l’opérateur",
    prereqStep3Desc_dingtalk:
      "Entrez l’ID d’Union d’un utilisateur DingTalk qui a accès aux bases de connaissances cibles.",
    prereqOpenConsole_dingtalk: "Ouvrez la console développeur de DingTalk",
    prereqBarText_ima:
      "Première utilisation? Cliquez pour voir le guide d’installation de l’API Open de Tencent IMA",
    prereqStep1Brief_ima: "Activer l’accès de l’agent API Open de Tencent IMA",
    prereqStep1Desc_ima:
      "Connectez-vous à https://ima.qq.com/agent-interface et demandez l’accès API Open",
    prereqStep2Brief_ima: "Obtenir l’ID client et la clé API",
    prereqStep2Desc_ima:
      "Copiez les identifiants ima-openapi-clientid et ima-openapi-apikey de la page agent-interface",
    prereqStep3Brief_ima:
      "Accorder l’accès des identifiants aux bases de connaissances cibles",
    prereqStep3Desc_ima:
      "Dans le client IMA, autorisez les identifiants pour les bases de connaissances que vous souhaitez synchroniser; les bases non autorisées ne seront pas affichées dans la liste",
    prereqOpenConsole_ima: "Ouvrez la console API Open de Tencent IMA",
    prereqBotBrief: 'Ajoutez la capacité "Bot" à votre application',
    prereqBotDesc:
      "Open Platform > Ajouter des capacités à l’application > Bot > créer une version et la publier",
    prereqPermBrief: "Accordez des permissions d’API",
    prereqOpenConsole: "Ouvrez la console développeur de Feishu",
    prereqMemberBrief:
      "Ajoutez votre application à la base de connaissances via un groupe de discussion",
    prereqMemberDesc:
      "Créez un groupe de discussion > ajoutez votre application en tant que bot > ajoutez le groupe de discussion en tant que membre de la base de connaissances",
    back: "Retour",
    next: "Suivant",
    save: "Enregistrer la configuration",
    schedule30min: "Every 30 min",
    schedule1h: "Every hour",
    schedule6h: "Every 6 hours",
    schedule12h: "Every 12 hours",
    schedule24h: "Daily",
    scheduleHuman: {
      "30min": "Every 30 min",
      "1h": "Hourly",
      "6h": "Every 6 hours",
      "12h": "Every 12 hours",
      "24h": "Daily",
    },
    resourceType: {
      wikiSpace: "Wiki Space",
      docCategory: "Document Tag",
      book: "Yuque Book",
    },
    neverSynced: "Never synced",
    justNow: "à l’instant",
    minutesAgo: "{n} min. ago",
    hoursAgo: "{n}h ago",
    daysAgo: "{days} jours ago",
    syncError: {
      dingtalk_document_failed:
        "Le document DingTalk ne peut pas être lu; vérifiez l\'accès et réessayez la synchronisation.",
      dingtalk_resource_failed:
        "La ressource DingTalk est indisponible; vérifiez l\'accès et la sélection enregistrée, puis réessayez.",
      deletion_lookup_failed:
        "Failed to look up the item before deletion; see server logs",
      deletion_failed: "Deletion failed; see server logs",
      ingest_failed: "Ingest failed; see server logs",
    },
  },
  integrations: {
    cli: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
      docs: "Docs",
      docsHint: "Installation and complete command reference",
      quickstart: "Quick start",
      installTitle: "Install the CLI",
      installDesc:
        "Construisez à partir de la source avec Git et Go 1.26+. Cet exemple macOS / Linux met à jour le PATH pour le terminal actuel uniquement. Pour un usage régulier, placez le binaire dans un répertoire du PATH.",
      connectTitle: "Connectez-vous à ce serveur",
      connectDesc:
        "Créez et activez un profil nommé weknora, puis connectez-vous avec votre adresse e-mail et votre mot de passe. Si ce profil existe déjà, choisissez un autre nom et mettez à jour l\'exemple MCP pour qu\'il corresponde.",
      verifyTitle: "Vérifiez la connexion",
      verifyDesc:
        "Vérifiez le statut du serveur et de l\'authentification, puis listez les bases de connaissances à laquelle votre compte a accès.",
      commandsTitle: "Commandes courantes",
      commandsDesc:
        "Remplacez KB_ID par un identifiant de base de connaissances et ajustez le chemin du fichier, la requête et la question. Les documents téléchargés doivent être traités avant de pouvoir être recherchés.",
      mcpTitle: "Connectez un client MCP",
      mcpDesc:
        "Après la connexion, ajoutez cette configuration à un client MCP qui prend en charge stdio. Si le client ne trouve pas weknora, définissez la commande au chemin absolu du binaire.",
      copy: "Copier la clé",
      copied: "Copié dans le presse-papiers",
    },
    title: "Permissions des rôles",
    mcpserver: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
      listTitle: "Membres du workspace",
      empty: "Aucune clé API de plateforme",
      disabled: "Désactivé",
      cardSummary: "{outils} outils · {scope}",
      scopeAll: "Toutes les bases de connaissances",
      scopeCount: "{count} bases de connaissances",
      create: "Nouveau point de terminaison",
      editTitle: "Modifier le point de terminaison MCP",
      createTitle: "Nouveau point de terminaison MCP",
      drawerDesc:
        "Le point de terminaison décide quels clients peuvent voir les bases de connaissances et lesquelles peuvent appeler. Le jeton est affiché une seule fois, à la création et à la rotation.",
      sectionBasic: "Fondamentaux",
      nameLabel: "Nom",
      namePlaceholder: "Par exemple: automatisation des opérations centrales",
      descriptionLabel: "Description",
      descriptionPlaceholder:
        "Optionnel: qui utilise cet point d\'accès et pourquoi",
      enabledLabel: "Activé",
      sectionScope: "Portée de la base de connaissances",
      kbScopeLabel: "Bases de connaissances accessibles",
      kbScopePlaceholder:
        "Laissez vide pour toutes les bases de connaissances du workspace",
      kbScopeHint:
        "Chaque récupération, tool de question et écriture est limité à ces bases de connaissances. Vide signifie l\'ensemble du workspace.",
      sectionTools: "Outils exposés",
      toolsHint:
        "Seuls les outils cochés apparaissent dans la liste des outils clients; les outils non cochés sont refusés même lorsqu\'ils sont appelés par nom. Les outils d’écriture sont désactivés par défaut.",
      clearGroup: "Effacer",
      selectGroup: "Sélectionner tout",
      toolsRequired: "Sélectionnez au moins un outil",
      groups: {
        retrieve: "Récupération & lecture",
        chat: "Requêtes",
        wiki: "Wiki",
        ingest: "Écritures (soyez prudent)",
      },
      tools: {
        list_knowledge_bases: "Lister les bases de connaissances",
        list_knowledge_basesDesc:
          "Retourne les bases de connaissances dans la portée et les modes de récupération qu’elles supportent",
        search_knowledge: "Recherche sémantique",
        search_knowledgeDesc:
          "Trouver des passages pertinents pour une question naturelle, avec des sources",
        grep_chunks: "Recherche de mots-clés / expressions régulières",
        grep_chunksDesc:
          "Recherche insensible à la casse sur des morceaux bruts; le mieux pour des termes exacts, des codes et des noms",
        list_documents: "Lister les documents",
        list_documentsDesc:
          "Parcourir les documents d’une seule base de connaissances",
        read_document: "Lire le document",
        read_documentDesc:
          "Afficher les métadonnées et les morceaux d’un document dans l’ordre",
        ask: "Demander",
        askDesc:
          "Exécuter l’agent configuré à cet endpoint et renvoyer une réponse citée; prend en charge les tours de suivi",
        wiki_search: "Rechercher dans le wiki",
        wiki_searchDesc: "Parcourir les pages wiki générées",
        wiki_read_page: "Lire une page du wiki",
        wiki_read_pageDesc: "Afficher une page du wiki par slug",
        wiki_index: "Parcourir l’index du wiki",
        wiki_indexDesc:
          "Afficher le sommaire d’une base de connaissances du wiki",
        add_document: "Ajouter un document",
        add_documentDesc:
          "Ajouter un document à partir du texte Markdown ou d’une URL",
        update_document: "Mettre à jour un document",
        update_documentDesc:
          "Remplacer le contenu ou le titre d’un document Markdown",
        delete_document: "Supprimer un document",
        delete_documentDesc:
          "Supprimer un document et ses données d’index de manière permanente",
      },
      sectionAsk: "Paramètres de la demande",
      defaultAgentLabel: "Agent par défaut",
      defaultAgentPlaceholder: "Réponse rapide intégrée quand elle est vide",
      defaultAgentHint:
        "L’agent qui s’exécute avec l’outil de demande. Les clients ne peuvent pas choisir un agent eux-mêmes; une chaîne vide signifie la réponse rapide intégrée.",
      sectionLimits: "Limites de taux",
      rateLimitLabel: "Appels max par minute",
      rateLimitHint:
        "S’applique à tous les appels d’outils à ce point d’accès. Les clients reçoivent une erreur de limitation de taux si elle est dépassée.",
      sectionConnect: "Connexion",
      stepConfig: "Configurer",
      stepConnect: "Se connecter",
      snippetsLabel: "Configuration du client",
      connectHintExisting:
        "Le jeton a été affiché une seule fois à la création (le jeton actuel commence par {hint}…). Renouveler le jeton pour obtenir un nouveau.",
      tokenDialogTitle: "Point d’accès prêt, enregistrez le jeton",
      connectDialogTitle: "Se connecter à ce point d’accès",
      tokenOnce:
        "Ce jeton est affiché une seule fois. Copiez-le maintenant et stockez-le à un endroit sûr.",
      connectPlaceholderHint:
        "Pour des raisons de sécurité, le jeton n’est pas affiché à nouveau; les exemples suivants utilisent un espace réservé que vous devez remplacer par le jeton que vous avez enregistré.",
      tokenLabel: "Jeton",
      urlLabel: "URL du point d’accès",
      snippet: {
        httpTitle: "Curseur / VS Code / Claude Desktop",
        httpDesc:
          "Les clients qui parlent HTTP streamable prennent cette section mcpServers telle quelle.",
        claudeCodeTitle: "Claude Code",
        claudeCodeDesc: "Une commande dans le terminal.",
        stdioTitle: "Clients stdio-only",
        stdioDesc:
          "Transmis via mcp-remote; nécessite Node.js sur la machine cliente.",
      },
      loadFailed: "Échec du chargement des clés API de plateforme",
      nameRequired: "Entrez un nom",
      updated: "Point de terminaison mis à jour",
      created: "Point de terminaison créé",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      deleted: "Point de terminaison supprimé",
      deleteFailed: "Échec de la suppression de la clé API de plateforme",
      rotated: "Le jeton a été tourné; le jeton ancien n\'est plus valide",
      rotateFailed: "Échec de la rotation du jeton",
      disabledToast: "Point de terminaison désactivé",
      enabledToast: "Point de terminaison activé",
      menuConnect: "Informations de connexion",
      menuDisable: "Désactiver",
      menuEnable: "Activer",
      menuRotate: "Tourner le jeton",
      copied: "Copié dans le presse-papiers",
      deleteConfirm:
        "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    },
    tabs: {
      im: "Intégration IM",
      embed: "Intégration Web",
      api: "Intégration API",
      chrome: "Extension Chrome",
      cli: "CLI",
      claw: "Compétence Claw",
      mcpserver: "Serveur MCP",
    },
    api: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
      loading: "Chargement...",
      retry: "Recommencer",
      copy: "Copier la clé",
      copySuccess: "Clé copiée",
      baseUrl: "URL de base de l\'API",
      baseUrlDesc:
        "Utilisez cette URL de base avec les chemins de l\'API REST.",
      apiKeys: "Clés API",
      apiKeysDesc:
        "Créez des clés distinctes par intégration et restrez les permissions d\'opérations et l\'accès à la base de connaissances.",
      createApiKey: "Créer une clé API",
      createApiKeyDialogDesc:
        "Choisissez les capacités et le domaine de la base de connaissances que cette clé peut utiliser.",
      noApiKeys: "Aucune clé API",
      apiKeyName: "Nom",
      apiKeyValue: "Clé API",
      apiKeyNamePlaceholder: "Exemple: Accès en lecture seule au KB",
      apiKeyNameRequired: "Entrez un nom de clé API",
      apiKeyCapabilitiesRequired:
        "Sélectionnez au moins une capacité pour une clé API limitée",
      apiKeyAccessMode: "Mode d\'accès",
      apiKeyScopedAccess: "Accès limité",
      apiKeyAccessType: "Type d\'accès",
      apiKeyAccessTypeHint:
        '"Knowledge base" fonctionne au sein du domaine du KB au niveau de permission inférieur; "Workspace full" déverrouille également tous les API au niveau du workspace, tels que les modèles et les sources de données.',
      apiKeyCapabilities: "Capacités",
      apiKeyCapabilityGroupKnowledge: "Données du KB",
      apiKeyCapabilityGroupAutomation: "Agents et intégrations",
      apiKeyCapabilityGroupCollaboration: "Membres et espaces",
      apiKeyCapabilityGroupTenant: "Configuration du workspace",
      apiKeyCapabilitySelectGroup: "Sélectionner tout",
      apiKeyCapabilityClearGroup: "Effacer",
      capabilityTenantFull: "Accès complet au workspace",
      capabilityTenantFullHint:
        "Autorise tous les API au niveau du workspace, y compris les modèles, les magasins de vecteurs, les sources de données et les canaux. Le domaine du KB ne s\'applique pas.",
      capabilityRetrieve: "Récupérer les bases de connaissances",
      capabilityRetrieveHint:
        "Lit, interroge et recherche les données à l\'intérieur du domaine de la base de connaissances sélectionnée. Ne crée pas de sessions ni ne modifie le contenu.",
      capabilityChat: "Discussion",
      capabilityChatHint:
        "Permet à cette clé de tenir des conversations et de gérer ses propres sessions. Ne modifie pas le contenu de la base de connaissances.",
      capabilityReadAgents: "Lire les agents",
      capabilityReadAgentsHint:
        "Liste les agents, lit les détails des agents, les préférences et les questions suggérées. Ne permet pas de discussion ou d\'édition d\'agents.",
      capabilityIngest: "Écrire du contenu au KB",
      capabilityIngestHint:
        "Permet à cette clé d’écrire des contenus dans ses bases de connaissances autorisées (chargement de documents, édition de fragments/FAQ/tags/wiki). Elle ne peut pas créer de bases de connaissances ou d\'agents, ne peut pas effacer une base de connaissances et reste liée aux bases de connaissances sélectionnées.",
      capabilityManageKbs: "Gérer les bases de connaissances",
      capabilityManageKbsHint:
        "Laissez cette clé gérer le cycle de vie complet des bases de connaissances: créer, copier, mettre à jour et supprimer les bases de connaissances et modifier leur initialisation/configuration. Les opérations sur les bases de connaissances existantes (copier/mettre à jour/supprimer) restent limitées au portefeuille sélectionné; la création d\'une nouvelle base de connaissances n\'est pas limitée (la nouvelle base de connaissances appartient à cet espace).",
      capabilityManageAgents: "Gérer les agents",
      capabilityManageAgentsHint:
        "Laissez cette clé créer, mettre à jour, supprimer et copier les agents. La configuration des agents peut contenir des liens sensibles aux modèles/MCP, donc ce n\'est pas activé par défaut — activez-le uniquement quand nécessaire.",
      capabilityMessageHistory: "Historique des messages",
      capabilityMessageHistoryHint:
        "Permettez cette clé de rechercher l\'historique des conversations du workspace et de lire les statistiques associées. Elle n\'accorde pas accès à la configuration du workspace.",
      capabilityManageModels: "Gérer les modèles",
      capabilityManageModelsHint:
        "Gérer les définitions de modèles, les identifiants, les tests de connectivité et les identifiants WeKnoraCloud.",
      capabilityManageMcpServices: "Gérer les services MCP",
      capabilityManageMcpServicesHint:
        "Gérer les services MCP, les identifiants, les politiques d\'approbation des outils et l\'état OAuth pour cette entité.",
      capabilityManageDatasources: "Manage data sources",
      capabilityManageDatasourcesHint:
        "Manage data-source connectors, credentials, resource selection, and sync jobs. Knowledge-base scope still applies when a source is bound to a KB.",
      capabilityManageChannels: "Gérer les canaux",
      capabilityManageChannelsHint:
        "Gérer les canaux d\'embedding d\'agents, les canaux IM et les flux de liaison QR WeChat.",
      capabilityManageVectorStores: "Gérer l\'infrastructure de récupération",
      capabilityManageVectorStoresHint:
        "Gérer la configuration des magasins de vecteurs, le parser, la lecture de documents et les tests de connectivité du moteur de stockage.",
      capabilityManageStorageBackends: "Gérer les backends de stockage",
      capabilityManageStorageBackendsHint:
        "Gérer les instances de backend de stockage d\'objets/fichiers (par exemple, compatibles S3 ou stockage local): leur cycle de vie CRUD, les tests de connectivité et la sélection par défaut du workspace.",
      capabilityManageWebSearch: "Gérer la recherche web",
      capabilityManageWebSearchHint:
        "Gérer les fournisseurs de recherche web, les identifiants et les tests de connexion.",
      capabilityRunEvaluations: "Exécuter des évaluations",
      capabilityRunEvaluationsHint:
        "Exécuter des tâches d’évaluation et consulter les résultats.",
      capabilityManageMembers: "Gérer les membres",
      capabilityManageMembersHint:
        "Lister et gérer les membres du workspace, les rôles, les invitations et les liens d’invitation. Ne comprend pas la gestion des clés API, la suppression du workspace ou le transfert de propriété.",
      capabilityManageSpaces: "Gérer les espaces",
      capabilityManageSpacesHint:
        "Gérer les espaces d’organisation, rejoindre les workflows, participer aux espaces, envoyer des invitations et contrôler la visibilité des espaces partagés. Ne fournit pas la gestion des bases de connaissances partagées ou des agents.",
      capabilityManageTenantSettings: "Gérer les paramètres du workspace",
      capabilityManageTenantSettingsHint:
        "Lire et mettre à jour les paramètres d’intégration au niveau du workspace, tels que le mode d’authentification de l’API, la configuration des en-têtes de requête et les paramètres clés-valeurs du workspace. Ne comprend pas la gestion des clés API, la gestion des membres, la suppression du workspace ou le transfert de propriété.",
      apiKeyKnowledgeScope: "Bases de connaissances",
      apiKeyKnowledgeScopePlaceholder:
        "Laisser vide pour autoriser toutes les bases de connaissances",
      allKnowledgeBases: "Toutes les bases de connaissances",
      editApiKeyScope: "Modifier la clé API",
      editApiKeyScopeDesc:
        'Modifier le nom et l’étendue d’autorisation de la clé API "{name}".',
      editApiKeyScopeHint:
        "Laisser vide pour autoriser toutes les bases de connaissances dans ce workspace. Toutes les modifications entrent en vigueur immédiatement.",
      updateApiKeyScopeSuccess: "Clé API mise à jour",
      updateApiKeyScopeFailed: "Échec de la mise à jour de la clé API",
      createdAt: "Créé",
      actions: "Actions",
      deleteApiKey: "Supprimer",
      deleteApiKeyConfirm:
        "Après la suppression, cette clé API est immédiatement révoquée et les intégrations déployées qui l\'utilisent ne fonctionneront plus.",
      deleteApiKeySuccess: "Clé API supprimée",
      deleteApiKeyFailed: "Échec de la suppression de la clé API",
      createApiKeyFailed: "Échec de la création de la clé API",
      loadApiKeysFailed: "Échec du chargement des clés API",
      apiKeyCreated: "Clé API créée",
      principalMode: "Mode d\'identité utilisateur",
      principalModeDesc:
        "Choisissez comment les requêtes API identifient l\'utilisateur final. Cette identité limite à la fois les sessions de conversation et les autorisations de l\'outil MCP par utilisateur.",
      principalScope:
        "L\'identité de l\'utilisateur final_isole les sessions et l\'OAuth de l\'outil MCP. Les permissions d\'opération et le champ de la base de connaissances sont contrôlés par les Clés API ci-dessus.",
      modeTenant: "Espace de travail uniquement",
      modeDirect: "ID utilisateur direct",
      modeSigned: "Jeton signé",
      directWarning:
        "L\'ID utilisateur direct fait confiance à l\'en-tête fourni par l\'appelant. Utilisez-le uniquement pour les appels serveur-serveur de confiance.",
      directWarningDetail:
        "Anyone with the API key can change the user ID header to impersonate another external user and reuse or hijack that user's MCP OAuth authorization. Do not use this from browsers or untrusted clients; use Signed token for end-user apps.",
      signedRecommended:
        "Recommended for user-facing apps: your backend signs a short-lived HS256 JWT for the external user.",
      signedFlowDetail:
        "Keep the HMAC secret only on WeKnora and your trusted backend—never put it in requests or ship it to browsers. The request header carries the JWT string signed with that secret (it changes on each issuance or after expiry), not the secret itself. JWT must include sub (external user ID), tenant_id, aud=weknora, and exp (max 24h lifetime).",
      directHeader: "User ID header",
      requireDirectHeader: "Exiger l’en-tête ID utilisateur",
      requireDirectHeaderDesc:
        "Lorsque cette option est activée, les requêtes API sans l’en-tête ID utilisateur sont rejetées; lorsque cette option est désactivée, toutes les requêtes sont traitées comme le tout espace de travail sans différence par utilisateur.",
      tokenHeader: "Token header",
      tokenHeaderDesc:
        "Clients send the backend-signed JWT in this fixed header.",
      hmacSecret: "HMAC secret",
      hmacSecretDesc:
        "Same secret stored in WeKnora; used only on your backend to sign JWTs—never send it as a request header.",
      secretConfigured:
        "Secret configuré (ne pas montré à nouveau); entrez une nouvelle valeur pour effectuer une rotation",
      secretSavedCopyHint:
        "Secret enregistré. Copiez-le dans votre backend maintenant — vous ne pourrez pas le voir à nouveau une fois quitter cette page.",
      generateSecret: "Générer un secret",
      hmacSecretResetConfirmTitle: "Réinitialiser le secret HMAC?",
      hmacSecretResetConfirmBody:
        "Après la réinitialisation, l’ancien secret HMAC est immédiatement révoqué. Chaque service backend qui signait les JWT avec l’ancien secret doit passer au nouveau secret pour que les appels avec les jetons signés fonctionnent. Cette action ne peut pas être annulée.",
      hmacSecretResetConfirmOk: "Réinitialiser",
      hmacSecretResetConfirmCancel: "Annuler",
      tokenSignExample: "Exemple de signature de JWT dans le backend (Go)",
      signedRequestStep0:
        "# 0. Sign JWT sur votre backend (HS256, aud=weknora, sub=id utilisateur, tenant_id={tenantId}, exp<=24h)",
      signedRequestStep0Hint:
        "# Placez le JWT dans {headerName} — pas le secret HMAC",
      requestExampleCreateSession: "# 1. Créer une session",
      requestExampleAgentChat:
        "# 2. Chat de l’agent (SSE; remplacez <session_id> par l’id de l’étape 1)",
      requestExampleJwtPlaceholder: "<JWT signé par votre backend>",
      requestExample: "Exemple de requête",
      playgroundTitle: "Playground de l’API",
      playgroundDesc:
        "Envoyez des requêtes réelles avec la clé API actuelle et le mode d’identité pour vérifier la création de session, le chat de l’agent et la sortie SSE.",
      playgroundOpen: "Ouvrir le Playground",
      playgroundDrawerDesc:
        "Déboguez les sessions, le chat de l’agent et la sortie SSE en utilisant le flux d’intégration de l’API réel",
      playgroundSectionRequest: "Configuration de la requête",
      playgroundSectionPreview: "Aperçu de la requête",
      playgroundSectionResult: "Résultat de l’exécution",
      playgroundAgent: "Agent de test",
      playgroundAgentPlaceholder: "Sélectionnez un agent à tester",
      playgroundBuiltin: "Intégré",
      playgroundAgentsLoadFailed: "Échec du chargement des agents",
      playgroundExternalUser: "ID utilisateur externe",
      playgroundExternalUserPlaceholder: "user_123",
      playgroundTenantModeHint:
        "Le mode Workspace-only ne transmet pas l’identité de l’utilisateur externe; toutes les sessions API utilisent le même principal au niveau du workspace.",
      playgroundDirectModeHint:
        "Cet ID utilisateur est envoyé avec l’en-tête {headerName}.",
      playgroundSignedModeHint:
        "Le mode de jeton signé utilise le sujet du JWT comme l’identité de l’utilisateur externe. Le playground signe un jeton JWT de test à durée limitée pour cet ID utilisateur.",
      playgroundQuestion: "Question de test",
      playgroundQuestionPlaceholder: "Entrez une question à envoyer à l’agent",
      playgroundRequestPreview: "Aperçu de la demande (secrets masqués)",
      playgroundRun: "Exécuter le test",
      playgroundStop: "Arrêter",
      playgroundNeedApiKey: "Ce workspace n’a pas d’API key.",
      playgroundNeedAgent: "Sélectionnez un agent de test.",
      playgroundNeedQuestion: "Entrez une question de test.",
      playgroundNeedExternalUser: "Entrez un ID utilisateur externe.",
      playgroundMintTokenFailed:
        "Échec de la création d’un jeton JWT de test à durée limitée.",
      playgroundMissingSessionId:
        "La création de la session a réussi, mais la réponse ne contient pas d’ID de session.",
      playgroundNoStream: "L’API de chat n’a pas retourné un flux SSE lisible.",
      playgroundGeneratedToken: "Jeton de test généré",
      playgroundStepSession: "Étape 1: Créer une Session",
      playgroundStepChat: "Étape 2: Flux SSE de chat de l’agent",
      playgroundFinalAnswer: "Réponse extraite",
      playgroundEmptyResult:
        "Exécutez un test pour afficher la réponse de la session, la sortie brute du flux SSE et la réponse extraite ici.",
      playgroundSuccess: "Test terminé ({ms}ms)",
      playgroundStopped: "Test arrêté",
      playgroundFailed: "Test d’API Playground échoué",
      loadFailed: "Échec du chargement des clés API de plateforme",
      saveFailed: "Échec de l’enregistrement de l’information d’identification",
      saveSuccess: "Paramètres d’intégration API enregistrés",
      autoSaveNeedSecret:
        "Le mode de jeton signé nécessite une clé HMAC avant que l’enregistrement automatique ne puisse se poursuivre.",
    },
    selectAgentPlaceholder: "Choisissez un agent",
    selectAgentHint: "Veuillez sélectionner un agent d’abord",
    boundAgent: "Agent lié",
    filterByAgent: "Filtrer par agent",
    filterByAgentWithName: "Filtrer par agent: {name}",
    filterAllAgents: "Tous les agents",
    imOverview: {
      title: "Permissions des rôles",
    },
    embedOverview: {
      title: "Permissions des rôles",
    },
    agentEditor: {
      label: "Changer le mot de passe",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
    },
    chrome: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
      capabilitiesTitle: "Capacités de la compétence",
      capabilities: {
        qa: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        clip: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        notes: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        shortcuts: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
      scenarios: {
        research: "Recherche quotidienne",
        learning: "Notes d\'étude",
        tech: "Références techniques",
        work: "Connaissance du travail",
      },
      stepsTitle: "Étapes de configuration",
      steps: {
        api: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        port: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        install: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        connect: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
      openApiSettings: "Paramètres API",
      copy: "Copier la clé",
      copySuccess: "Clé copiée",
      installCta: "Ouvrir ClawHub",
      installCtaHint:
        "Installer la compétence WeKnora · ouvre dans un nouvel onglet",
      storeMeta: "Magasin Chrome Web · v1.0.0",
    },
    claw: {
      title: "Permissions des rôles",
      subtitle:
        "Importez des documents et exécutez une récupération hybride (vecteur + mot-clé) via l’API REST WeKnora — pour les téléchargements, les imports d’URL, les entrées en Markdown et les recherches croisées entre les bases de connaissances.",
      capabilitiesTitle: "Capacités de la compétence",
      capabilities: {
        upload: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        url: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        manual: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        search: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        browse: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
      stepsTitle: "Étapes de configuration",
      steps: {
        api: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        env: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        install: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
        verify: {
          title: "Permissions des rôles",
          desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
        },
      },
      openApiSettings: "Paramètres API",
      copy: "Copier la clé",
      copyEnvSuccess: "Exemple d’environnement copié",
      copyCmdSuccess: "Commande d’installation copiée",
      ecosystemNote:
        "La compétence est hébergée sur ClawHub ({\\\'@\\\'}lyingbug/weknora). Consultez la page ClawHub pour les documents API complets et l’historique des versions.",
      installCta: "Ouvrir ClawHub",
      installCtaHint:
        "Installer la compétence WeKnora · ouvre dans un nouvel onglet",
      hubMeta: "ClawHub · {\\\'@\\\'}lyingbug/weknora · MIT-0",
    },
  },
  credential: {
    configured: "Configurée",
    unconfigured: "Non configurée",
    configure: "Configurer",
    update: "Remplacer",
    remove: "Supprimer",
    inputPlaceholder: "Entrez une valeur",
    savedToast: "Information d’identification enregistrée",
    saveFailed: "Échec de l’enregistrement de l’information d’identification",
    removedToast: "Information d’identification supprimée",
    removeFailed: "Échec de la suppression de l’information d’identification",
    confirmRemovePrompt:
      "Retirez cette credential? Cette action ne peut pas être annulée.",
    confirmRemove: "Confirmer la suppression",
  },
  userProfile: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    changePassword: {
      label: "Changer le mot de passe",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      currentLabel: "Mot de passe actuel",
      currentPlaceholder: "Entrez votre mot de passe actuel",
      currentRequired: "Entrez votre mot de passe actuel",
      newLabel: "Nouveau mot de passe",
      newPlaceholder: "Entrez le nouveau mot de passe",
      confirmLabel: "Confirmer le nouveau mot de passe",
      confirmPlaceholder: "Entrez le nouveau mot de passe à nouveau",
      submit: "Mettre à jour le mot de passe",
      success: "Invitation révoquée.",
      failed:
        "Échec de la modification du mot de passe. Vérifiez que votre mot de passe actuel est correct.",
      policyFailed:
        "Le nouveau mot de passe doit comporter entre 8 et 32 caractères et inclure des lettres et des chiffres",
      sameAsCurrent:
        "Le nouveau mot de passe doit différer de votre mot de passe actuel",
      oidcOnlyDescription:
        "Votre compte a été créé via la connexion OIDC et n’a pas de mot de passe local connu.",
      oidcOnlyNotice:
        "Demandez à un administrateur système de réinitialiser votre mot de passe, ou continuez à vous connecter avec OIDC. Le changement en mode autonome nécessite votre mot de passe actuel.",
    },
  },
  tenantMember: {
    title: "Permissions des rôles",
    sectionDescription:
      "Invitez vos collègues au travail et gérnez leurs rôles. Seulement le propriétaire peut ajouter ou supprimer des membres.",
    learnRbacGuide: "Apprenez sur le RBAC",
    listTitle: "Membres du workspace",
    loading: "Chargement...",
    retry: "Recommencer",
    empty: "Aucune clé API de plateforme",
    emptySearch: 'Aucun membre ne correspond à "{q}".',
    searchPlaceholder: "Recherche par nom ou e-mail",
    permissions: {
      title: "Permissions des rôles",
      desc: "Ce que chaque rôle peut faire dans ce workspace. Contrôlé par le serveur; les contrôles de l’interface utilisateur reflètent les règles mais ne sont pas la source de vérité.",
      iconHint:
        "Passer la souris dessus pour voir les détails des permissions de rôle",
      manageMembers: "Gérer les membres",
      manageTenantConfig: "Modifier les paramètres du workspace",
      manageInfra:
        "Configurer les modèles / les magasins de vecteurs / les canaux de messagerie instantanée",
      createOwnKB:
        "Créer et modifier ses propres bases de connaissances et agents",
      readAll: "Lire le contenu du workspace",
    },
    columns: {
      member: "Nom et e-mail",
      role: "Rôle",
      joinedAt: "Joins le",
      operations: "Actions",
    },
    role: {
      owner: "Propriétaire",
      admin: "Admin",
      contributor: "Contributeur",
      viewer: "Observateur",
    },
    add: {
      button: "Révoquer",
      dialogTitle: "Générer un lien d\\\'invitation partagé",
      emailLabel: "E-mail",
      emailPlaceholder: "invitee{\\\'@\\\'}example.com",
      roleLabel: "Rôle",
    },
    remove: {
      button: "Révoquer",
      confirmBody:
        "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
      confirm: "Révoquer",
      success: "Invitation révoquée.",
    },
    leave: {
      confirmTitle: "Quitter ce workspace?",
      confirmBody:
        "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
      confirm: "Révoquer",
      success: "Invitation révoquée.",
    },
    roleChange: {
      success: "Invitation révoquée.",
    },
    errors: {
      emailRequired: "Email requis",
      emailFormat: "Adresse email invalide",
      roleRequired: "Rôle requis",
      userNotFound:
        "Aucun utilisateur enregistré avec cet email. Demandez-lui de s’inscrire d’abord.",
      lastOwner:
        "Ne peut pas dégrader, retirer ou laisser comme le dernier propriétaire. Promouvoir un autre membre en tant que propriétaire d\'abord.",
      notFound: "Inscription non trouvée.",
      invalidRole:
        "Le rôle doit être l’un d’entre propriétaire / administrateur / contributeur / observateur.",
      generic: "Quelque chose s\'est mal passé. Veuillez essayer à nouveau.",
    },
    audit: {
      tabLabel: "Journal d’audit",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      refresh: "Mettre à jour",
      end: "Fin du journal.",
      empty: "Aucune clé API de plateforme",
      forbidden:
        "Vous n’avez pas la permission de consulter le journal d’audit.",
      systemActor: "Système",
      requiredRole: "Rôle requis: {role}",
      columns: {
        time: "Heure",
        actor: "Acteur",
        action: "Action",
        target: "Cible",
        path: "Requête",
        outcome: "Résultat",
      },
      action: {
        "rbac.member_added": "Member added",
        "rbac.member_removed": "Member removed",
        "rbac.member_role_changed": "Role changed",
        "rbac.member_left": "Member left",
        "rbac.access_denied": "Access denied",
        "rbac.invitation_sent": "Invitation sent",
        "rbac.invitation_accepted": "Invitation accepted",
        "rbac.invitation_declined": "Invitation declined",
        "rbac.invitation_revoked": "Invitation revoked",
        "rbac.invitation_expired": "Invitation expired",
      },
      outcome: {
        success: "Invitation révoquée.",
        denied: "Refusé",
      },
      expanded: {
        actorId: "ID de l\'acteur",
        targetUserId: "ID de l\'utilisateur cible",
        targetType: "Type de cible",
        targetId: "ID de la cible",
        details: "Détails bruts",
      },
    },
  },
  tenantInvitation: {
    inboxTooltip: "Afficher les invitations en attente",
    pendingSectionTitle: "Invitations en attente",
    pendingSectionDesc:
      "En attente d\\\'acceptation par l\\\'invité dans son boîte de réception. Expire automatiquement après {days} jours.",
    pendingEmpty: "Aucune invitation en attente.",
    inviteSubmit: "Envoyer une invitation",
    inviteSuccess:
      "Invitation envoyée. Attente de l\\\'acceptation de l\\\'invité.",
    confirmInviteTitle: "Envoyer une invitation?",
    confirmInviteBody:
      "Envoyer une invitation à {email} (rôle: {role}). Ils rejoindront le workspace uniquement après l\\\'acceptation.",
    confirmSend: "Envoyer",
    copyLink: "Copier le lien d\\\'invitation",
    copied: "Copié dans le presse-papiers",
    copyFailed:
      "La copie a échoué; veuillez sélectionner le texte manuellement",
    shareLink: {
      button: "Révoquer",
      cellTitle: "Inviter via lien",
      cellAccepted: "{count} ont rejoint",
      cellEmpty: "Personne n\\\'a rejoint encore",
      dialogTitle: "Générer un lien d\\\'invitation partagé",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      generate: "Générer le lien",
      resultTitle: "Lien d\\\'invitation prêt",
      resultBody:
        "Copiez le lien ci-dessous et partagez-le via tout canal privé. Il est également enregistré dans la liste — vous pouvez le recopier ou le révoquer plus tard.",
      revokeConfirm:
        "La révocation empêchera toute personne qui n\\\'a pas encore s\\\'inscrit d\\\'utiliser ce lien. Générer un nouveau pour le répartager.",
    },
    revoke: {
      button: "Révoquer",
      confirmBody:
        "Après la révocation, {email} ne pourra plus accepter cette invitation. Vous pouvez envoyer une nouvelle si nécessaire.",
      confirm: "Révoquer",
      success: "Invitation révoquée.",
    },
    columns: {
      invitee: "Invité",
      role: "Rôle",
      inviter: "Inviter",
      expiresAt: "Expire",
      status: "Statut",
      operations: "Actions",
    },
    status: {
      pending: "En attente",
      shareLinkActive: "Active",
      accepted: "Accepté",
      declined: "Declined",
      revoked: "Autorisation révoquée",
      expired: "Identifiants WeKnora Cloud expirés",
    },
    myInbox: {
      title: "Permissions des rôles",
      description:
        "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
      empty: "Aucune clé API de plateforme",
      acceptButton: "Accept",
      declineButton: "Decline",
      acceptSuccess: 'Joined "{tenant}".',
      declineSuccess: "Invitation declined.",
      from: "From",
      tenantLabel: "ID de l’espace de travail",
      expiresIn: "Expires: {date}",
      messageLabel: "Message",
    },
    errors: {
      pendingExists: "A pending invitation for this user already exists.",
      alreadyMember: "This user is already an active member of the workspace.",
      notPending: "The invitation is no longer pending.",
      forbidden:
        "Vous n’avez pas la permission de consulter le journal d’audit.",
      notFound: "Inscription non trouvée.",
      generic: "Quelque chose s\'est mal passé. Veuillez essayer à nouveau.",
    },
  },
  platformApiKeys: {
    title: "Permissions des rôles",
    description:
      "Créez des identifiants de plateforme pour l\'automatisation跨工作空间。Utilisez X-Tenant-ID pour les API d\'espace de travail.",
    securityNotice:
      "Platform API keys can target any workspace. Grant only required capabilities; plaintext is shown once.",
    create: "Nouveau point de terminaison",
    createDescription:
      "Les clés de plateforme ne sont pas associées à un espace de travail; les capacités restent limitées à chaque opération.",
    loading: "Chargement...",
    empty: "Aucune clé API de plateforme",
    name: "Nom",
    namePlaceholder: "Par exemple: automatisation des opérations centrales",
    key: "Clé",
    capability: "Capacités",
    capabilityMore: "+{count}",
    viewAllCapabilities: "Afficher toutes les capacités",
    capabilityHint:
      "Les capacités de l’espace de travail s’appliquent au cible X-Tenant-ID; les capacités du système s’appliquent aux API du plan de contrôle.",
    lastUsed: "Dernière utilisation",
    createdAt: "Créé",
    actions: "Actions",
    never: "Jamais",
    systemCapabilityGroup: "Plan de contrôle de la plateforme",
    capabilities: {
      tenantsRead:
        "Lister, rechercher et examiner tous les espaces de travail.",
      tenantsManage:
        "Créer, mettre à jour, supprimer des espaces de travail et appliquer les paramètres globaux des espaces de travail.",
      settingsRead: "Lire les paramètres de runtime de la plateforme.",
      settingsManage:
        "Mettre à jour et réinitialiser les paramètres de runtime de la plateforme.",
      runtimeRead:
        "Examiner les files d’attente des tâches et les détails des tâches.",
      runtimeManage:
        "Reessayer, exécuter, annuler ou supprimer des tâches de runtime.",
      auditRead: "Lire les événements d’audit de la plateforme.",
    },
    capabilityHints: {
      tenantsRead:
        "Lister, rechercher et examiner tous les espaces de travail.",
      tenantsManage:
        "Créer, mettre à jour, supprimer des espaces de travail et appliquer les paramètres globaux des espaces de travail.",
      settingsRead: "Lire les paramètres de runtime de la plateforme.",
      settingsManage:
        "Mettre à jour et réinitialiser les paramètres de runtime de la plateforme.",
      runtimeRead:
        "Examiner les files d’attente des tâches et les détails des tâches.",
      runtimeManage:
        "Reessayer, exécuter, annuler ou supprimer des tâches de runtime.",
      auditRead: "Lire les événements d’audit de la plateforme.",
    },
    createdTitle: "Clé API de plateforme créée",
    createdDescription:
      "Copiez et stockez cette clé maintenant. La valeur complète ne sera pas affichée à nouveau.",
    copy: "Copier la clé",
    copySuccess: "Clé copiée",
    deleteConfirm:
      "Supprimer « {name} »? L’utilisation de cette clé sera immédiatement arrêtée.",
    deleteSuccess: "Clé API de plateforme supprimée",
    deleteFailed: "Échec de la suppression de la clé API de plateforme",
    nameRequired: "Entrez un nom",
    capabilityRequired: "Sélectionnez au moins une capacité",
    loadFailed: "Échec du chargement des clés API de plateforme",
    createFailed: "Échec de la création de la clé API de plateforme",
  },
};
