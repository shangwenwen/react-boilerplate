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
    const { username, module } = ctx.request.body

    if (username === 'admin@qq.com' && module === 'login') {
      ctx.body = {
        resCode: 0,
        data: null,
        message: '登录验证码是：111111'
      }

      return
    }

    if (username === 'admins@qq.com' && module === 'register') {
      ctx.body = {
        resCode: 0,
        data: null,
        message: '注册验证码是：555555'
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

    if (username === 'admin@qq.com' && password === 'a11111' && code === '111111') {
      ctx.body = {
        resCode: 0,
        data: {
          username: 'admin',
          token: 'ddkahajkdlfal8lgdjal22ejggadgl7gaad'
        },
        message: '登录成功！'
      }

      return
    }

    ctx.body = {
      resCode: 1,
      message: '登录失败，请重新登录!'
    }
  },
  // 注册
  'POST /api/register': ctx => {
    const { username, password, code } = ctx.request.body

    if (username !== 'admin@qq.com' && code === '555555') {
      ctx.body = {
        resCode: 0,
        data: null,
        message: '注册成功'
      }

      return
    }

    ctx.body = {
      resCode: 1,
      message: '用户名已存在，请重新输入！'
    }
  }
}
