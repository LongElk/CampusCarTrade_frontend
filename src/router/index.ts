import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/pages/HomePage.vue') },
  { path: '/list', component: () => import('@/pages/CarListPage.vue') },
  { path: '/post', component: () => import('@/pages/PostCarPage.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
