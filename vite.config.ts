import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // Fixed at build time so the prerendered HTML and the hydrating client
    // always print the same year (a render-time `new Date()` would mismatch
    // from New Year until the next deploy).
    __BUILD_YEAR__: JSON.stringify(new Date().getUTCFullYear()),
  },
})
