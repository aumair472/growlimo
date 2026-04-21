import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function spa404FallbackPlugin() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      const fallbackPath = path.join(distDir, '404.html');

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, fallbackPath);
        console.log('[vite] Generated dist/404.html');
      }
    },
  };
}

function createManualChunks(id) {
  if (id.includes('node_modules/react-dom/')) {
    return 'react-dom';
  }

  if (id.includes('node_modules/react/')) {
    return 'react-core';
  }

  if (
    id.includes('node_modules/react-router/') ||
    id.includes('node_modules/react-router-dom/')
  ) {
    return 'router';
  }

  if (id.includes('react-markdown')) {
    return 'markdown-core';
  }

  if (id.includes('remark-gfm') || id.includes('rehype-raw')) {
    return 'markdown-plugins';
  }

  if (id.includes('/src/pages/public/BlogPost.jsx')) {
    return 'blog-post';
  }

  if (
    id.includes('/src/pages/public/Blog.jsx') ||
    id.includes('/src/components/blog/BlogList.jsx') ||
    id.includes('/src/components/blog/BlogItem.jsx')
  ) {
    return 'blog-list';
  }

  if (id.includes('/src/pages/services/CaliforniaService')) {
    return 'service-california-shell';
  }

  if (id.includes('/src/pages/services/TexasService')) {
    return 'service-texas-shell';
  }

  if (id.includes('/src/components/service/')) {
    return 'service-shared';
  }

  if (id.includes('/src/data/services/states/california/general.js')) {
    return 'california-general-data';
  }

  if (id.includes('/src/data/services/states/california/healthcare.js')) {
    return 'california-healthcare-data';
  }

  if (id.includes('/src/data/services/states/california/dentist.js')) {
    return 'california-dentist-data';
  }

  if (id.includes('/src/data/services/states/texas/general.js')) {
    return 'texas-general-data';
  }

  if (id.includes('/src/data/services/states/texas/healthcare.js')) {
    return 'texas-healthcare-data';
  }

  if (id.includes('/src/data/services/states/texas/dentist.js')) {
    return 'texas-dentist-data';
  }

  if (id.includes('axios')) {
    return 'vendor-axios';
  }

  if (id.includes('react-calendly')) {
    return 'vendor-calendly';
  }

  if (id.includes('node_modules')) {
    return 'vendor';
  }

  return undefined;
}

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
    spa404FallbackPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': { target: 'http://localhost:5000', changeOrigin: true, secure: false },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    modulePreload: {
      polyfill: true,
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 450,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: createManualChunks,
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios'],
  },
});
