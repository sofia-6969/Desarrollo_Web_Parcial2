<template>
  <div class="product-view">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="text-primary-custom">🛍️ Gestión de Productos</h2>
      <button class="btn btn-primary-custom" @click="showAddModal = true">
        + Agregar Producto
      </button>
    </div>

    <div class="row">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="col-md-6 col-lg-4 mb-4"
      >
        <ProductCardComponent 
          :product="product" 
          @edit="editProduct"
          @delete="deleteProduct"
        />
      </div>
    </div>

    <!-- Modal para agregar/editar producto -->
    <div v-if="showAddModal || showEditModal" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ showEditModal ? 'Editar Producto' : 'Agregar Producto' }}
            </h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveProduct">
              <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="currentProduct.title" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Precio</label>
                <input v-model="currentProduct.price" type="number" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Descripción</label>
                <textarea v-model="currentProduct.description" class="form-control" required></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Imagen URL</label>
                <input v-model="currentProduct.image" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Categoría</label>
                <select v-model="currentProduct.category" class="form-select" required>
                  <option value="juguetes">Juguetes Íntimos</option>
                  <option value="lenceria">Lencería</option>
                  <option value="cosmetica">Cosmética Íntima</option>
                  <option value="cuidado">Cuidado Personal</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
            <button type="button" class="btn btn-primary-custom" @click="saveProduct">
              {{ showEditModal ? 'Actualizar' : 'Guardar' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productService } from '../services/apiService'
import ProductCardComponent from '../components/ProductCardComponent.vue'

export default {
  name: 'ProductView',
  components: {
    ProductCardComponent
  },
  data() {
    return {
      products: [],
      showAddModal: false,
      showEditModal: false,
      currentProduct: {
        id: null,
        title: '',
        price: 0,
        description: '',
        image: '',
        category: 'juguetes'
      }
    }
  },
  async mounted() {
    await this.loadProducts()
  },
  methods: {
    async loadProducts() {
      try {
        this.products = await productService.getProducts()
      } catch (error) {
        console.error('Error loading products:', error)
      }
    },
    editProduct(product) {
      this.currentProduct = { ...product }
      this.showEditModal = true
    },
    async deleteProduct(productId) {
      if (confirm('¿Estás seguro de eliminar este producto?')) {
        try {
          await productService.deleteProduct(productId)
          await this.loadProducts()
        } catch (error) {
          console.error('Error deleting product:', error)
        }
      }
    },
    async saveProduct() {
      try {
        if (this.showEditModal) {
          await productService.updateProduct(this.currentProduct.id, this.currentProduct)
        } else {
          await productService.createProduct(this.currentProduct)
        }
        await this.loadProducts()
        this.closeModal()
      } catch (error) {
        console.error('Error saving product:', error)
      }
    },
    closeModal() {
      this.showAddModal = false
      this.showEditModal = false
      this.resetCurrentProduct()
    },
    resetCurrentProduct() {
      this.currentProduct = {
        id: null,
        title: '',
        price: 0,
        description: '',
        image: '',
        category: 'juguetes'
      }
    }
  }
}
</script>