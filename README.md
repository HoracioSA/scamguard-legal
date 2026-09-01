# ScamGuard Legal

Next.js site (App Router) with two pages — `/terms` and `/privacy` — rendering
ScamGuard's Terms and Conditions and Privacy Policy from Markdown, plus a `/` page
linking to both. Built to deploy standalone on Vercel.

**Both documents are drafts** — see the visible banner on each page
(`components/DraftNotice.tsx`). They still contain bracketed placeholders (e.g.
`[LEGAL ENTITY NAME]`) and have not been reviewed by a lawyer. Don't remove that
banner or link this site from the app/App Store listing until the underlying
documents are actually finished.

## Content lives in `content/`, not in the page components

`content/terms-and-conditions.md` and `content/privacy-policy.md` are **copies** of
the documents originally written in `../scamguard-mobile/legal/`. This project
doesn't read them from that shared location — it has its own copies, so it builds
and deploys standalone (e.g. as its own Vercel project pointed at just this
directory) without depending on the rest of the monorepo being present.

**This means there are now two copies of each document.** If you edit the legal
text, update both `../scamguard-mobile/legal/*.md` and `./content/*.md`, or decide
one location is canonical and delete the other.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

**Option A — this directory is its own git repo:**

```bash
npx vercel        # first deploy, follow the prompts
npx vercel --prod # subsequent production deploys
```

**Option B — this directory lives inside a larger monorepo** (e.g. committed
alongside `../scamguard-mobile` and `../server` in one repo): when importing the
repo in the Vercel dashboard, set **Root Directory** to `legal-site`. Vercel then
runs `npm install` / `npm run build` from inside this folder as if it were the only
thing in the repo.

Either way, Vercel auto-detects Next.js — no `vercel.json` is needed for this
project.
