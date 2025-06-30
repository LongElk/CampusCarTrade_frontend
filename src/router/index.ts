import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AuthPage from '@/pages/AuthPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/login', name: 'Login', component: AuthPage },
  { path: '/', name: 'Home', component: HomePage, meta: { requiresAuth: true } },
  { path: '/list', component: () => import('@/pages/CarListPage.vue') },
  { path: '/post', component: () => import('@/pages/PostCarPage.vue') },
  {
    path: '/orders',
    name: 'OrderPage',
    component: () => import('../pages/OrderPage.vue'),
  },
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' && token) {
    next({ path: '/' })
  } else if (to.meta.requiresAuth && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
