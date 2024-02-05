// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/eslint-module'
  ],
  css: ['~/assets/css/main.scss'],
  components: [
    {
      path: '~/components',
    },
  ],
});
