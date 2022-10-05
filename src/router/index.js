import { createRouter, createWebHistory } from 'vue-router'
import PinterestLayout from '../views/PinLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pinterestLayout',
      component: PinterestLayout
    },
    {
      path: '/pin-details/:id',
      name: 'pinDetails',
      props: true,
      component: () => import('../views/PinView.vue'),

    }
  ]
})

export default router
