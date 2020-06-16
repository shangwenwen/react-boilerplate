import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'persist-name',
      storage,
      whitelist: ['users']
    },
    reducers
  )

  return persistedReducer
}
