## License

The source code for this site is licensed under the MIT License.

All written content, case studies, and personal materials are © Jared Clayborn.
All rights reserved unless otherwise noted.

## GitHub Pages / Static Export

This project is configured to support a static export and deployment to GitHub Pages.

- Local convenience scripts are available in `package.json`:

```bash
# Build + export for GitHub Pages (sets GITHUB_PAGES=true so basePath is applied)
npm run predeploy
# Publish `out` to the `gh-pages` branch
npm run deploy
```

- The workflow that runs on push to `main` is at [.github/workflows/deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml). It builds, runs `next export`, and publishes the `out` folder to the `gh-pages` branch.

- `next.config.js` will set `basePath` and `assetPrefix` automatically when `GITHUB_PAGES=true` is present during the build. See [next.config.js](next.config.js).

**Local static preview**

After running `npm run build` and `npm run export` you can preview the exported site:

```bash
npx http-server out -p 3000
# then open http://localhost:3000
```

**Public assets**

Place static files (images, PDFs) in the `public` folder so they are available in the exported site. For example, the Contact page expects the resume at:

```
public/Jared_Clayborn_Senior_Software_Engineer.pdf
```

**Notes & compatibility**

- The app uses the App Router (`app/`). Static export requires pages/components to avoid server-only features or dynamic server rendering. Ensure features you rely on are supported by `next export`.
- Route folder names map directly to URLs. Use lowercase and hyphens for predictable paths (for example, `app/case-studies` → `/case-studies`).
- Navigation active state uses `usePathname` from `next/navigation`; style the `.active` class in `app/globals.css`.

If you'd like, I can add a placeholder PDF to `public` for testing, add a deploy badge, or run a local export and preview for you.
