// 获取验证码
export function codeQuery(payload) {
  return {
    type: 'CODE_QUERY',
    payload
  }
}

export function countdownStart(payload) {
  return {
    type: 'COUNTDOWN_START',
    payload
  }
}

export function countdownReset() {
  return {
    type: 'COUNTDOWN_RESET'
  }
}

export function countdownCancel() {
  return {
    type: 'COUNTDOWN_CANCEL'
  }
}

export function countdownTerminated() {
  return {
    type: 'COUNTDOWN_TERMINATED'
  }
}

export function codeQueryFailure() {
  return {
    type: 'CODE_QUERY_FAILURE'
  }
}
