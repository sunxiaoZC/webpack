import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1.路由组件
// import AboutDetail from '@/module/about/AboutDetail.vue'
// import HomeMain from '@/module/home/HomeMain.vue'

// 2.配置组件

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/module/home/HomeMain.vue')
  },
  {
    path: '/about',
    component: () => import('@/module/about/AboutDetail.vue') //路由懒加载
  },
  {
    path: '/user',
    component: () => import('@/module/user/UserInfo.vue')
  }
]

// 3.创建路由

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 4.挂载到根实例

export default router
