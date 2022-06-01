/*
 * @Description: axios的请求、响应拦截
 * @Author: lihui
 * @Date: 2021-12-25
 * @LastEditTime: 2021-12-25
 * @LastEditors: Please set LastEditors
 */
export default function ({ $axios, redirect }) {
  $axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.interceptors.response.use(
    (response) => {
      const res = response.data
      if (res.code === 200) {
        return res
      } else {
        redirect('/404')
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    },
    (error) => {
      console.log('err' + error)

      return Promise.reject(error)
    }
  )

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    } else if (code === 500) {
      redirect('/500')
    }
  })
}
