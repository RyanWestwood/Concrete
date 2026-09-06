# Concrete

Ethans Concrete portfolio, built with React and Vinext.

## GitHub Pages

GitHub Pages settings: **Deploy from a branch → main → / (root)**.

The built site is committed at the repository root, so no custom workflow is needed.
After editing the source:

- Install: `npm ci`
- Build: `npm run build`
- Commit and push the updated source and generated root files (`index.html`, `index.rsc`, `_next`, `favicon.svg`, `.nojekyll`).
- Site URL: `https://RyanWestwood.github.io/Concrete/`

The default build exports static HTML and assets to `dist/client` and copies the public files to the repository root. No server or Cloudflare runtime is needed. Asset URLs use the `/Concrete` repository path. The build verifies that the home page and its local assets exist and adds `.nojekyll` for branch-based publishing.

For local development, run `npm run dev`. For the original Sites server build, set `SITES_BUILD=true` before running `npm run build`.
