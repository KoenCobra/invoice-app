import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/invoices'
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../views/Invoices.vue')
    }
  ]
})

export default router
