import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import WelcomePage from '@/views/WelcomePage/index.vue'
import Details from '@/views/detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: Layout
    },
    {
      path: '/',
      component: WelcomePage
    },
    {
      path: '/details/:id',
      name:'Details',
      component: Details,
      props: true
    }
  ]
})

export default router
