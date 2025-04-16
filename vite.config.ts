import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Redev/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // для работы с Less в Ant Design
        modifyVars: {
          '@primary-color': '#1890ff',
        },
      },
    },
  },
})