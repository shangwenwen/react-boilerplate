import React from 'react'
import { Layout } from 'antd'

import LayoutAside from '../../components/Aside'
import LayoutHeader from '../../components/Header'
import PageContent from '../../components/PageContent'

export default function Manage() {
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
