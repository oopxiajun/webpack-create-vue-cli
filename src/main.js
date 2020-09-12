import Vue from "vue"; //引入vue的esm
//import App from "./App.vue" //引入vue入口组件

import App from "./App" //引入vue入口组件
//实例化一个 Vue
new Vue({
    //元素id
    el:"#app",
    //组件
    components:{App},
    //模版
    template:'<div><App><App/></div>'
})
