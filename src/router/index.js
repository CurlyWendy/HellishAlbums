import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductPage from '../views/ProductPage.vue'
import CardPage from '../views/CardPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CardPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router