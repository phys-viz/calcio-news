# Abruzzo Calcio News — Chieti FC & Pescara Calcio

A simple static news site covering Chieti FC 1922 and Delfino Pescara 1936, with news posts in Italian + English translation, and a standings page for both clubs' leagues.

## Files

- `index.html` — homepage, all news, filterable by team
- `chieti.html` — Chieti FC news only
- `pescara.html` — Pescara Calcio news only
- `standings.html` — league status / standings links for both clubs
- `assets/style.css` — styling
- `assets/script.js` — team filter buttons

No build step, no dependencies — just plain HTML/CSS/JS.

## Publish it on GitHub Pages

1. Create a new repository on GitHub (e.g. `calcio-news`).
2. Upload all the files in this folder to the repo, keeping the `assets/` folder structure intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Adding a new news post

Each news item is a `<article class="news-card" data-team="chieti">` (or `data-team="pescara"`) block inside `index.html`'s `<section class="news-feed">`. To add one, copy an existing `<article>...</article>` block and edit:

- the date link (`news-date`) — text and `href` to the source article
- the `team-tag` (chieti or pescara)
- the headline (`news-title`)
- the Italian paragraph and the English paragraph
- the `source-link` at the bottom

Then paste the same block into `chieti.html` or `pescara.html` (whichever team it belongs to) so the per-team pages stay in sync with the homepage.

Just ask Claude to pull the latest news and update the HTML for you any time — it can search the web, write the bilingual copy, and edit these files directly.
