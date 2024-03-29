import axios from "axios"
import { Toast } from 'antd-mobile'

axios.defaults.baseURL = "http://127.0.0.1:8086/"

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    
    if (config.url!=='users/login' && config.url !== 'homes/swipe') {
      config.headers['Authorization'] = localStorage.getItem('token')
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default axios