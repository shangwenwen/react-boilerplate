import { all } from 'redux-saga/effects'

import user from '~/redux/auth/sagas'

export default function* rootSaga() {
  return yield all([user])
}
