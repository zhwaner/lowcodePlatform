import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent, h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dataSource',
    },
    {
      path: '/app/dataSource',
      name: 'dataSource',
      component: defineAsyncComponent(() => import('../views/DataSourceView.vue')),
    },
    {
      path: '/app/layout',
      name: 'layout',
      component: defineAsyncComponent(() => import('../views/LayoutView.vue')),
    },
    {
      path: '/app/actions',
      name: 'actions',
      component: defineAsyncComponent(() => import('../views/ActionsView.vue')),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => h('div', '404'),
    },
  ],
})

export default router
