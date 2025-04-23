
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['5c8a5273-e6fb-41c4-81bf-fa21d1383a64-00-3voonwdojc9zi.pike.replit.dev', 'all']
  }
});
