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
    },
    {
      path: '/invoices/:id',
      name: 'invoice',
      component: () => import('../views/Invoice.vue')
    }
  ]
})

export default router
