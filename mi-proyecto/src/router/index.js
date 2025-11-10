index.js: import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ProfileView from '@/views/ProfileView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    redirect: '/dashboard/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'productos',
        name: 'Productos',
        component: ProductView
      },
      {
        path: 'perfil',
        name: 'Perfil',
        component: ProfileView
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de ruta para protección de autenticación
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/dashboard/home')
  } else {
    next()
  }
})

export default router