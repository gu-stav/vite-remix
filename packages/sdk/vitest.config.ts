/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/_tests/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
});
