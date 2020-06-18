import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getUser } from '~/services/user'
import { query } from './actions'

export function* userSaga({ payload }) {
  try {
    console.log(payload)
    const { data } = yield call(getUser, payload)
    console.log('s')
    yield put(query(data))
  } catch (err) {
    console.log(err)
  }
}

export default all([takeLatest('@login/query', userSaga)])
