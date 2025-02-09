// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  css: ['~/assets/css/main.scss'],
  components: [
    {
      path: '~/components',
    },
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 700], // Define the weights you need
    },
    display: 'swap', // Improves loading performance
  },
});