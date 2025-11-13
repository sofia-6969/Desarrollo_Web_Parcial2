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
            >
          </div>
          
          <button type="submit" class="btn btn-primary-custom w-100 py-2">
            Iniciar Sesión
          </button>
        </form>

        <div v-if="error" class="alert alert-danger mt-3" role="alert">
          {{ error }}
        </div>
=======
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

