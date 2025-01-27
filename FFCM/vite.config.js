import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, 'src/components/layout')
      },
      {
        find: '@css',
        replacement: path.resolve(__dirname, 'src/css')
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/images')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      }
    ]
  },
  server: {
    proxy: {
      '/php': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/php/, '/FFCM/src/php')
      }
    }
  }
})
