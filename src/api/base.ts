import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/', // 替换为你的API基础URL
  timeout: 10000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 统一错误处理
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = '请求失败'
    if (error.response) {
      // 后端有响应
      message = error.response.data?.message || `服务端错误(${error.response.status})`
    } else if (error.request) {
      // 请求已发出但无响应
      message = '服务器无响应，请检查网络'
    } else if (error.message) {
      // 其他错误
      message = error.message
    }
    // 可选：全局提示
    // window.$message?.error?.(message)
    return Promise.reject(new Error(message))
  },
)

export default api
