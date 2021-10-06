module.exports = {
  target: 'static',
  env: {
    contentFile: process.env.CONTENT_FILE || 'english.md',
    facebookAppId: process.env.FACEBOOK_APP_ID || '',
    gaCode: process.env.GA_CODE || 'UA-3814032-9'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.TITLE || 'Make a One Year 2 Win photo frame',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We only have One Year to re-elect Gov. Evers and replace Ron Johnson! Upload your framed profile pic, help spread the word, & volunteer with WisDems today!' },
      { property: 'og:title', content: 'Make a One Year 2 Win photo frame' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'wisde.ms' },
      { property: 'og:image', content: '/meta.png' },
      { property: 'og:description', content: 'We only have One Year to re-elect Gov. Evers and replace Ron Johnson! Upload your framed profile pic, help spread the word, & volunteer with WisDems today!' },
      { property: 'fb:app_id', content: process.env.FACEBOOK_APP_ID },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@WisDems' }
    ],
    link: [
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2a99d8' },
  /*
  ** Include css not in components
  */
  css: [
    { src: 'croppie/croppie.css' },
    { src: 'assets/main.css' },
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'sass' }
  ],
  cssSourceMap: false,
  plugins: [
    { src: '~plugins/modernizr.js', ssr: false },
    { src: '~plugins/facebook.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],
  generate: {
    routes: [
      '/about',
      '/privacy'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'marked',
      'croppie',
      'clipboard',
      'exif-js',
      'downloadjs',
      'axios'
    ],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.module.rules.push({
        test: /\.md$/,
        loaders: ['raw-loader', 'front-matter-loader']
      });
    }
  }
};
