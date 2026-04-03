import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { configDefaults } from 'vitest/config'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: 'named',
      },
      include: '**/*.svg',
    }),
  ],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/shared/assets'),
    }
  },

  server: {
    proxy: {
      '/api/moviesearch': {
        target: 'https://kinopoiskapiunofficial.tech',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Proxy req.url:', req.url);
            const url = new URL(req.url, 'http://localhost:5173');
            const apiPath = url.searchParams.get('path');
            console.log('API path:', apiPath);
            url.searchParams.delete('path');
            proxyReq.path = `/api/${apiPath}${url.search}`;
            console.log('New proxyReq.path:', proxyReq.path);
            proxyReq.setHeader('X-API-KEY', process.env.KINOPOISK_API_KEY!);
            console.log('API Key set:', !!process.env.KINOPOISK_API_KEY);
          });
        }
      }
    }
  },

  test: {
    globals: true,                    
    environment: 'jsdom',             
    setupFiles: 'vitest.setup.ts',  
    exclude: [...configDefaults.exclude],
  }
})
