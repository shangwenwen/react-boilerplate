import React from 'react'
import { useDispatch } from 'react-redux'
// ui components
import { Button } from 'antd'

import { logout } from '../../redux/account/actions'

export default function Dashboard() {
  const dispatch = useDispatch()

  function handleLogout() {
    console.log('logout start')

    dispatch(logout())
  }
  return (
    <div>
      Dashboard
      <Button onClick={handleLogout}>button</Button>
    </div>
  )
}
