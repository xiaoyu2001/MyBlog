import Vue from 'vue'
import Router from 'vue-router'

//import组件模块
import HelloWorld from './components/HelloWorld'


Vue.use(Router)  //使用插件

export default new Router({
    routes: [
        {
            path: '/',   //  定义为/会默认显示这个页面
            name: 'HelloWorld',
            component: HelloWorld,
        }
    ]
})
