import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

const loadimage = require('~/assets/images/gif/loading.gif')
const errorimage = require('~/assets/images/gif/loading.gif')

Vue.use(VueLazyLoad, {
  preLoad: 1, //预加载高度比例
  error: errorimage, //加载失败时图像的src
  loading: loadimage, //加载时图像的src
  attempt: 2,
  throttleWait: 500
})
