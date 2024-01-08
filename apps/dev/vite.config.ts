import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { studio, registerStudio } from 'unding-studio-remix/vite';

export default defineConfig({
  plugins: [remix(registerStudio()), studio(), tsconfigPaths()],
});
