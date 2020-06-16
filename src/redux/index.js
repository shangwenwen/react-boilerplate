import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import createStore from '~/redux/createStore'
import persistReducers from '~/redux/persistReducers'
import rootReducer from '~/redux/rootReducer'
import rootSaga from '~/redux/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(persistReducers(rootReducer), middlewares)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
