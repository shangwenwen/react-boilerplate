// 获取验证码
export function codeQuery(payload) {
  return {
    type: 'CODE_QUERY',
    payload
  }
}

export function codeQueryFailure() {
  return {
    type: 'CODE_QUERY_FAILURE'
  }
}

export function countdownStart(payload) {
  return {
    type: 'COUNTDOWN_START',
    payload
  }
}

export function countdownCancel() {
  return {
    type: 'COUNTDOWN_CANCEL'
  }
}

export function countdownReset() {
  return {
    type: 'COUNTDOWN_RESET'
  }
}
