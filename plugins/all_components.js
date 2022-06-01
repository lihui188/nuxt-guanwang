/*
 * @Description: 此文件用来注册全局组件
 * @Author: lihui
 * @Date: 2021-12-25
 * @LastEditTime: 2021-12-25
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'

// 将components中的全部组件批量注册为全局组件
const req = require.context('@/components', true, /index\.vue$/)
req.keys().forEach((val) => {
  const component = req(val).default
  Vue.component(component.name, component)
})
// 手动注册
// import LayoutHead from '@/components/layouts_head.vue'
// Vue.component('LayoutHead', LayoutHead)
