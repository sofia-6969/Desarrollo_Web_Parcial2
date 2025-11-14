// Datos iniciales de productos para sexshop
let products = [
  {
    "id": 1,
    "title": "Vibrador Rabbit",
    "price": 89.99,
    "description": "Vibrador multifuncional con estimulación clitoridiana y punto G. Material silicona médica, impermeable.",
    "image": "/images/vibradorRabbit.jpg",
    "category": "juguetes"
  },
  {
    "id": 2,
    "title": "Lencería Encaje Negro",
    "price": 45.50,
    "description": "Conjunto de lencería sensual en encaje negro premium. Incluye bra, tanga y ligas.",
    "image": "/images/LenceríaEncajeNegro.jpeg",
    "category": "lenceria"
  },
  {
    "id": 3,
    "title": "Aceite Masajes Sensuales",
    "price": 25.99,
    "description": "Aceite de masajes con esencia de vainilla y canela. Hidratante y de larga duración.",
    "image": "/images/AceiteMasajesSensuales.jpg",
    "category": "cosmetica"
  },
  {
    "id": 4,
    "title": "Juego de Esposas",
    "price": 35.75,
    "description": "Esposas de terciopelo suave con ajuste seguro. Incluye llave de liberación rápida.",
    "image": "/images/JuegodeEsposas.jpg",
    "category": "juguetes"
  },
  {
    "id": 5,
    "title": "Plug Anal",
    "price": 67.99,
    "description": "Plug anal de silicona médica suave y flexible. Base de seguridad ancha para prevención de accidentes. Ideal para principiantes.",
    "image": "/images/PlugAnal.jpg",
    "category": "juguetes"
  }
]

// Simular delay de API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const productService = {
  async getProducts() {
    await delay(500)
    return [...products]
  },

  async getProduct(id) {
    await delay(300)
    return products.find(p => p.id === id)
  },

  async createProduct(product) {
    await delay(400)
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id)) + 1
    }
    products.push(newProduct)
    return newProduct
  },

  async updateProduct(id, product) {
    await delay(400)
    const index = products.findIndex(p => p.id === id)
    if (index !== -1) {
      products[index] = { ...product, id }
      return products[index]
    }
    throw new Error('Producto no encontrado')
  },

  async deleteProduct(id) {
    await delay(300)
    const index = products.findIndex(p => p.id === id)
    if (index !== -1) {
      const deleted = products.splice(index, 1)
      return deleted[0]
    }
    throw new Error('Producto no encontrado')
  }
}