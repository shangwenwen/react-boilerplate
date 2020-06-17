import React from 'react'
import { Route } from 'react-router-dom'

import { store } from '../redux/index'

import AuthLayout from '../layouts/authLayout'
import DefaultLayout from '../layouts/defaultLayout'

export default function RouteWrapper({ component: Component, ...rest }) {
  const { status } = store.getState().account
  const Layout = status ? AuthLayout : DefaultLayout

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
