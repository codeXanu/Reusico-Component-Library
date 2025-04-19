import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isDemoBuild = process.env.BUILD_TARGET === 'demo';
const isLibBuild = process.env.BUILD === 'lib';

export default defineConfig({
  plugins: [react()],
  build: isDemoBuild
    ? {
        outDir: 'demo-dist',  // Output folder for demo build
        emptyOutDir: true,
      }
    : isLibBuild
    ? {
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
        outDir: 'dist-lib',  // Output folder for library build (for npm)
        emptyOutDir: true,
      }
    : {
        outDir: 'dist',  // Default output folder (for Vercel deployment)
        emptyOutDir: true,
      },
});
