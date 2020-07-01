export const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
export const emailReg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

// 验证邮箱
export function validateEmail(value) {
  return emailReg.test(value)
}
// 验证密码
export function validatePassword(value) {
  return passwordReg.test(value)
}
