import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Layout, Button } from 'antd'

import { logout } from '../../redux/account/actions'

export default function LayoutHeader(props) {
  console.log(props)

  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logout())
  }

  return (
    <Fragment>
      <Layout.Header className='layout-header' style={{ backgroundColor: '#fff', borderBottom: '1px solid #f3f3f3' }}>
        <Button onClick={handleLogout}>退出登录</Button>
      </Layout.Header>
    </Fragment>
  )
}
