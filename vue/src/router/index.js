import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/2007',
      name: '2007',
      component: () => import('../views/year2007.vue'),
    },
    {
      path: '/2008',
      name: '2008',
      component: () => import('../views/year2008.vue'),
    },
    {
      path: '/2009',
      name: '2009',
      component: () => import('../views/year2009.vue'),
    },
    {
      path: '/2010',
      name: '2010',
      component: () => import('../views/year2010.vue'),
    },
    {
      path: '/2011',
      name: '2011',
      component: () => import('../views/year2011.vue'),
    },
    {
      path: '/2012',
      name: '2012',
      component: () => import('../views/year2012.vue'),
    },
    {
      path: '/2013',
      name: '2013',
      component: () => import('../views/year2013.vue'),
    },
    {
      path: '/2014',
      name: '2014',
      component: () => import('../views/year2014.vue'),
    },
  ]
})

export default router
