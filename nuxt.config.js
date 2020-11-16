
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'ポケモンタイプ相性チェッカー',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ポケモンタイプ相性を簡単にチェック' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ポケモンタイプ相性チェッカー' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://poketype.turai.work/' },
      { hid: 'og:title', property: 'og:title', content: 'ポケモンタイプ相性チェッカー' },
      { hid: 'og:description', property: 'og:description', content: 'ポケモンタイプ相性を簡単にチェック' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/ogp.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
