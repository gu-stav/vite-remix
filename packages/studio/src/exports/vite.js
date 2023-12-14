import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const cwd = process.cwd();

function setRoot() {
  return {
    name: 'studio-set-root',
    config(config) {
      config.root = join(__dirname, '..', '..');
    }
  }
}

export function studio () {
    return [setRoot(), remix({
      assetsBuildDirectory: join(cwd, 'dist', 'client'),
      serverBuildPath: join(cwd, 'dist', 'server', 'index.js'),
    })];
}
