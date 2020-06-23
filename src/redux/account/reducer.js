import produce from 'immer'

const initState = {
  codeButtonLoading: false,
  codeButtonDisabled: false,
  codeButtonText: '获取验证码'
}

export default function account(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@account/sendCode': {
        draft.codeButtonLoading = true
        draft.codeButtonText = '发送中'
        draft.codeButtonDisabled = true
        break
      }
      case '@account/sendCodeCountdown': {
        draft.codeButtonLoading = false
        draft.codeButtonText = action.payload.countdown
        draft.codeButtonDisabled = action.payload.buttonDisabled
        break
      }
      case '@account/sendCodeStart':
      case '@account/sendCodeFailure': {
        draft.codeButtonLoading = false
        draft.codeButtonText = '重新获取'
        draft.codeButtonDisabled = false
        break
      }
      default:
    }
  })
}
