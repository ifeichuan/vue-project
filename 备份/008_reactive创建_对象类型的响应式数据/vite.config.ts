import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSteupExtend from "vite-plugin-vue-setup-extend"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSteupExtend(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
