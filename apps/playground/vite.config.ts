import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@playground': path.resolve(__dirname, './src'),
      '@noeditor/editor': path.resolve(__dirname, '../../packages/editor/src'),
      '@editor': path.resolve(__dirname, '../../packages/editor/src'),
    },
  },
  plugins: [vanillaExtractPlugin(), react()],
})
