# Paolo Sotelo Portfolio

A public, interactive portfolio for Paolo Sotelo. It presents client websites, products, AI workflows, automation, and practical tools through concise case studies and safe browser-only demonstrations.

- Live site: <https://paolo-sotelo-portfolio.vercel.app>
- Source: <https://github.com/Paolo562982/paolo-sotelo-portfolio>

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Verification

```bash
npm run check
npm run test:e2e
```

The end-to-end suite reuses an existing local server when one is running. Installing a Playwright browser is a separate environment setup step.

## Content and privacy

Project data lives in `src/content/projects.ts`. Every published entry must be explicitly marked `publish: true`; tests reject known private terms and local filesystem paths. Interactive previews are synthetic and do not call APIs or write outside component state.

Review biography copy, client claims, project outcomes, links, and media before publishing content changes. Do not add credentials or real environment files.

## GitHub and Vercel

The repository is connected to Vercel through Git integration. Feature branches receive preview deployments; updates to `main` become production. Preview environments are marked no-index, while production exposes the sitemap.
