/*
 * File: .roadhogrc.js
 * Project: reactDemo
 * File Created: Wednesday, 12th December 2018 9:44:53 am
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Wednesday, 12th December 2018 9:44:53 am
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * 
 */
const path = require('path')
const { version } = require('./package.json')

// const { ENV } = require('./src/utils/config.js')

// const NODE_ENV = process.env.NODE_ENV

// console.log('ENV is ', ENV.devEnv.baseUrl)

console.log('node env is ', process.env.NODE_ENV)

// var baseUrl = ENV.devEnv.baseUrl

// if (NODE_ENV === 'development') {
//     console.log('ENV is ', ENV.devEnv.baseUrl)
// } else if (NODE_ENV === 'production') {
//     // baseUrl = ENV.preEnv.baseUrl
// }

// console.log('baseUrl is ',  baseUrl)

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, '')
]

export default {
  entry: 'src/IndexPage.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  theme: "./theme.config.js",
  publicPath: `/${version}/`,
  outputPath: `./dist/${version}`,
  // 接口代理示例
  proxy: {
    // "/api/v1/weather": {
    //   "target": "http://10.10.10.16",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api/v1/weather": "/v3/weather" }
    // },
    //jsonplaceholder.typicode.com/posts/
    "/API/img": {
      "target": "http://10.10.10.16",
      "changeOrigin": true,
      "pathRewrite": { "^/API/img": '/drp' }
    },
    "/API": {
      "target": "http://10.10.10.16",
      "changeOrigin": true,

      // "pathRewrite": { "^/API": `${ baseUrl }` }
      "pathRewrite": { "^/API": '/drp' }
    },
    
    //http://kmffhrtest.ceo100.net
    // '/api/': {
    //     target: 'http://gzzf.gznb.qa:81', // 测试地址
    //     pathRewrite: {
    //         '^/api': '',
    //     },
    //     changeOrigin: true,
    // }
    // "/api/v2": {
    //   "target": "http://192.168.0.110",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api/v2" : "/api/v2" }
    // }
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    }
  },
  dllPlugin: {
    exclude: ["babel-runtime", "roadhog", "cross-env"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  }
}
