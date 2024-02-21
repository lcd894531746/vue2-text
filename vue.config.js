
const CopyWebpackPlugin = require('copy-webpack-plugin')
configureWebpack: {
  plugins:[
        new CopyWebpackPlugin([
          {
            from: 'node_modules/@easydarwin/easyplayer/dist/component/EasyPlayer.swf',
            to: './libs/EasyPlayer/'
          },
          {
            from: 'node_modules/@easydarwin/easyplayer/dist/component/crossdomain.xml',
            to: './libs/EasyPlayer/'
          },
          {
            from: 'node_modules/@easydarwin/easyplayer/dist/component/EasyPlayer-lib.min.js',
            to: './libs/EasyPlayer/'
          }
        ])
  ]
}

// 千万不要写内联样式！单位用px，浏览器会自动转换，不用刻意写rem单位。
const px2rem = require("postcss-px2rem");// 引入等比适配插件
// const px2rem = require("postcss-px2rem");

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});


// 使用等比适配插件
module.exports = {

  configureWebpack: {
    externals: {
      './cptable': 'var cptable'
    },
  },
  lintOnSave: true,
  // 此三行代码是为项目打包运行所写----
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  //---------------------------
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
};

