react redux mockjs
ss

<!-- 开发环境搭建 -->

<!-- webpack plugin -->

yarn add webpack webpack-cli webpack-dev-server --dev
yarn add html-webpack-plugin extract-text-webpack-plugin@next url-loader style-loader css-loader postcss-loader babel-loader html-loader --dev

<!-- babel -->

yarn add @babel/core babel-loader @babel/preset-react babel-plugin-import --dev

<!--
{
  "presets": [
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "import", {
        "libraryName": "antd",
        "style": "css"
      }
    ]
  ]
}
-->

<!-- postcss -->

yarn add cssnano autoprefixer postcss postcss-advanced-variables postcss-calc postcss-custom-media postcss-custom-selectors postcss-for postcss-image-set-polyfill postcss-import postcss-loader postcss-media-minmax postcss-mixins postcss-nested postcss-pxtorem-multi --dev

<!-- eslint -->

yarn babel-eslint eslint eslint-config-react-app eslint-loader eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier --dev

<!--
{
  enforce: 'pre',
  test: /\.(js|jsx)$/,
  loader: 'eslint-loader',
  options:{
    fix: true
  }
},
{
  test: /\.(js|jsx)$/,
  loader: 'babel-loader'
},
-->

<!-- react -->

yarn add react react-dom react-router-dom redux react-redux redux-persist redux-saga history axios immer

<!-- antd antd-mobile -->

yarn add antd antd-mobile

```
state
{
  account:{
    currentAuthority: "admin",
    status: "ok",
    type: "account",
  }
}
```
