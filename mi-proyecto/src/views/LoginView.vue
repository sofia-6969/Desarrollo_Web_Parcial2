<template>
  <div class="login-container min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="card shadow-lg" style="width: 400px;">
      <div class="card-body p-5">
        <div class="text-center mb-4">
          <h2 class="text-primary-custom fw-bold">🔥 Intimacy Shop</h2>
          <p class="text-muted">Ingresa a tu cuenta</p>
        </div>
        
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              v-model="credentials.email"
              required
              placeholder="admin@intimacyshop.com"
            >
          </div>
          
          <div class="mb-4">
            <label for="password" class="form-label">Contraseña</label>
            <input 
              type="password" 
              class="form-control" 
              id="password" 
              v-model="credentials.password"
              required
              placeholder="admin123"
            >
          </div>
          
          <button type="submit" class="btn btn-primary-custom w-100 py-2">
            Iniciar Sesión
          </button>
        </form>

        <div class="mt-3 text-center">
          <small class="text-muted">
            Demo: admin@intimacyshop.com / admin123
          </small>
        </div>

        <div v-if="error" class="alert alert-danger mt-3" role="alert">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usuarios from '../data/usuarios.json'

export default {
  name: 'LoginView',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    login() {
      const user = usuarios.find(u => 
        u.email === this.credentials.email && 
        u.password === this.credentials.password
      )
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.$router.push('/dashboard/productos')
      } else {
        this.error = 'Credenciales incorrectas. Usa: admin@intimacyshop.com / admin123'
      }
    }
  }
}
</script>