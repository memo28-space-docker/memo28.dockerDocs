/*
 * @Author: @memo28.repo
 * @Date: 2023-12-14 10:39:01
 * @LastEditTime: 2023-12-14 10:56:03
 * @Description: 
 * @FilePath: /docs/router/packages/docs/.vitepress/config/index.ts
 */
import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { sharedConfig } from './shared'
import { zhConfig } from './zh'

export default defineConfig({
  ...sharedConfig,

  base: '/vueRouter',
  locales: {
    root: { label: 'English', lang: 'en-US', link: '/', ...enConfig },
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zhConfig },
    ko: { label: '한국어', lang: 'ko-KR', link: 'https://router.vuejs.kr/' },
    pt: { label: 'Português', lang: 'pt-PT', link: 'https://vue-router-docs-pt.netlify.app/' },
    ru: { label: 'Русский', lang: 'ru-RU', link: 'https://vue-router-ru.netlify.app' },
  },
})
