// 发起登录请求
export function sendCode(payload) {
  return {
    type: '@account/sendCode',
    payload
  }
}

export function sendCodeCountdown(payload) {
  return {
    type: '@account/sendCodeCountdown',
    payload
  }
}

export function sendCodeStart() {
  return {
    type: '@account/sendCodeStart'
  }
}
export function sendCodeFailure() {
  return {
    type: '@account/sendCodeFailure'
  }
}
