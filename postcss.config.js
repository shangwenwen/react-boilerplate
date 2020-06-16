/* eslint-disable prettier/prettier */
const postcssConfig = (env) => {
  const plugins = [
    require('postcss-import'), // @import 'name';
    require('postcss-mixins'), // 混合宏
    require('postcss-for'), // 循环
    require('postcss-nested'), // 嵌套
    require('postcss-advanced-variables'), // 变量
    require('postcss-calc'), // 属性值计算
    require('postcss-custom-selectors'), // 选择器
    require('postcss-custom-media'), // 响应式设计
    require('postcss-media-minmax'), // 响应式设计
    require('postcss-image-set-polyfill'), // 响应式图片
    require('postcss-pxtorem-multi')({
      rules: [
        {
          include: null,
          propList: ['*'],
          rootValue: 16
        }
      ]
    }), // px -> rem
    require('autoprefixer') // 自动添加 CSS3 前缀
  ]

  if (env === 'production') {
    plugins.push(
      require('cssnano')({
        educeIdents: false
      })
    )
  }

  return plugins
}

module.exports = postcssConfig
