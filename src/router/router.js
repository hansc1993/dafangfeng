import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../views/mainPage.vue'
import question from '../views/question.vue'
import hotProperty from '../views/hotProperty.vue'
import secondHouse from '../views/SecondHouse.vue'
import knowledge from '../views/knowledge.vue'
Vue.use(Router)

const router = [
    {
        path: '/',
        component: mainPage
    },{
        path: '/question',
        component: question
    },{
        path: '/hotProperty',
        component: hotProperty
    },{
        path: '/secondHouse',
        component: secondHouse
    },{
        path: '/knowledge',
        component: knowledge
    }
]

// const router = [
// {
//     path:'/menu',
//     name:'menu',
//     component:Menu,
//         children: [{
//         path: 'test',
//         name: 'test',
//         component: () => import('@/views/test/Test.vue')
//     }]
// },
//   {
//     path: '/login',
//     component: Login
//   },
//   {
//     path: '/',
//     redirect: '/menu'     // 默认重定向到列表
//   },
  
// ]

export default new Router({
  routes: router
})
