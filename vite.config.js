import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isDev ? '/' : '/temp-react-vite-goit/',
});
