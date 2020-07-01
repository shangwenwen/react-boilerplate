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

// 登录
export function login(payload) {
  return {
    type: 'LOGIN',
    payload
  }
}
export function loginSuccess(payload) {
  return {
    type: 'LOGIN_SUCCESS',
    payload
  }
}
export function logout() {
  return {
    type: 'LOGOUT'
  }
}
export function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

// 注册
export function register(payload) {
  return {
    type: 'REGISTER',
    payload
  }
}
export function registerSuccess(payload) {
  return {
    type: 'REGISTER_SUCCESS',
    payload
  }
}
export function registerFailure(payload) {
  return {
    type: 'REGISTER_FAILURE',
    payload
  }
}
