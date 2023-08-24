import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nitro from '@analogjs/vite-plugin-nitro'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist/client',
  },
  plugins: [
    react(),
    nitro({
      entryServer: 'src/main.server.tsx',
      prerender: {
        routes: ['/', '/about']
      },
      ssr: true,
    }, { serveStatic: false })
  ],
});
