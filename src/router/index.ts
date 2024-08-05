// 创建一个路由器并暴露出去 

// 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'

// 引入可能要呈现的组件
import Home from '@/compoents/Home.vue'
import News from '@/compoents/News.vue'
import About from '@/compoents/About.vue'
import Detail from '@/compoents/Detail.vue'
import Props from '@/pages/Props.vue'
import CustomEvent from '@/pages/CustomEvent.vue'
import Mitt from '@/pages/Mitt.vue'
import RefParent from '@/pages/Ref-Parent.vue'
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
                    component:Detail,
                    // 第一种写法:将路由收到的所有params参数作为props传给录用主键
                    // props:true
                    // 第二种写法:可以自己决定将什么作为props给路由组件
                    props(route){   
                        return route.params
                    }
                    // 对象写法
                }
            ]
        },
        {
            path:'/About',
            component:About
        },
        {
            path:'/Props',
            component:Props
        },
        {
            path:'/CustomEvent',
            component:CustomEvent
        },
        {
            path:'/Mitt',
            component:Mitt
        },
        {
            path:'/Ref-Parent',
            component:RefParent
        }
        // {
        //     path:'/',
        //     redirect:'/Props'
        // },

    ]
})

// 暴露router
export default router
