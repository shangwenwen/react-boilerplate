import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
// 路由
import Routes from './routes'
// store
import history from '~/utils/history'
import { store, persistor } from '~/redux'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  )
}
