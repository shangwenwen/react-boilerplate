import { take, put, call, race, cancelled, all, takeLatest, fork } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { message } from 'antd'

import Service from '../../services'
import history from '../../utils/history'
import { codeQueryFailure, countdownStart, countdownCancel, loginSuccess, logoutSuccess } from './actions'

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
  const { data } = yield call(Service.user.code, { username: payload.username, module: payload.module })

  if (data.resCode === 0) {
    message.success(data.message, 2)

    const chan = yield call(countdown, payload.time)
    yield put(countdownStart({ countdown: `倒计时${payload.time}秒`, buttonDisabled: true }))

    try {
      while (true) {
        let seconds = yield take(chan)
        yield put(countdownStart({ countdown: `倒计时${seconds}秒`, buttonDisabled: true }))
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
export function* watchAccountAsync() {
  try {
    while (true) {
      const action = yield take('CODE_QUERY')

      yield race([call(codeAsync, action), take('COUNTDOWN_CANCEL')])
    }
  } finally {
    console.log('code finally')
  }
}

// 注册
export function* registerAsync({ payload }) {
  console.log(payload)
  const { data } = yield call(Service.user.register, { username: payload.data.username, password: payload.data.password, code: payload.data.code })

  if (data.resCode === 0) {
    message.success(data.message)
    // 回调执行页面逻辑
    payload.cb()
    // 跳转到登录页面
    history.replace('/login')
  } else {
    message.warning(data.message)
  }
}

// 登录
export function* loginAsync({ payload }) {
  const { data } = yield call(Service.user.login, { username: payload.username, password: payload.password, code: payload.code })
  console.log(data)

  if (data.resCode === 0) {
    yield put(loginSuccess(data.data))
    message.success(data.message)

    // 跳转到首页
    history.push('/')
  } else {
    message.warning(data.message)
  }
}

// 退出登录
export function* logoutAsync() {
  yield put(logoutSuccess())
  history.push('/login')
}

export default all([takeLatest('REGISTER', registerAsync), takeLatest('LOGIN', loginAsync), takeLatest('LOGOUT', logoutAsync), fork(watchAccountAsync)])
