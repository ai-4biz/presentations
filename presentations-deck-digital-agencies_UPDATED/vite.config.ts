import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false, // אם הפורט תפוס, יעבור לפורט אחר אוטומטית
    open: true,
    host: true // מאפשר גישה מרשת מקומית
  }
})
