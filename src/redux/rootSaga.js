import { fork } from 'redux-saga/effects'

import watchAccountAsync from '~/redux/account/sagas'

export default function* rootSaga() {
  return yield fork(watchAccountAsync)
}
