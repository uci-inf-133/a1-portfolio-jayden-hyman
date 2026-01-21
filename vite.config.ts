import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// export default defineConfig({
//   plugins: [react()],
// })

// This is used for canvas submissions
export default defineConfig({
  experimental: {
    enableNativePlugin: false,
  },
  plugins: [react(), viteSingleFile()],
  base: './',

  build: {
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
