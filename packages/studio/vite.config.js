import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [remix()],

  resolve: {
    alias: [
      {
        find: '~studio.config.js',
        replacement: `${process.env.ORIGINAL_CWD}/studio.config.js`
      }
    ]
  }
});
