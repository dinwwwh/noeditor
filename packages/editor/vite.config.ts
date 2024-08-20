import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@editor': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys((pkg as any).dependencies || {}), ...Object.keys((pkg as any).peerDependencies || {})],
    },
  },
  plugins: [
    dts({
      compilerOptions: {
        types: ['vite/client'],
      },
      exclude: ['**/*.test.*', '**/__tests__/**'],
    }),
    vanillaExtractPlugin(),
    react(),
  ],
})
