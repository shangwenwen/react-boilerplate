import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
// components
import PrivateRoute from '../PrivateRoute'
// pages
import User from '../../pages/User'
import Dashboard from '../../pages/Dashboard'
import NotFound from '../../pages/404'
import Category from '../../pages/Product/category'

export default function PageContent() {
  return (
    <Switch>
      <Redirect exact from='/manage' to='/manage/dashboard' />
      <PrivateRoute exact path='/manage/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/manage/product/category' component={Category} />
      <PrivateRoute exact path='/manage/user' component={User} />
      <PrivateRoute component={NotFound} />
    </Switch>
  )
}
