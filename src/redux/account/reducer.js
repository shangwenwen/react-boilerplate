import produce from 'immer'

const initState = {
  codeButtonLoading: false,
  codeButtonDisabled: false,
  codeButtonText: '获取验证码'
}

export default function account(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'CODE_QUERY': {
        draft.codeButtonLoading = true
        draft.codeButtonText = '发送中'
        draft.codeButtonDisabled = true
        break
      }
      case 'COUNTDOWN_RESET': {
        draft.codeButtonLoading = false
        draft.codeButtonText = '获取验证码'
        draft.codeButtonDisabled = false
        break
      }
      case 'COUNTDOWN_START': {
        draft.codeButtonLoading = false
        draft.codeButtonText = action.payload.countdown
        draft.codeButtonDisabled = action.payload.buttonDisabled
        break
      }
      case 'CODE_QUERY_FAILURE':
      case 'COUNTDOWN_CANCEL': {
        draft.codeButtonLoading = false
        draft.codeButtonText = '重新获取'
        draft.codeButtonDisabled = false
        break
      }
      default:
    }
  })
}
