import { take, put, call, cancelled, all, takeLatest, race, fork } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { message } from 'antd'

import Service from '../../services'
import history from '../../utils/history'
import { codeQueryFailure, countdownStart, countdownCancel, loginSuccess, logoutSuccess } from './actions'

// 定时器
export const interval = secs => {
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

// 倒计时
export function* countdown({ payload }) {
  const chan = yield call(interval, payload)
  yield put(countdownStart({ countdown: `倒计时${payload}秒`, buttonDisabled: true }))

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
}

// 监听倒计时
export function* watchCountdownSaga() {
  try {
    while (true) {
      const action = yield take('COUNTDOWN_START')
      yield race([call(countdown, action), take('COUNTDOWN_CANCEL')])
    }
  } finally {
    console.log('countdown finally')
  }
}

// 监听获取验证码
export function* watchCodeAsync({ payload }) {
  // 后台获取验证码
  const { data } = yield call(Service.user.code, {
    username: payload.username,
    module: payload.module
  })

  if (data.resCode === 0) {
    // 获取验证码成功
    message.success(data.message)
    // 触发验证码倒计时
    yield put(countdownStart(payload.time))
  } else {
    // 获取验证码失败
    message.warning(data.message)
    yield put(codeQueryFailure())
  }
}

// 注册
export function* registerAsync({ payload }) {
  const { data } = yield call(Service.user.register, {
    username: payload.data.username,
    password: payload.data.password,
    code: payload.data.code
  })

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
  const { data } = yield call(Service.user.login, {
    username: payload.username,
    password: payload.password,
    code: payload.code
  })
  // 登录成功
  if (data.resCode === 0) {
    // 提示登录成功信息
    message.success(data.msg)
    yield put(loginSuccess(data.data))
    // 保存 TOKEN
    localStorage.setItem('token', data.data.token)
    // 跳转到首页
    history.push('/manage/dashboard')
  } else {
    // 登录失败 提示错误信息
    message.warning(data.msg)
  }
}

// 退出登录
export function* logoutAsync() {
  // 清除 STATE
  yield put(logoutSuccess())
  // 清除 TOKEN
  localStorage.removeItem('token')
  // 跳转到登录页面
  history.push('/login')
}

export default all([
  takeLatest('REGISTER', registerAsync),
  takeLatest('LOGIN', loginAsync),
  takeLatest('LOGOUT', logoutAsync),
  takeLatest('CODE_QUERY', watchCodeAsync),
  fork(watchCountdownSaga)
])
