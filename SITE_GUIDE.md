# Site Guide

This file is the single place for the routine procedures used to develop, update, and deploy the portfolio.

## Run Locally

1. Install Node.js LTS.
2. From the repository root, run `npm install`.
3. Run `npm start` and open `http://localhost:3000`.
4. Run `npm test -- --watchAll=false` for a one-shot test run, or `npm run build` to verify a production build.

## Update Portfolio Content

- Shared name, contact details, social links, education, certifications, and resume paths: `src/data/shared/personal.js`.
- Developer content: `src/data/developer/`.
- SOC / cybersecurity content: `src/data/soc/`.
- Design projects and categories: `src/data/design/` and `src/utils/designCategories.js`.
- Design Cloudinary setup and image collection tags: `src/utils/cloudinary.js` and `src/data/design/collections.js`.
- Page structure: `src/pages/` and the corresponding feature components in `src/components/`.
- Shared contact form and Web3Forms endpoint: `src/components/common/ContactSection.js`. The Web3Forms access key is sent from the browser and is visible in the built frontend; use the provider's dashboard restrictions and spam protections for production.

## SEO And Public URLs

- Per-route titles and descriptions are set in each page through `Helmet` from `src/components/common/Helmet.js`.
- The base title, description, social preview defaults, favicon, and manifest links are in `public/index.html`.
- Before launch, replace every `https://example.com` in `public/sitemap.xml` and `public/robots.txt` with the exact canonical production domain. Keep the sitemap limited to the canonical public routes: `/`, `/developer`, `/soc`, and `/design`.
- Verify the deployed `https://YOUR_DOMAIN/robots.txt` and `https://YOUR_DOMAIN/sitemap.xml` are reachable after release.

## Privacy Notice

The site does not currently load analytics or advertising trackers. The notice in `src/components/common/CookieConsent.js` describes browser storage used for the theme and remembered notice acknowledgement. If analytics or other non-essential storage is introduced, add a real consent choice and gate those scripts until consent; do not describe the current notice as consent for trackers.

## Deploy To Vercel

1. Push the repository to the Git provider connected to Vercel.
2. Import the repository in Vercel. Use the detected Create React App defaults; the production build command is `npm run build` and the output directory is `build`.
3. Add the production domain in Vercel and wait for its DNS and TLS status to become valid.
4. Replace the sitemap and robots placeholder domain, commit, and deploy again.
5. Check each portfolio route directly in a fresh browser session, then verify the canonical metadata, privacy notice, contact form configuration, and sitemap/robots URLs.

`vercel.json` routes browser requests back to the React entry point so direct loads and refreshes on portfolio routes work.
