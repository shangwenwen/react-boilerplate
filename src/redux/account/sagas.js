import { take, put, call, fork, race, cancelled, delay } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { getCode } from '~/services/user'
import { message } from 'antd'

import { codeQuery, codeQueryFailure, countdownStart, countdownCancel } from './actions'

export const countdown = secs => {
  return eventChannel(listener => {
    const timer = setInterval(() => {
      secs -= 1
      if (secs > 0) listener(secs)
      else {
        listener(END)
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
}

export function* codeAsync({ payload }) {
  // yield delay(2000)
  const { data } = yield call(getCode, { username: payload.username })

  if (data.resCode === 0) {
    message.success(data.message, 2)

    const chan = yield call(countdown, payload.time)
    yield put(countdownStart({ countdown: 10, buttonDisabled: true }))

    try {
      while (true) {
        let seconds = yield take(chan)
        yield put(countdownStart({ countdown: seconds, buttonDisabled: true }))
      }
    } finally {
      if (!(yield cancelled())) {
        yield put(countdownCancel())
      }
      chan.close()
    }
  } else {
    message.warning(data.message, 2)
    yield put(codeQueryFailure())
  }
}

export default function* watchAccountAsync() {
  try {
    while (true) {
      const action = yield take('CODE_QUERY')

      // starts a 'Race' between an async increment and a user cancel action
      // if user cancel action wins, the incrementAsync will be cancelled automatically
      yield race([call(codeAsync, action), take('COUNTDOWN_CANCEL')])
    }
  } finally {
    console.log('watchIncrementAsync terminated')
  }
}
