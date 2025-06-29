import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock'

// 👇 新增：自动引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),

    // 👇 自动引入 Composition API & Element Plus 组件
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts', // 可选，自动生成类型定义文件
    }),

    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts', // 可选，自动生成类型定义文件
    }),

    viteMockServe({
      mockPath: 'mock',
      enable: true,
      watchFiles: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
