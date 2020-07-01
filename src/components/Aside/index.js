import React from 'react'
// antd
import { Layout } from 'antd'

import SiderMenu from '../SiderMenu'
import logoImg from '../../assets/img/logo.svg'

export default function LayoutAside() {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={false} width='208px'>
      <div className='logo'>
        <img src={logoImg} alt='logo' style={{ height: '100%' }} />
      </div>
      <SiderMenu />
    </Layout.Sider>
  )
}
