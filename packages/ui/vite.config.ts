import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default {
  build: {
    lib: {
      entry: {},
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: (id) => !id.startsWith('.') && !id.startsWith('/'),
      input: [
        './src/index.ts'
      ]
    },
    target: 'esnext',
  },

  plugins: [vanillaExtractPlugin(), react(), dts()]
};
