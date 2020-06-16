import { all, call, put, takeLatest } from 'redux-saga/effects'
import { query } from '~/services/user'
import { saveUser } from './actions'

export function* userSaga() {
  try {
    const { data } = yield call(query)
    console.log(data)
    yield put(saveUser(data))
  } catch (err) {
    console.log(err)
  }
}

export default all([takeLatest('@users/query', userSaga)])
