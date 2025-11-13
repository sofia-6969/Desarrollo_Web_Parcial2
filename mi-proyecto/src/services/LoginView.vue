<template>
  <div class="login-page">
    <div class="starfield" ref="starfield"></div>
    
    <div class="login-container">
      <div class="cosmic-header">
        <div class="login-logo-container">
          <img src="@/assets/favicon.png" alt="U.R.E.S.A. Logo" class="login-logo">
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
          <input 
            type="email" 
            id="email" 
            v-model="credentials.email"
            required 
            placeholder="ciudadano@uresa.com"
            class="form-control cosmic-input"
          >
        </div>
        
        <div class="input-group">
          <label for="password">Contraseña Dimensional:</label>
          <input 
            type="password" 
            id="password" 
            v-model="credentials.password"
            required 
            placeholder="••••••••"
            class="form-control cosmic-input"
          >
        </div>
        
        <button type="submit" class="btn cosmic-button w-100">
           Acceder al Portal
        </button>
      </form>
      
      <div v-if="error" class="alert alert-danger cosmic-alert">
        {{ error }}
      </div>
      
      <div class="login-footer">
        <p><small>¿Problemas de acceso dimensional? Contacte al soporte intergaláctico.</small></p>
        <p><small><strong>Demo:</strong> ciudadano@uresa.com / universo2024</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter()
    const { login } = useAuth()
    const starfield = ref(null)
    const credentials = ref({
      email: '',
      password: ''
    })
    const error = ref('')

    const handleLogin = () => {
      if (login(credentials.value.email, credentials.value.password)) {
        router.push('/dashboard')
      } else {
        error.value = 'Credenciales incorrectas. Verifique su identidad galáctica.'
        setTimeout(() => {
          error.value = ''
        }, 3000)
      }
    }

    const createStarfield = () => {
      const starCount = 50
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.cssText = `
          width: ${Math.random() * 3}px; 
          height: ${Math.random() * 3}px;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh; 
          opacity: ${Math.random() * 0.7 + 0.3};
          animation-duration: ${Math.random() * 3 + 2}s;
        `
        if (starfield.value) {
          starfield.value.appendChild(star)
        }
      }
    }

    onMounted(() => {
      createStarfield()
    })

    return {
      starfield,
      credentials,
      error,
      handleLogin
    }
  }
}
</script>

<style scoped lang="scss">
/* Solo estilos específicos del componente */
.login-page {
  min-height: 100vh;
}
</style>