import request from '~/utils/request'

// 登录
export const login = async (username, password) => request('/login', { username, password })

// 注册
export const register = async () => request('/register')

// 获取验证码
export const getCode = async () => request('/getCode')

export const getUser = async userId => request(`/users/${userId}`)
