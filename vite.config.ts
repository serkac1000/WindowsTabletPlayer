
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['d7b41ce5-0de1-42de-8367-45a0e92269d8-00-3w1042c2l7vfc.pike.replit.dev', 'all']
  }
});
