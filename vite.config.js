import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Aurum-Time/'  // <-- EXACT repo name (caps included)
})
