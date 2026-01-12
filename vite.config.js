import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain 'pfranccino.dev' serves from root, so we remove the repo base path
  base: '/',
})
