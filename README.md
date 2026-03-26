# Tonderai Kawere - Portfolio

Live site:

https://tonde-portfolio.vercel.app/

Portfolio website built with Next.js (App Router) and Tailwind CSS.

## Ownership & Attribution

Unless otherwise noted, the source code in this repository is authored by and copyright (c) Tonderai Kawere.

This portfolio may:

- Reference or link to third-party services (e.g. GitHub, LinkedIn, deployed demos).
- Showcase selected work done for clients/employers/organizations.

Project ownership and usage rights may vary per entry (e.g. personal projects vs client/employer work). Any third-party trademarks, brand names, logos, screenshots, or other materials remain the property of their respective owners.

## What You Own vs What You Showcase

This repository is your portfolio website codebase. You own the original code you wrote in this repo.

The portfolio "Projects" section may include:

- Personal/open-source projects you created
- Work delivered for clients/employers/organizations (often subject to separate agreements)

Because of that, the portfolio should be read as a showcase of experience and outcomes, not a blanket claim that you own the intellectual property for every external project linked from the site.

## License Scope (MIT)

This repository is licensed under the MIT license (see `LICENSE`). In plain terms:

- The MIT license applies to the software in this repository.
- You still retain copyright as the author.
- Third-party materials (for example: third-party logos, trademarks, and any external project code not contained in this repository) are not granted to you by the MIT license and remain with their respective owners.

## Features

- Responsive single-page layout (Hero, About, Projects, Contact)
- CV download link (`/public/Tonderai-Kawere-CV.pdf`)
- Contact form powered by Resend (`/src/app/api/send/route.js`)
- SEO basics via Next.js `metadata` (OpenGraph/Twitter), plus `robots.txt` and `sitemap.xml`
- Web app manifest (`/public/manifest.webmanifest`)
- Light/dark icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` (recommended) and set:

```bash
# Used by the contact form API route
RESEND_API_KEY=your_resend_key
FROM_EMAIL=your_email@domain.com

# Used for canonical URLs, sitemap and metadataBase
NEXT_PUBLIC_SITE_URL=https://tonde-portfolio.vercel.app
```

## License

MIT

## Notes

- If you are deploying to a new domain, update `NEXT_PUBLIC_SITE_URL` so canonical URLs, `sitemap.xml`, and metadata are correct.
- Do not commit secrets (e.g. `RESEND_API_KEY`) to git. Use `.env.local` for local development and environment variables in Vercel for production.

