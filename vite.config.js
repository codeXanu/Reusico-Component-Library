import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const isLib = mode === 'lib'; // use "vite build --mode lib" for NPM build

  return {
    plugins: [react()],
    build: isLib
      ? {
          lib: {
            entry: path.resolve(__dirname, 'src/components/index.js'),
            name: 'ReusicoComponentLibrary',
            fileName: (format) => `reusico-component-library.${format}.js`,
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
        }
      : {
          outDir: 'dist', // for demo site build (used by Vercel)
        },
  };
});




