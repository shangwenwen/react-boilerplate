import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'

import './style.css'

const { Header, Sider, Content } = Layout

export default function DefaultLayout({ children }) {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}></Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
