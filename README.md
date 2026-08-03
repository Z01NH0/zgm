# ZOINHO GAMES

Portal estático para reunir os jogos da ZOINHO GAMES.

## Como testar

Abra `index.html` diretamente ou rode um servidor local:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicar na Vercel

1. Envie esta pasta para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. Framework Preset: `Other`.
4. Não é necessário comando de build.
5. Output Directory: deixe vazio.

## Estrutura

- `index.html`: conteúdo e estrutura principal.
- `styles.css`: temas, responsividade e visual.
- `app.js`: filtros, busca, idioma, configurações e modais.
- `assets/favicon.svg`: ícone do site.
- `vercel.json`: configuração básica de publicação e cabeçalhos.

As preferências de tema e idioma são salvas no `localStorage` do navegador.
