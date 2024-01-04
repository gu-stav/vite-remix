import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default {
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    target: 'esnext',
  },

  plugins: [react(), dts()],
};
