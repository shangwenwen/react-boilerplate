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

  // 支持自定义函数，API 参考 koa
  'POST /api/login': ctx => {
    const { username, password } = ctx.request.body

    // console.log(ctx.request.body)

    if (username === 'admin' && password === 'admin') {
      ctx.body = {
        status: 0,
        data: {
          _id: '5c3b297dea95883f340178b0',
          password: '21232f297a57a5a743894a0e4a801fc3',
          username: 'admin',
          create_time: 1547381117891,
          __v: 0,
          role: {
            menus: []
          }
        }
      }

      return
    }

    ctx.body = {
      status: 1,
      msg: '用户名或密码不正确!'
    }
  },
  //添加用户
  'POST /api/user/add': ctx => {
    const { username, password, phone, email, role_id } = ctx.request.body

    if (username !== 'admin') {
      ctx.body = {
        status: 0,
        data: {
          _id: '5c3b382c82a14446f4ffb647',
          username,
          password,
          phone,
          email,
          create_time: 1547384876804,
          __v: 0
        }
      }

      return
    }

    ctx.body = {
      status: 1,
      msg: '此用户已存在'
    }
  },
  // 获取所有用户列表
  'GET /api/user/list': {
    status: 0,
    data: {
      users: [
        {
          _id: '5cb05b4db6ed8c44f42c9af2',
          username: 'test',
          password: '202cb962ac59075b964b07152d234b70',
          phone: '123412342134',
          email: 'sd',
          role_id: '5ca9eab0b49ef916541160d4',
          create_time: 1555061581734,
          __v: 0
        },
        {
          _id: '5cb05b69b6ed8c44f42c9af3',
          username: 'ss22',
          password: '123',
          phone: '23343',
          email: 'df',
          role_id: '5caf5444c61376319cef80a8',
          create_time: 1555061609666,
          __v: 0
        }
      ],
      roles: [
        {
          menus: ['/home', '/role', '/category', '/products', '/product', '/charts/bar'],
          _id: '5ca9eaa1b49ef916541160d3',
          name: '测试',
          create_time: 1554639521749,
          __v: 0,
          auth_time: 1555145863489,
          auth_name: 'admin'
        }
      ]
    }
  }
}
