<template>
  <nav class="navbar navbar-dark bg-primary-custom fixed-top">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">🔥 Intimacy Shop - Panel Admin</span>
      <button class="btn btn-outline-light" @click="logout">
        Cerrar Sesión
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1030;
}
</style>