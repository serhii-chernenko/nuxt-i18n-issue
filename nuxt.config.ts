// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  devServer: {
    port: 3030
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    // locales: ['en', 'ua'],
  }
})