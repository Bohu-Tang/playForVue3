import {createRouter, createWebHashHistory} from "vue-router"
import {
    Document,
    Menu as IconMenu,
    TrendCharts,
    Setting,
} from '@element-plus/icons-vue'

import Layout from '@/layout/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/home',
        component: Layout,
        meta: {
          title: "一级菜单",
          icon: Document,
          hidden: false,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/pages/Home.vue'),
                meta: {
                    title: '首页',
                    icon: Setting,
                    hidden: false,
                    parentRoute: 'index'
                }
            },
            {
                path: '/dataManage',
                name: 'dataManage',
                component: ()=> import('@/pages/dataManage.vue'),
                meta:{
                    title: '数据管理',
                    icon: TrendCharts,
                    hidden: false,
                    parentRoute: 'index'
                }

            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue'),
        meta: {
            title: '登录页',
            hidden: true,
            parentRoute: ''
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
