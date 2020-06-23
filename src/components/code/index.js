import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd'

// code actions
import { codeQuery, countdownCancel, countdownReset } from '../../redux/account/actions'

export default function Code(props) {
  const { username, time } = props
  const dispatch = useDispatch()
  const { codeButtonLoading, codeButtonText, codeButtonDisabled } = useSelector(state => state.account)

  useEffect(() => {
    console.log('component did mount')
    dispatch(countdownReset())
    return () => {
      console.log('component will unmount')
      dispatch(countdownCancel())
    }
  }, [dispatch])

  function handleQueryCode() {
    if (!username) {
      message.warning('用户名不能为空！', 1)
      return false
    }

    dispatch(codeQuery({ username, time }))
  }
  return (
    <Button onClick={handleQueryCode} loading={codeButtonLoading} disabled={codeButtonDisabled} type='primary' size='large' danger block>
      {codeButtonText}
    </Button>
  )
}
