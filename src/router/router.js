import { createRouter, createWebHistory } from 'vue-router'
import vMainpage from '../components/v-mainpage.vue'
import vCatalog from '../components/vCatalog/v-catalog.vue'
import vCart from '../components/vCart/v-cart.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'main',
        component: vMainpage
      },
    {
      path: '/catalog',
      name: 'catalog',
      component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: true
      }
  ]
})

