// nuxt.config.js文件修改后需要重启才会生效
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal', //默认 universal spa：没有服务器端渲染 universal:同构应用程序
  head: {
    title: 'nuxt-css-special-effects',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/normalize.css',
    'assets/css/global.css',
    'assets/css/iconfont.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/all_components.js', //全局注册组件
    // 这里是引入，如果是普通字符串，就在服务端马上运行
    // 如果是要等到浏览器再运行的代码，可以降配置改为对象，并且路径作为src的值
    // 如果只在浏览器加载的代码，可以添加一个属性ssr:false
    // {src:'@/plugins/localStorage',ssr:false}
    '@/plugins/axios',
    {
      src: '@/plugins/vue-lazyload',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true, //同样是全局注册组件

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://blogserver.showstudy188.com',
    timeout: 15000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // 个性化加载进度条
  loading: {
    color: '#409eff', // 进度条颜色
    height: '2px', //进度条的高度 (在进度条元素的 style 属性上体现)。
    // failedColor: 'red', // 页面加载失败时的颜色
    // throttle: 200, // 在 ms 中，在显示进度条之前等待指定的时间。用于防止条形闪烁。
    // duration: 5000, // 进度条的最大显示时长，单位毫秒。Nuxt.js 假设页面在该时长内加载完毕。
    // continuous: false, // 当加载时间超过 duration 时，保持动画进度条
    // css: true, //设置为false以删除默认进度条样式（并添加自己的样式）
    // rtl: false, //从右到左设置进度条
  },
  // loading:false, //隐藏进度条
}
