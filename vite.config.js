import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rest-countries-app/',
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
})
