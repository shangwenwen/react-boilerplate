import { take, put, call, race, cancelled } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { message } from 'antd'

import Service from '../../services'
import { codeQueryFailure, countdownStart, countdownCancel } from './actions'

// 验证码倒计时轮询
export const countdown = secs => {
  return eventChannel(listener => {
    const timer = setInterval(() => {
      secs -= 1
      if (secs > 0) {
        listener(secs)
      } else {
        listener(END)
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
}

// 获取验证码
export function* codeAsync({ payload }) {
  // 后台获取验证码
  const { data } = yield call(Service.user.code, { username: payload.username })

  if (data.resCode === 0) {
    message.success(data.message, 2)

    const chan = yield call(countdown, payload.time)
    yield put(countdownStart({ countdown: payload.time, buttonDisabled: true }))

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
    // 获取验证码失败
    message.warning(data.message, 2)
    yield put(codeQueryFailure())
  }
}

// 监听账号sagas
export default function* watchAccountAsync() {
  try {
    while (true) {
      const action = yield take('CODE_QUERY')

      yield race([call(codeAsync, action), take('COUNTDOWN_CANCEL')])
    }
  } finally {
  }
}
