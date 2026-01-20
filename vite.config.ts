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
    // IMPORTANT: inline *everything* into index.html
    assetsInlineLimit: 100000000, // large number
    cssCodeSplit: false,          // keep CSS in one place (then inlined)
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // helps prevent extra chunks
      },
    },
  },
})
