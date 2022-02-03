export default {
  target: 'static',

  head: {
    title: 'Udemy Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is an awesome description of my Nuxt app',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  plugins: [],

  components: true,

  buildModules: [],
  
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
};
