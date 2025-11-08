<template>
  <header class="top-header">
    <div class="header-content">
      <div class="logo-container">
        <router-link to="/dashboard" class="logo-link">
          <img src="@/assets/img/favicon.png" alt="U.R.E.S.A. Logo" class="site-logo" />
          <div class="logo-text">
            <h1>U.R.E.S.A.</h1>
            <p>Universal Real Estate & Experiences</p>
          </div>
        </router-link>
      </div>
      <div class="welcome-message">Bienvenido, Explorador Galáctico</div>
      <div class="header-actions">
        <button @click="logout" class="logout-btn">Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.top-header {
  background-color: var(--color-primary);
  color: var(--color-accent);
  padding: 1rem;
}
.logo-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
}
.logout-btn {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>