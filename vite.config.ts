import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features':   path.resolve(__dirname, 'src/features'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles':     path.resolve(__dirname, 'src/styles'),
      '@assets':     path.resolve(__dirname, 'src/assets'),
      '@types':      path.resolve(__dirname, 'src/types'),
    },
  },
})
