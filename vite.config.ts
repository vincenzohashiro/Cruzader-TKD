import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   
  base: '/Cruzader-TKD/' // Set the base path for deployment
  // If you are deploying to a custom domain, you might not need this line
  // base: 'https://yourdomain.com/Cruzader-TKD/'
})
