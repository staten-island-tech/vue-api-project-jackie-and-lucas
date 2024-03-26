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
      path: '/year2007',
      name: '2007',
      component: () => import('../views/year2007.vue'),
    },
    {
      path: '/year2008',
      name: '2008',
      component: () => import('../views/year2008.vue'),
    },
    {
      path: '/year2009',
      name: '2009',
      component: () => import('../views/year2009.vue'),
    },
    {
      path: '/year2010',
      name: '2010',
      component: () => import('../views/year2010.vue'),
    },
    {
      path: '/year2011',
      name: '2011',
      component: () => import('../views/year2011.vue'),
    },
    {
      path: '/year2012',
      name: '2012',
      component: () => import('../views/year2012.vue'),
    },
    {
      path: '/year2013',
      name: '2013',
      component: () => import('../views/year2013.vue'),
    },
    {
      path: '/year2014',
      name: '2014',
      component: () => import('../views/year2014.vue'),
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('../views/all.vue'),
    },
  ]
})

export default router
