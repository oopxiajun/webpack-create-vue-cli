//引入 html-webpack-plugin 插件，处理js，html，css 打包
var HWP=require("html-webpack-plugin")
//引入vue-loader 的插件 处理vue 的组件
var VLP=require('vue-loader/lib/plugin')
console.log("这里是开发环境的配置");


module.exports = {
    //打包模式
    mode: "development", //none ：不压缩，development：开发模式打包，production:正式版压缩方式
    // //入口文件
    // entry: "./src/components/test.js",
    
    // //入口文件
    // entry: "./src/main.js",
    //入口文件
    entry: "./src/main",
    //打包输出的路径
    output: {
        filename: "indexTest.js",
    },
    plugins:[
        new HWP({
            //模版文件
            template:'index.html',
            //输出的文件名
            filename:"index.html"
        }),
        new VLP()
    ]
};