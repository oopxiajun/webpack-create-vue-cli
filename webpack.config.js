const path = require("path"); //引入node 的path模块
// module.exports = {
//     //打包模式
//     mode: 'none', //none ：不压缩，development：开发模式打包，production:正式版压缩方式
//     //入口文件
//     entry: './src/components/test.js',
//     //打包输出的路径
//     output: {
//         path: path.resolve(__dirname, "distTest"),
//         filename: 'indexTest.js'
//     }
// }

module.exports = (evn) => {
    console.log(evn); //
    evn = evn || {}; //为null时，就返回一个空对象
    return {
        // //入口文件
        // entry: "./src/components/test.js",
        // //改入口文件 main.js
        // entry: "./src/main.js",
        //改入口文件 main.js
        entry: "./src/main",
        //loader 配置
        module:{
            rules:[
                {test:/\.vue$/,use:"vue-loader"},
                //这儿要 注意 两个loader 的 顺序，【componse 组合函数，从右边往左边，要是pipe 函数就是 从左边往右边】
                {test:/\.css$/,use:["style-loader","css-loader"]}
            ]
        },
        resolve:{
            //默认扩展名
            extensions:['.js','.json','.vue'],
            alias:{
                vue: 'vue/dist/vue.esm' //引入vue的esm
            }
        },
        //这儿判断下 是否为开发环境，入过是开发环境 就是用 webpack.development.js 文件的配置，否则是用 webpack.production.js 文件的配置
        //要注意这个 ...的扩转运算符
        ...(evn.development ?
            require("./config/webpack.development") :
            require("./config/webpack.production")),

    };
};