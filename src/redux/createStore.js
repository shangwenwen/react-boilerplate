import { createStore, compose, applyMiddleware } from 'redux'

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__())
      : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
