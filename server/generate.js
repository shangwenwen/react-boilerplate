// generate db
const faker = require('faker')
faker.Locale = 'zh_CN'

let db = {
  users: [
    {
      id: 0,
      username: 'shangwen',
      password: '111',
      email: 'shang@shang.com',
      isAdmin: true,
      active: true
    }
  ],
  posts: [],
  comments: [
    {
      id: 0,
      title: 'comments 0'
    }
  ]
}

for (var i = 0; i < 10; i++) {
  db.posts.push({
    author: {
      loginname: faker.name.lastName(),
      avatar_url: faker.image.avatar()
    },
    content: '<div>content</div>',
    author_id: faker.random.uuid(),
    good: faker.random.boolean(),
    id: faker.random.uuid(),
    last_reply_at: faker.date.future(),
    reply_count: faker.random.number(),
    tag: faker.random.arrayElement(['推荐', '关注', '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读']),
    title: faker.name.title(),
    top: faker.random.boolean(),
    visit_count: faker.random.number()
  })
}

console.log(JSON.stringify(db))
