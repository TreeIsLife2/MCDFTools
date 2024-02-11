import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path';

const tools = ['comparatorStrength', 'genericItemblock'];

const entries = {};
  tools.forEach(tool => (entries[tool] = resolve(`./src/tools/${tool}/main.js`)));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  entry: {
    core: './src/load.js',
    ...entries
  },
  
  build: {
    target: 'es2015',
    
    rollupOptions: {
      input: { ...entries },      
      output: {
        dir: resolve(__dirname, 'dist'),        
        entryFileNames: `assets/Gadget-[name].js`,
        chunkFileNames: `assets/Gadget-[name].js`,
        assetFileNames: `assets/Gadget-[name].[ext]`,
        manualChunks: undefined
      }
    },


  },

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015'
    }
  },

  clean: true
})
