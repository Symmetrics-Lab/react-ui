/// <reference types="vitest" />
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './tailwind.config.cjs'),
          dest: './',
       },
      ],
    }),
  ],
  test: {
    globals: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@symlab/react-ui',
      formats: ['umd', 'cjs', 'es'],
      fileName: (format) => `symlab-react-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom' , '@heroicons/react', '@tailwindcss/forms'],
      output: {
       globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    } ,
  },
});
