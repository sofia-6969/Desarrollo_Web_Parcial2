<template>
  <div class="product-view">
    <!-- Encabezado con botón VISIBLE -->
    <div class="d-flex justify-content-between align-items-center mb-4 p-3 bg-white rounded shadow-sm">
      <h2 class="text-primary-custom mb-0"> Gestión de Productos</h2>
      <button class="btn btn-primary-custom btn-lg" @click="showAddModal = true">
        <strong>+ Agregar Producto</strong>
      </button>
    </div>

    <!-- Estados de carga -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary-custom" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2 text-muted">Cargando productos...</p>
    </div>

    <!-- Sin productos -->
    <div v-else-if="products.length === 0" class="text-center py-5 bg-light rounded">
      <h4 class="text-muted">No hay productos</h4>
      <p class="text-muted">Comienza agregando tu primer producto al catálogo</p>
      <button class="btn btn-primary-custom btn-lg" @click="showAddModal = true">
        + Agregar Primer Producto
      </button>
    </div>

    <!-- Lista de productos -->
    <div class="row" v-else>
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

    <!-- Modal para agregar/editar -->
    <div v-if="showAddModal || showEditModal" class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary-custom text-white">
            <h5 class="modal-title">
              {{ showEditModal ? '✏️ Editar Producto' : '➕ Agregar Producto' }}
            </h5>
            <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label fw-bold">Nombre del Producto *</label>
                  <input v-model="currentProduct.title" class="form-control form-control-lg" placeholder="Ej: Vibrador Rabbit" required>
                </div>
                <div class="mb-3">
                  <label class="form-label fw-bold">Precio ($) *</label>
                  <input v-model="currentProduct.price" type="number" step="0.01" class="form-control" placeholder="0.00" required>
                </div>
                <div class="mb-3">
                  <label class="form-label fw-bold">Categoría *</label>
                  <select v-model="currentProduct.category" class="form-select" required>
                    <option value="juguetes"> Juguetes Íntimos</option>
                    <option value="lenceria"> Lencería</option>
                    <option value="cosmetica"> Cosmética Íntima</option>
                    <option value="cuidado"> Cuidado Personal</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label fw-bold">URL de Imagen *</label>
                  <input v-model="currentProduct.image" class="form-control" placeholder="https://..." required>
                  <small class="text-muted">
                    Ej: https://via.placeholder.com/300x300/8B008B/FFFFFF?text=Nombre+Producto
                  </small>
                </div>
                <div class="mb-3">
                  <label class="form-label fw-bold">Descripción *</label>
                  <textarea v-model="currentProduct.description" class="form-control" rows="4" placeholder="Describe el producto..." required></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">❌ Cancelar</button>
            <button type="button" class="btn btn-primary-custom" @click="saveProduct">
              {{ showEditModal ? ' Actualizar' : ' Guardar Producto' }}
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
      loading: false,
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
      this.loading = true
      try {
        this.products = await productService.getProducts()
      } catch (error) {
        console.error('Error loading products:', error)
        alert('❌ Error cargando productos')
      } finally {
        this.loading = false
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
          alert('✅ Producto eliminado correctamente')
        } catch (error) {
          console.error('Error deleting product:', error)
          alert('❌ Error eliminando producto')
        }
      }
    },
    async saveProduct() {
      // Validación
      if (!this.currentProduct.title || !this.currentProduct.description || !this.currentProduct.image) {
        alert('⚠️ Por favor completa todos los campos obligatorios')
        return
      }

      if (this.currentProduct.price <= 0) {
        alert('⚠️ El precio debe ser mayor a 0')
        return
      }

      try {
        if (this.showEditModal) {
          await productService.updateProduct(this.currentProduct.id, this.currentProduct)
          alert('✅ Producto actualizado correctamente')
        } else {
          await productService.createProduct(this.currentProduct)
          alert('✅ Producto creado correctamente')
        }
        await this.loadProducts()
        this.closeModal()
      } catch (error) {
        console.error('Error saving product:', error)
        alert('❌ Error guardando producto')
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

<style scoped>
.product-view {
  padding: 20px;
  margin-top: 20px;
}

.btn-lg {
  padding: 12px 24px;
  font-size: 16px;
}
</style>
