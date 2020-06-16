import axios from 'axios'

// 路由拦截
const request = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 60000
})

// 请求拦截
request.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

// 响应拦截
request.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default request
