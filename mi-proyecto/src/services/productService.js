import { apiClient } from './apiClient'

// Datos de productos de ejemplo (fallback)
const mockProducts = [
  {
    id: 1,
    title: "Parcela Lunar Premium",
    description: "Lote VIP en la Luna con vista espectacular a la Tierra.",
    price: 500000,
    image: "/img/moon-plot.png",
    category: "propiedad",
    rating: { rate: 4.8, count: 12 }
  },
  {
    id: 2,
    title: "Mensaje Interestelar",
    description: "Envía tu mensaje al vacío cósmico en una botella dimensional.",
    price: 150000,
    image: "/img/message-bottle.png",
    category: "experiencia",
    rating: { rate: 4.5, count: 25 }
  },
  {
    id: 3,
    title: "Nube Molecular de Orión",
    description: "Adquiere una sección exclusiva de la famosa nebulosa de Orión.",
    price: 900000,
    image: "/img/orion-nebula.png",
    category: "propiedad",
    rating: { rate: 4.9, count: 8 }
  },
  {
    id: 4,
    title: "Alquiler de Agujero Negro",
    description: "Alquila simbólicamente un agujero negro por 24 horas.",
    price: 450000,
    image: "/img/black-hole.png",
    category: "experiencia",
    rating: { rate: 4.7, count: 15 }
  },
  {
    id: 5,
    title: "Constelación Personal",
    description: "Crea tu propia constelación en nuestro mapa estelar virtual.",
    price: 600000,
    image: "/img/constellation.png",
    category: "propiedad",
    rating: { rate: 4.6, count: 20 }
  },
  {
    id: 6,
    title: "Viaje Turístico al Planeta Miller",
    description: "Experiencia virtual única al planeta oceánico de Interstellar.",
    price: 650000,
    image: "/img/miller-planet-tour.png",
    category: "experiencia",
    rating: { rate: 4.8, count: 18 }
  }
]

export const productService = {
  async getProducts() {
    try {
      return await apiClient.get('/products')
    } catch (error) {
      console.warn('API no disponible, usando datos mock:', error)
      return mockProducts
    }
  },

  async getProduct(id) {
    try {
      return await apiClient.get(`/products/${id}`)
    } catch (error) {
      console.warn('API no disponible, usando datos mock:', error)
      return mockProducts.find(p => p.id === parseInt(id))
    }
  },

  async createProduct(product) {
    try {
      return await apiClient.post('/products', product)
    } catch (error) {
      console.warn('API no disponible, simulando creación:', error)
      const newProduct = {
        ...product,
        id: Math.max(...mockProducts.map(p => p.id)) + 1,
        rating: { rate: 4.0, count: 0 }
      }
      mockProducts.push(newProduct)
      return newProduct
    }
  },

  async updateProduct(id, product) {
    try {
      return await apiClient.put(`/products/${id}`, product)
    } catch (error) {
      console.warn('API no disponible, simulando actualización:', error)
      const index = mockProducts.findIndex(p => p.id === parseInt(id))
      if (index !== -1) {
        mockProducts[index] = { ...mockProducts[index], ...product }
        return mockProducts[index]
      }
      throw new Error('Producto no encontrado')
    }
  },

  async deleteProduct(id) {
    try {
      return await apiClient.delete(`/products/${id}`)
    } catch (error) {
      console.warn('API no disponible, simulando eliminación:', error)
      const index = mockProducts.findIndex(p => p.id === parseInt(id))
      if (index !== -1) {
        mockProducts.splice(index, 1)
        return { message: 'Producto eliminado' }
      }
      throw new Error('Producto no encontrado')
    }
  }
}