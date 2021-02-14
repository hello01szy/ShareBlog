import axios from 'axios'

var instance = axios.create()

instance.defaults.timeout = 5000
// post请求的请求头内需要设置的内容
instance.defaults.headers.post['Content-Type'] = 'application/json'
// 请求拦截器:post传参序列化
instance.interceptors.request.use((param) => {
  if (param.method === 'post') {
    console.log('post请求')
  } else {
    console.log(param.method)
  }
  return param
}, (error) => {
  console.log('参数错误')
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(res)
  }
},
error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 401:
        console.log('401')
        break
      case 403:
        console.log('403')
        break
      case 404:
        console.log('404')
        break
      default:
        console.log('other error')
    }
  }
  return Promise.reject(error.response)
})

export default instance
