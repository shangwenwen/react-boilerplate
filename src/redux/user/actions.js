// 发起登录请求
export function queryUser() {
  return { type: '@users/query' }
}

export function saveUser(data) {
  return { type: '@users/save', payload: data }
}
