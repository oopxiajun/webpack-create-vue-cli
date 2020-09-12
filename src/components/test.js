import VueTest from "vue/dist/vue.esm"; //引入vue的esm
const vm = new VueTest({
    el: "#app",
    data: {},
    components: {
        //自己写的一个test 组件
        test: {
            data() {
                return {
                    tips: "我在学前端vue，哈哈，我更新了,去掉js引用，引入html-webpack-plugin 插件",
                };
            },
            template: "<div>{{tips}}</div>", //组件模版内容
        },
    },
    template: "<div> <test></test> </div>", //挂载 test 组件
});
/**
npm install vue-html-loader --save  //解析template
npm install vue-loader  --save  //解析vue文件
npm install vue-template-compiler  --save  //编译器，把vue的内容编译出来 

 */