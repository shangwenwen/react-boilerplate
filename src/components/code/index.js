import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd'

import { sendCode } from '../../redux/account/actions'

export default function Code(props) {
  const { username } = props
  const dispatch = useDispatch()
  const { codeButtonLoading, codeButtonText, codeButtonDisabled } = useSelector(state => state.account)

  function handleSendCode() {
    if (!username) {
      message.warning('用户名不能为空！', 1)
      return false
    }

    dispatch(sendCode({ username }))
  }
  return (
    <Button onClick={handleSendCode} loading={codeButtonLoading} disabled={codeButtonDisabled} type='primary' size='large' danger block>
      {codeButtonText}
    </Button>
  )
}
