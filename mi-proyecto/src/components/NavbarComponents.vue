<template>
  <header class="top-header">
    <div class="header-content">
      <div class="logo-container">
        <router-link to="/dashboard" style="display: flex; align-items: center; gap: 15px; text-decoration: none; color: inherit;">
          <img src="@/assets/favicon.png" alt="U.R.E.S.A. Logo" class="site-logo">
          <div class="logo-text">
            <h1>U.R.E.S.A.</h1>
            <p>Universal Real Estate & Experiences</p>
          </div>
        </router-link>
      </div>
      
      <div class="welcome-message">
        Bienvenido, {{ user.name || 'Explorador Galáctico' }}
      </div>
      
      <div class="header-actions">
        <button @click="handleLogout" class="logout-btn">Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuth } from '@/composables/useAuth'

export default {
  name: 'NavbarComponent',
  setup() {
    const { user, logout } = useAuth()

    const handleLogout = () => {
      if (confirm('¿Salir del portal galáctico?')) {
        logout()
      }
    }

    return {
      user,
      handleLogout
    }
  }
}
</script>

<style scoped>
/* Los estilos están en components.scss */
</style>