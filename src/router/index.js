import Vue from 'vue'
import Router from 'vue-router'
import IndexContent from '@/components/IndexContent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'IndexContent',
            component: IndexContent
        }
    ]
})
