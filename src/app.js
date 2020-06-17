import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import axios from 'axios'

// 路由
import Routes from './routes'
// store
import history from '~/utils/history'
import { store, persistor } from '~/redux'

import './mock/user'

export default function App() {
  axios.post('/posts').then(res => {
    console.log(res.data)
  })
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
