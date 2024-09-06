import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  ssr: {
    noExternal: [], // Packages that should be bundled if used in source code (e.g. packages export typescripts)
  },
  build: {
    ssr: true, // Prevent bundle all dependencies (except linked dependencies, and above noExternal list) and make it usable in node.js
    target: 'es2022',
    lib: {
      entry: [path.resolve(__dirname, './src/index.ts')],
      formats: ['es'],
    },
  },
  plugins: [
    tsconfigPaths(),
    dts({ tsconfigPath: path.resolve(__dirname, './tsconfig.app.json') }),
    vanillaExtractPlugin(),
    react(),
  ],
})
