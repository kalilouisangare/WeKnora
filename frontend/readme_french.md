## Description

This PR adds complete French (fr-FR) translation support to WeKnora, enabling full French localization of the interface.

## Changes

### New Files
- `frontend/src/i18n/locales/fr-FR.ts` - Complete French translation (7000+ lines)
- `frontend/src/i18n/tdesign/fr_FR.ts` - Custom TDesign French locale (TDesign Vue Next doesn't provide official French support)

### Modified Files
- `frontend/src/i18n/index.ts` - Import and export fr-FR messages
- `frontend/src/i18n/resolveDefaultLocale.ts` - Add fr-FR to SUPPORTED_LOCALES
- `frontend/src/i18n/embed.ts` - Add fr-FR support
- `frontend/src/i18n/localeKeyAudit.ts` - Add French to locale order
- `frontend/src/api/embed/index.ts` - Add fr-FR to EmbedLocaleTag type
- `frontend/src/App.vue` - Load TDesign French configuration
- `frontend/src/views/auth/Login.vue` - Add French to login language selector
- `frontend/src/views/settings/GeneralSettings.vue` - Add French to settings language selector
- `frontend/src/components/AgentEmbedChannelPanel.vue` - Add French option
- All existing locale files (en-US, zh-CN, ja-JP, ko-KR, ru-RU) - Added `frFR: 'Français'` key

## Translation Method

- **Tool**: [TranslateBooksWithLLMs](https://github.com/hydropix/TranslateBooksWithLLMs) running in Docker
- **Model**: `qwen2.5-coder:7b` via Ollama (local GPU inference)
- **Post-processing**: Custom Python scripts to fix TypeScript syntax (apostrophes, indentation)
- **Quality**: Enabled refinement pass for natural French phrasing

## Testing

- [x] Frontend builds successfully (Vite + esbuild)
- [x] No TypeScript compilation errors
- [x] Language selector shows French option in Login page
- [x] Language selector shows French option in Settings page
- [x] Interface fully switches to French
- [x] TDesign components (calendar, pagination, upload) display in French
- [x] All i18n keys properly translated

## Notes

- TDesign Vue Next library doesn't provide an official French locale, so a custom `tdesign/fr_FR.ts` was created based on the English locale
- Apostrophes in French translations are properly escaped to avoid breaking TypeScript syntax
- All translation keys from the original English file have been preserved

## Screenshots

![Interface en français](screenshot-link-here)
