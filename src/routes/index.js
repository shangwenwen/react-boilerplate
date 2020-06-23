import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
// pages
import Dashboard from '../pages/dashboard'
import Login from '~/pages/login'
import Register from '~/pages/register'
import User from '~/pages/user'
import Products from '~/pages/products'
import NotFound from '~/pages/404'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} isPrivate />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/user' exact component={User} isPrivate />
      <Route path='/products' exact component={Products} isPrivate />
      <Route path='/products/:pid' exact component={Products} isPrivate />
      <Route component={NotFound} isPrivate />
    </Switch>
  )
}
