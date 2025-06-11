import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/abstracts/variables" as *; @use "@styles/abstracts/mixins" as *;`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.{test,spec}.{js,mjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      ...configDefaults.exclude,
      'src/vite-env.d.ts',
      '*.config.{js,cjs,mjs,ts,mts,cts,jsx,tsx}',
    ],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        'src/vite-env.d.ts',
        '*.config.{js,cjs,mjs,ts,mts,cts,jsx,tsx}',
      ],
    },
  },
});
