import React from 'react'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'

export default [
  {
    title: '控制台',
    key: '/manage/dashboard',
    icon: <AppstoreOutlined />
  },
  {
    title: '商品管理',
    key: '/manage/product',
    icon: <MenuUnfoldOutlined />,
    children: [
      {
        title: '品类管理',
        key: '/manage/product/category',
        icon: <MenuFoldOutlined />
      },
      {
        title: '商品管理',
        key: '/manage/product/list',
        icon: <PieChartOutlined />
      }
    ]
  },
  {
    title: '用户管理',
    key: '/manage/user',
    icon: <DesktopOutlined />
  },
  {
    title: '角色管理',
    key: '/manage/role',
    icon: <ContainerOutlined />
  },
  {
    title: '图形图表',
    key: '/manage/charts',
    icon: <MailOutlined />,
    children: [
      {
        title: '柱形图',
        key: '/manage/charts/bar',
        icon: <MailOutlined />
      },
      {
        title: '折线图',
        key: '/manage/charts/line',
        icon: <DesktopOutlined />
      },
      {
        title: '饼图',
        key: '/manage/charts/pie',
        icon: <DesktopOutlined />
      }
    ]
  }
]
