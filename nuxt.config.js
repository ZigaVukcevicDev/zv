import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'zv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    '@nuxt/content',
    // '@nuxtjs/prismic',
  ],

  // Prismic settings
  // prismic: {
  //   endpoint: 'https://zv-prismic.cdn.prismic.io/api/v2',
  //   linkResolver: '@/plugins/link-resolver',
  //   htmlSerializer: '@/plugins/html-serializer',
  // },

  // Chakra settings
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet: { faExternalLinkAlt },
    },
  },

  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Netlify reads a 404.html, Nuxt will load as an SPA
  generate: {
    fallback: '404.html',
  },
}
