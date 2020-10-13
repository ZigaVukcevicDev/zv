import {
  faExternalLinkAlt,
  faVolumeUp,
  faBars,
  faEye,
  faUser,
  faAt,
} from '@fortawesome/free-solid-svg-icons'

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
  css: ['swiper/swiper-bundle.min.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-awesome-swiper.js' },
    { src: '@/plugins/vue-scroll-to.js', mode: 'client' },
    { src: '@/plugins/vue-waypoint.js', mode: 'client' },
  ],

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
    '@nuxtjs/markdownit',
    ['vue-scrollto/nuxt', { duration: 500, offset: -20 }],
  ],

  // Markdownit settings
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    injected: true,
  },

  // Chakra settings
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet: {
        faExternalLinkAlt,
        faVolumeUp,
        faBars,
        faEye,
        faAt,
        faUser,
      },
    },
  },

  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src',
        },
      },
    },

    extend(config) {
      config.module.rules.push({
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
}
