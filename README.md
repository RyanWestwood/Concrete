# Concrete

Ethans Concrete portfolio, built with React and Vinext.

## GitHub Pages

Use the existing workflow with:

- Install: `npm ci`
- Build: `npm run build`
- Publish directory: `dist/client`
- Site URL: `https://RyanWestwood.github.io/Concrete/`

The default build exports static HTML and assets; no server or Cloudflare runtime is needed. Asset URLs use the `/Concrete` repository path. The build verifies that the home page and its local assets exist and adds `.nojekyll` for branch-based publishing. No new workflow is included.

For local development, run `npm run dev`. For the original Sites server build, set `SITES_BUILD=true` before running `npm run build`.
