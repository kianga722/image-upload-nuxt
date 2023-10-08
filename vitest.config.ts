import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   imports: [
    //     'vue',
    //     'vitest',
    //     'pinia' // if u use pinia
    //   ],
    //   dirs: ['./composables'], // choose whatever folders u want to auto import
    //   dts: true
    // })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  }
})
