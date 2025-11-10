import { apiClient } from './apiClient'

export const authService = {
  async login(email, password) {
    // Simulación de login con JSON local
    const users = await this.getUsers()
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isAuthenticated', 'true')
      return user
    }
    throw new Error('Credenciales incorrectas')
  },

  async getUsers() {
    try {
      // Intentar cargar desde API
      return await apiClient.get('/users')
    } catch (error) {
      // Fallback a datos locales
      return [
        {
          id: 1,
          email: "ciudadano@uresa.com",
          password: "universo2024",
          name: "Explorador Estelar",
          role: "user",
          avatar: "🚀",
          rank: "Explorador Estelar",
          memberSince: "Enero 2025"
        },
        {
          id: 2,
          email: "admin@uresa.com",
          password: "admin123",
          name: "Administrador Galáctico",
          role: "admin",
          avatar: "👽",
          rank: "Administrador Dimensional",
          memberSince: "Enero 2025"
        }
      ]
    }
  },

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
  },

  getCurrentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true'
  }
}