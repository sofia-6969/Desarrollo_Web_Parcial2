import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ClientView from '../views/ClientView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    children: [
      {
        path: 'productos',
        name: 'Productos',
        component: ProductView
      },
      {
        path: 'clientes',
        name: 'Clientes',
        component: ClientView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router