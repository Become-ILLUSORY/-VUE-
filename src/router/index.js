import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jingdian',
      name: 'jingdian',
      component: () => import('../views/jingdian.vue')
    },
    {
      path: '/gonglue',
      name: 'gonglue',
      component: () => import('../views/gonglue.vue')
    },
    {
      path: '/dazhong',
      name: 'dazhong',
      component: () => import('../views/dazhong.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    }
  ]
})

export default router
