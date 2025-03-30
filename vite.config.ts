import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/campus-gathering-grid/', // Must match your repo name exactly
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist', // Must match GitHub Actions publish_dir
      emptyOutDir: true, // Clears the directory before build
      sourcemap: mode === 'development', // Sourcemaps only in dev
    },
    preview: {
      port: 8080, // Match dev server port
    }
  }
})
