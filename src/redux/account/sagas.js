import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { getCode } from '~/services/user'
import { message } from 'antd'

import { sendCodeCountdown, sendCodeFailure, sendCodeStart } from './actions'

// 倒计时
export const countdown = secs => {
  return eventChannel(emitter => {
    const timer = setInterval(() => {
      secs -= 1
      if (secs > 0) {
        emitter(secs)
      } else {
        emitter(END)
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
}

// 发送验证码
export function* sendCodeAsync({ payload }) {
  // 模拟延时请求
  // yield delay(1000)
  // 请求数据
  const { data } = yield call(getCode, payload)

  if (data.resCode === 0) {
    message.success(data.message, 2)

    const secs = 60
    const timeChannel = yield call(countdown, secs)

    try {
      while (true) {
        let seconds = yield take(timeChannel)
        yield put(sendCodeCountdown({ countdown: `${seconds}s`, buttonDisabled: true }))
      }
    } finally {
      console.log('ss')

      yield put(sendCodeStart())
    }
  } else {
    message.warning(data.message)
    yield put(sendCodeFailure())
  }
}

export default all([takeLatest('@account/sendCode', sendCodeAsync)])
