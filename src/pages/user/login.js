import React from 'react'
import { useDispatch } from 'react-redux'

import { queryUser } from '~/redux/user/actions'

export default function Login() {
  const dispatch = useDispatch()

  function handleUser() {
    dispatch(queryUser())
  }

  return (
    <div>
      <div>pagesss</div>
      <div onClick={handleUser}>dd</div>
    </div>
  )
}
