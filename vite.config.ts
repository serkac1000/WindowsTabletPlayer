
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['d14120c4-cd40-403e-9cfb-9dd307c4fcb2-00-25ov31pt112a.sisko.replit.dev', 'all']
  }
});
