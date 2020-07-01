import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, path, ...rest }) {
  // 获取 token
  const token = localStorage.getItem('token')

  // 用户没有登录 并且 pathname 不是 /login 跳转到登录页面
  if (!token && path !== '/login') {
    return <Redirect to='/login' />
  }

  // 用户登录 并且 pathname 是 /login 跳转到首页
  if (token && path === '/login') {
    return <Redirect to='/manage/dashboard' />
  }

  // 其他都走 component 路由
  return <Route {...rest} render={props => <Component {...props} />} />
}
