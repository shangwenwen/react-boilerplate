import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AdminLayout from '../layouts/adminLayout'
import DefaultLayout from '../layouts/defaultLayout'

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  // const isLogin = localStorage.getItem('user')
  const isLogin = false
  const Layout = isLogin ? AdminLayout : DefaultLayout

  if (!isLogin && isPrivate) {
    return <Redirect to='/login' />
  }

  if (isLogin && !isPrivate) {
    return <Redirect to='/user' />
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
