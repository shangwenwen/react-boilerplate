import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd'

import { codeQuery, countdownCancel, countdownReset } from '../../redux/account/actions'

export default function Code(props) {
  const dispatch = useDispatch()
  const { loading, buttonText, disabled } = useSelector(state => state.code)

  const { username, time, module } = props

  useEffect(() => {
    // 页面加载重制验证码倒计时
    dispatch(countdownReset())

    return () => {
      // 页面离开取消倒计时
      dispatch(countdownCancel())
    }
  }, [dispatch])

  function handleQueryCode() {
    if (!username) {
      message.warning('用户名不能为空！', 1)
      return false
    }

    dispatch(codeQuery({ username, time, module }))
  }
  return (
    <Button onClick={handleQueryCode} loading={loading} disabled={disabled} type='primary' size='large' danger block>
      {buttonText}
    </Button>
  )
}
