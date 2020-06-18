import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
// pages
import Dashboard from '../pages/dashboard'
import Login from '~/pages/login'
import NoMatch from '~/pages/404'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/login' exact component={Login} />
      <Route component={NoMatch} />
    </Switch>
  )
}
