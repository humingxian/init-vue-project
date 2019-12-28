import axios from 'axios'

var instance = axios.create({
  timeout: 10 * 1000
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 发送请求前做点啥
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 返回相应结果前做点啥
  return response.data
}, function (error) {
  // 捕获promise错误
  return Promise.reject(error)
})

export const $get = (url, options) => {
  return instance.get(url, options)
}

export const $post = (url, obj, options) => {
  return instance.post(url, { ...obj }, {
    ...options,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}

export const $postForm = (url, obj, options) => {
  return instance.post(url, { ...obj }, {
    ...options,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}
