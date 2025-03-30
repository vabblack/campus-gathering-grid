import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ mode }) => ({
  base: '/campus-gathering-grid/', // Must be EXACTLY your repo name
  server: {
    host: true, // Changed from '::' for better compatibility
    port: 8080,
    strictPort: true // Ensure port is always 8080
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'index.html'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode === 'development',
    rollupOptions: { // NEW: Critical for proper asset handling
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  preview: {
    port: 8080,
    host: true // NEW: Allows external access
  }
}))
