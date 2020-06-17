// 发起登录请求
export function query(payload) {
  return {
    type: '@login/query',
    payload
  }
}

// export function login(data) {
//   return { type: '@login/save', payload: data }
// }
