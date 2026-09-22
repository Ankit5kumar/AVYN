# Two Ledgers — portfolio site starter

A Next.js 16 (App Router) + Tailwind CSS starter for a combined
web-development + finance/CA services studio, built to deploy free on
Netlify with a self-hosted, non-generic design.

## Before you launch: rename everything

Open `lib/config.ts` — that's the only file you need to edit to change:
- Studio name, tagline, location
- Email, phone, social links
- The four services listed
- The three-step process copy

Everything else (Hero, Services, Process, About, Contact) pulls from
that file automatically.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Netlify (free)

1. Push this folder to a new GitHub repo.
2. On netlify.com → "Add new site" → "Import an existing project" →
   pick the repo.
3. Netlify auto-detects Next.js. Build command: `npm run build`.
   Publish directory: leave as Netlify's Next.js plugin default.
4. Once deployed, go to Site settings → Domain management → Add a
   custom domain, and point your existing domain's DNS to Netlify as
   instructed there. SSL is issued automatically within a few minutes.

## Design notes

- Fonts (Source Serif 4 + IBM Plex Sans) are self-hosted via
  `@fontsource`, so there's no runtime dependency on Google's font
  CDN — one less thing that can break or slow the page down.
- Colors, spacing and type scale live in `tailwind.config.ts`.
- The layout intentionally avoids rounded "SaaS card" styling in favor
  of a ledger/ruled-paper structure — hairline dividers instead of
  card shadows — to read as grounded and credible rather than
  templated.
