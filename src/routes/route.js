import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import AdminLayout from '../layouts/adminLayout'
import DefaultLayout from '../layouts/defaultLayout'

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const { username } = useSelector(state => state.account)

  // const username = false
  const Layout = username ? AdminLayout : DefaultLayout

  if (!username && isPrivate) {
    return <Redirect to='/login' />
  }

  if (username && !isPrivate) {
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
