import React from 'react'
import { Route } from 'react-router-dom'

import AuthLayout from '../layouts/authLayout'
import DefaultLayout from '../layouts/defaultLayout'

export default function RouteWrapper({ component: Component, ...rest }) {
  // const isLogin = localStorage.getItem('user')
  const isLogin = true
  const Layout = isLogin ? AuthLayout : DefaultLayout

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
