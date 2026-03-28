// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hermann Witte',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    'nuxt-gtag'
  ],

  css: ['~/assets/css/main.scss'],

  components: [
    {
      path: '~/components',
    },
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    },
    display: 'swap',
  },

  compatibilityDate: '2025-04-09',

  gtag: {
    id: 'G-F9MQXHR2RV',
    initCommands: [
      ['consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        wait_for_update: 500,
      }],
    ],
  }
});