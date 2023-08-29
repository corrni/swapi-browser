import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/config': path.resolve(__dirname, './src/config'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/context': path.resolve(__dirname, './src/context'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/layout': path.resolve(__dirname, './src/layout'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
})
