const API_URL = 'https://fakestoreapi.com'

export const productService = {
  async getProducts() {
    const response = await fetch(`${API_URL}/products`)
    return await response.json()
  },

  async getProduct(id) {
    const response = await fetch(`${API_URL}/products/${id}`)
    return await response.json()
  },

  async createProduct(product) {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    return await response.json()
  },

  async updateProduct(id, product) {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    return await response.json()
  },

  async deleteProduct(id) {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE'
    })
    return await response.json()
  }
}