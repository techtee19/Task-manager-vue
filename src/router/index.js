import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import logiInForm from '@/components/auth/logiInForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: logiInForm,
    },
  ],
})

export default router
