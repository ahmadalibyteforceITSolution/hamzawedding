import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'configure-m4a-mime',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.m4a')) {
            res.setHeader('Accept-Ranges', 'bytes');
            res.setHeader('Content-Type', 'audio/mp4');
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
})
