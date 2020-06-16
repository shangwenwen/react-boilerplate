import axios from 'axios'

// 路由拦截
const request = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 60000
})

// request.interceptors.response.use(
//   response => response,
//   error => {
//     let status = 0
//     let message = ''

//     if (error && error.response && error.response.status) {
//       status = error.response.status
//       message = error.response.data.message
//     }

//     if (status === 401) {
//       console.log('api error')
//     }

//     return Promise.reject({ ...error, status, message })
//   }
// )

export default request
