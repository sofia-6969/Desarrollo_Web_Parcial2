<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <h3> Navegación Cósmica</h3>
      <ul>
        <li>
          <router-link to="/dashboard" class="nav-item" :class="{ active: $route.name === 'Home' }">
             Inicio
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/productos" class="nav-item" :class="{ active: $route.name === 'Productos' }">
             Gestión de Productos
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/perfil" class="nav-item" :class="{ active: $route.name === 'Perfil' }">
             Perfil
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="sidebar-info">
      <h4> Tu Estado</h4>
      <div class="user-stats">
        <div class="stat"><span>Rango:</span><strong>{{ user.rank || 'Explorador Estelar' }}</strong></div>
        <div class="stat"><span>Propiedades:</span><strong>3</strong></div>
        <div class="stat"><span>Créditos:</span><strong>₡1,250,000</strong></div>
      </div>
    </div>
  </aside>
</template>

<script>
import { useAuth } from '@/composables/useAuth'

export default {
  name: 'SidebarComponent',
  setup() {
    const { user } = useAuth()

    return {
      user
    }
  }
}
</script>

<style scoped>
/* Los estilos están en components.scss */
</style>