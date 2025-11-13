<template>
  <div class="sidebar col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-5">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link 
            to="/dashboard/productos" 
            class="nav-link active"
            active-class="active"
          >
            🛍️ Productos
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            👥 Clientes
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            📊 Reportes
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.nav-link {
  color: #333;
  padding: 10px 15px;
}

.nav-link.active {
  background-color: var(--primary-color);
  color: white;
}

.nav-link:hover {
  background-color: #e9ecef;
}
</style>