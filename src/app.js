import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Redirect } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

// store
import history from '~/utils/history'
import { store, persistor } from '~/redux'

import Login from './pages/Login'
import Manage from './pages/Manage'
import PrivateRoute from './components/PrivateRoute'
import NotFound from './pages/404'
// import NotFound from '~/pages/404'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Redirect exact from='/' to='/manage/dashboard' />
            <PrivateRoute exact path='/login' component={Login} />
            <PrivateRoute path='/manage' component={Manage} />
            <PrivateRoute component={NotFound} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}
