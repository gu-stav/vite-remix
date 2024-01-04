import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    remix({
      assetsBuildDirectory: resolve(process.env.ORIGINAL_CWD, 'build'),
      serverBuildPath: resolve(process.env.ORIGINAL_CWD, 'build', 'server', 'index.js'),
    }),
  ],

  resolve: {
    alias: [
      {
        find: '~studio.config.js',
        replacement: `${process.env.ORIGINAL_CWD}/studio.config.js`,
      },
    ],
  },
});
