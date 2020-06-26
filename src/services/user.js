import request from '~/utils/request'

// 登录
export const login = async data => request.post('/api/login', data)

// 注册
export const register = async data => request.post('/api/register', data)

// 获取验证码
export const code = async data => request.post('/api/getSms', data)
