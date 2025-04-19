import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isDemoBuild = process.env.BUILD_TARGET === 'demo';

export default defineConfig({
  plugins: [react()],
  build: isDemoBuild
    ? {
        outDir: 'demo-dist',
        emptyOutDir: true,
      }
    : {
        lib: {
          entry: path.resolve(__dirname, 'src/components/index.js'),
          name: 'ReusicoComponentLibrary',
          fileName: (format) =>
            format === 'es'
              ? 'reusico-component-library.esm.js'
              : format === 'cjs'
              ? 'reusico-component-library.cjs.js'
              : `reusico-component-library.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        outDir: 'dist',
        emptyOutDir: true,
      },
});
