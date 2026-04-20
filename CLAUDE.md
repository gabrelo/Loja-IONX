# Loja IONX

Landing page de loja de roupas streetwear. Dark theme com verde neon (#c8ff00).

## Stack
- React 19 + Vite
- CSS Modules (sem Tailwind, sem styled-components)
- Vitest + Testing Library para testes

## Estrutura
```
src/
  components/    # Um arquivo .jsx + .module.css por componente
  test/          # Arquivos .test.jsx
  App.jsx        # Importa e organiza todos os componentes
  index.css      # Variáveis CSS globais (cores, fontes)
```

## Variáveis CSS globais (index.css)
- `--bg` #0a0a0a — fundo principal
- `--surface` #111111 — cards e superfícies
- `--border` #1e1e1e — bordas
- `--accent` #c8ff00 — cor de destaque (verde neon)
- `--text` #f0f0f0 — texto principal
- `--muted` #666666 — texto secundário

## Componentes existentes
- `Navbar` — sticky, links para seções, botão Shop Now
- `Hero` — título principal, CTA, fundo com blob
- `Promo` — banner de desconto 40% OFF
- `Products` — grid 3 colunas, 6 produtos hardcoded
- `About` — texto + grid de stats (500+, 12 países...)
- `Contact` — formulário com estado (sent/not sent)
- `Footer` — logo + copyright

## Convenções
- Componentes em PascalCase
- CSS sempre em módulo separado: `Componente.module.css`
- Nunca usar CSS inline
- Ícones: sem biblioteca, usar texto/emoji se necessário

## Testes
- Rodar antes de qualquer commit: `npm test`
- Cada componente novo deve ter um arquivo `.test.jsx`
- Testes de regressão em Products: sempre verificar quantidade e preços

## Scripts
```bash
npm run dev      # servidor local (localhost:5173)
npm test         # roda todos os testes uma vez
npm run test:watch  # testes em modo watch (re-roda ao salvar)
npm run build    # build de produção
```

## CI/CD
- Push na main dispara o pipeline automaticamente
- Pipeline: instala → testa → build → deploy GitHub Pages
- Se os testes falharem, o deploy NÃO acontece
