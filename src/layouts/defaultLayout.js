import React, { Fragment } from 'react'
import { Switch } from 'antd'
import PrivateRoute from '../routes/privateRoute'
import Login from '../pages/login'
import Register from '../pages/register'

export default function DefaultLayout() {
  return (
    <Fragment>
      <Switch>
        <PrivateRoute path='/login' exact component={Login} />
        <PrivateRoute path='/register' exact component={Register} />
      </Switch>
    </Fragment>
  )
}
