import React from 'react'
import { Switch, Route } from 'react-router-dom'
// pages
import Dashboard from '../pages/dashboard'
import Login from '~/pages/user/login'
import Register from '~/pages/user/register'
// import NoMatch from '~/pages/404'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  )
}
