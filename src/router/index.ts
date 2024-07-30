// 创建一个路由器并暴露出去 

// 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'

// 引入可能要呈现的组件
import Home from '@/compoents/Home.vue'
import News from '@/compoents/News.vue'
import About from '@/compoents/About.vue'
import Detail from '@/compoents/Detail.vue'
// 创建路由器
const router = createRouter({
    // 路由器工作模式
    history:createWebHistory(),
    // 一个个路由规则
    routes:[
        {
            path:'/Home',
            component:Home
        },
        {
            path:'/News',
            component:News,
            children:[
                {
                    name:'xiangqing',
                    path:'detail/:id/:title/:content?',
                    component:Detail
                }
            ]
        },
        {
            path:'/About',
            component:About
        }
    ]
})

// 暴露router
export default router
