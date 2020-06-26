import produce from 'immer'

const initCode = {
  loading: false,
  disabled: false,
  buttonText: '获取验证码'
}
const initAccount = {
  loading: false,
  username: '',
  token: null
}
export function account(state = initAccount, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'LOGIN_SUCCESS': {
        draft.loading = false
        draft.username = action.payload.username
        draft.token = action.payload.token
        break
      }
      case 'LOGOUT_SUCCESS': {
        draft.loading = false
        draft.username = ''
        draft.token = null
        break
      }
      default:
        break
    }
  })
}

export function code(state = initCode, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'CODE_QUERY': {
        draft.loading = true
        draft.buttonText = '发送中'
        draft.disabled = true
        break
      }
      case 'COUNTDOWN_RESET': {
        draft.loading = false
        draft.buttonText = '获取验证码'
        draft.disabled = false
        break
      }
      case 'COUNTDOWN_START': {
        draft.loading = false
        draft.buttonText = action.payload.countdown
        draft.disabled = action.payload.buttonDisabled
        break
      }
      case 'CODE_QUERY_FAILURE':
      case 'COUNTDOWN_CANCEL': {
        draft.loading = false
        draft.buttonText = '重新获取'
        draft.disabled = false
        break
      }
      default:
    }
  })
}
