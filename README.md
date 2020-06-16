react redux mockjs

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




{
  "name": "react-boilerplate",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "NODE_ENV=development webpack-dev-server --mode development --colors --hot --inline --open",
    "dist": "NODE_ENV=production webpack --mode production --colors",
    "eslint": "eslint --ext .jsx,.js src/ --fix"
  },
  "devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-react": "^7.7.4",
    "autoprefixer": "^9.7.3",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-import": "^1.13.0",
    "css-loader": "^3.3.2",
    "cssnano": "^4.1.10",
    "eslint": "^6.7.2",
    "eslint-config-prettier": "^6.7.0",
    "eslint-config-react-app": "^5.1.0",
    "eslint-loader": "^3.0.3",
    "eslint-plugin-flowtype": "^4.5.2",
    "eslint-plugin-import": "^2.19.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.17.0",
    "eslint-plugin-react-hooks": "^2.3.0",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "postcss": "^7.0.25",
    "postcss-advanced-variables": "^3.0.0",
    "postcss-calc": "^7.0.1",
    "postcss-custom-media": "^7.0.8",
    "postcss-custom-selectors": "^5.1.2",
    "postcss-for": "^2.1.1",
    "postcss-image-set-polyfill": "^1.0.0",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^3.0.0",
    "postcss-media-minmax": "^4.0.0",
    "postcss-mixins": "^6.2.3",
    "postcss-nested": "^4.2.1",
    "postcss-pxtorem-multi": "^1.0.2",
    "prettier": "^1.19.1",
    "style-loader": "^1.0.1",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.3",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  },
  "dependencies": {
    "antd": "^3.26.3",
    "antd-mobile": "^2.3.1",
    "axios": "^0.19.0",
    "history": "^4.10.1",
    "immer": "^5.0.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "redux": "^4.0.4",
    "redux-persist": "^6.0.0",
    "redux-saga": "^1.1.3"
  }
}

