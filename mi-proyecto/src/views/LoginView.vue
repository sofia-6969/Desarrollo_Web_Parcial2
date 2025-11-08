<template>
  <div class="login-container">
    <div class="cosmic-header">
      <div class="login-logo-container">
        <img src="@/assets/img/favicon.png" alt="U.R.E.S.A. Logo" class="login-logo" />
        <div class="login-logo-text">
          <h1>U.R.E.S.A.</h1>
          <p>Universal Real Estate & Experiences S.A.</p>
        </div>
      </div>
      <p class="subtitle">Acceso Exclusivo para Ciudadanos Galácticos</p>
    </div>

    <form @submit.prevent="handleLogin" class="login-form">
      <div class="input-group">
        <label for="email">Correo Electrónico Cósmico:</label>
        <input v-model="email" type="email" id="email" required placeholder="ciudadano@uresa.com" />
      </div>

      <div class="input-group">
        <label for="password">Contraseña Dimensional:</label>
        <input v-model="password" type="password" id="password" required placeholder="••••••••" />
      </div>

      <button type="submit" class="cosmic-button">Acceder al Portal</button>
    </form>

    <div v-if="error" class="error-message">
       {{ error }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const { login, error } = useAuth()

    const handleLogin = () => {
      login(email.value, password.value)
    }

    return { email, password, handleLogin, error }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}
.cosmic-button {
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
.error-message {
  margin-top: 1rem;
  color: red;
}
</style>