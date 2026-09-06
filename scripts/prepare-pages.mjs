import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// GitHub mounts the uploaded artifact at /Concrete already. Vinext places
// prefixed assets in a Concrete subfolder, so expose them at the artifact root.
if (process.env.SITES_BUILD !== 'true') {
  const output = resolve('dist/client');
  cpSync(resolve(output, 'Concrete/_next'), resolve(output, '_next'), { recursive: true });
  writeFileSync(resolve(output, '.nojekyll'), '');
  const html = readFileSync(resolve(output, 'index.html'), 'utf8');
  if (!html.includes('Solid work.')) throw new Error('The portfolio was not prerendered.');
  for (const match of html.matchAll(/(?:src|href)="(\/Concrete\/[^"?#]+)"/g)) {
    const asset = resolve(output, match[1].slice('/Concrete/'.length));
    if (!asset.startsWith(output + '/') && !asset.startsWith(output + '\\')) throw new Error('Invalid asset path');
    if (!existsSync(asset)) throw new Error(`Missing exported asset: ${match[1]}`);
  }
  // Branch-based Pages serves tracked files from main / (root), without a build.
  // Keep source directories intact and copy only the public export into the root.
  for (const name of ['index.html', 'index.rsc', 'favicon.svg', '.nojekyll', '_next']) {
    cpSync(resolve(output, name), resolve(name), { recursive: true });
  }
  console.log('GitHub Pages ready: repository root and dist/client (local assets verified).');
}
