import React from 'react'
import { Layout } from 'antd'

import LayoutAside from '~/components/aside'
import LayoutHeader from '~/components/header'

// 懒加载路由
import PageContent from '~/components/PageContent'
import './style.css'

export default function ManageLayout() {
  return (
    <Layout className='layout-wrapper' style={{ height: '100vh' }}>
      <LayoutAside />
      <Layout>
        <LayoutHeader />
        <PageContent />
      </Layout>
    </Layout>
  )
}
