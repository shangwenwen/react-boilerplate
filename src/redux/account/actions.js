// 发起登录请求
export function query(payload) {
  return {
    type: '@login/query',
    payload
  }
}
