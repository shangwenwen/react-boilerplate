export default {
  // // 支持值为 Object 和 Array
  // 'GET /api/users': { users: [1, 2] },

  // // 默认GET 可省略
  // '/api/users/1': { id: 1 },

  // // 支持动态路由及其获取参数
  // 'GET /test/:a/:b': ctx => {
  //   const { a, b } = ctx.params
  //   ctx.body = {
  //     a,
  //     b
  //   }
  // },

  // 获取验证码
  'POST /api/getSms': ctx => {
    const { username } = ctx.request.body

    if (username === 'admin@admin.com') {
      ctx.body = {
        resCode: 0,
        data: null,
        message: '验证码是：123456'
      }

      return
    }

    ctx.body = {
      resCode: 1,
      message: '用户名不正确'
    }
  },

  // 登录
  'POST /api/login': ctx => {
    const { username, password, code } = ctx.request.body

    if (username === 'admin' && password === 'admin' && code === '123456') {
      ctx.body = {
        resCode: 0,
        data: {
          code: 1234
        },
        message: 'OK'
      }

      return
    }

    ctx.body = {
      status: 1,
      msg: '用户名或密码不正确!'
    }
  }
}
