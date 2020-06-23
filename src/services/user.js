import request from '~/utils/request'

// 登录
export const login = async (username, password) => request.post('/login', { username, password })

// 注册
export const register = async () => request('/register')

// 获取验证码
export const getCode = async data => request.post('/api/getSms', data)
