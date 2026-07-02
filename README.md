# Jared Clayborn — Engineering Portfolio

A modern portfolio site showcasing case studies, engineering talks, and executable documentation. Built with Next.js, React, and TypeScript for fast, accessible web experiences.

## About

I'm a senior software engineer focused on designing and scaling SaaS and enterprise web applications. My work centers on reliability, maintainability, and long-term impact under real-world constraints.

**Currently:** Frontend engineer at Avero, Inc., working on data visualization, reusable components, and flexible filtering systems that help operators move from high-level insights to actionable details.

**Focus areas:**
- Data visualization & interactive tables
- Reusable component systems
- Architecture that grows without becoming harder to change
- Unblocking teammates through thoughtful design

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16+ with App Router
- **Language:** TypeScript
- **Styling:** CSS modules + global styles with design tokens
- **Deployment:** Static export to GitHub Pages
- **Hosting:** GitHub Pages via automated workflow

## Deployment

### GitHub Pages Static Export

This site builds as a static export for hosting on GitHub Pages.

#### Local Build & Preview

```bash
# Build and export
npm run predeploy

# Preview locally
npx http-server out -p 3000
# Then open http://localhost:3000
```

#### Automated Deployment

Push to `main` branch — the GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml` will:
1. Build the Next.js app
2. Run `next export` to generate static files
3. Publish the `out/` folder to the `gh-pages` branch

#### Configuration

`next.config.js` automatically sets `basePath` and `assetPrefix` when `GITHUB_PAGES=true` is present during build.

### Public Assets

Static files (images, PDFs, downloads) go in the `public/` folder:
```
public/
├── Jared_Clayborn_Senior_Software_Engineer.pdf  # Resume
├── images/
└── ...
```

## Important Notes

- **Static Export Compatibility:** The app uses Next.js App Router with static export. Avoid server-only features (like database queries) in pages/components. All dynamic rendering must be client-side.
- **Client-Side Cookies:** Cookie access via `document.cookie` requires `'use client'` directive. Use `await cookies()` from `next/headers` only in Server Components.
- **Lowercase URLs:** Use lowercase and hyphens in folder names for predictable, SEO-friendly paths.

## License

- **Source code:** MIT License
- **Written content, case studies, personal materials:** © Jared Clayborn. All rights reserved unless otherwise noted.

