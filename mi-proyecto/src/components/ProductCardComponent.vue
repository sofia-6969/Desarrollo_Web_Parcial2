<template>
  <div class="card h-100 shadow-sm product-card">
    <img :src="product.image" class="card-img-top product-image" :alt="product.title">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text flex-grow-1">{{ truncateDescription(product.description) }}</p>
      <div class="mt-auto">
        <p class="h5 text-primary-custom mb-2">${{ product.price }}</p>
        <span class="badge bg-secondary mb-3">{{ getCategoryName(product.category) }}</span>
        <div class="btn-group w-100">
          <button class="btn btn-outline-primary btn-sm" @click="$emit('edit', product)">
            ✏️ Editar
          </button>
          <button class="btn btn-outline-danger btn-sm" @click="$emit('delete', product.id)">
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    truncateDescription(description) {
      if (!description) return ''
      return description.length > 100 
        ? description.substring(0, 100) + '...' 
        : description
    },
    getCategoryName(category) {
      const categories = {
        'juguetes': 'Juguetes',
        'lenceria': 'Lencería',
        'cosmetica': 'Cosmética',
        'cuidado': 'Cuidado'
      }
      return categories[category] || category
    }
  }
}
</script>

<style scoped>
.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.product-image {
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.card-title {
  color: var(--primary-color);
  font-weight: 600;
}

.btn-group .btn {
  flex: 1;
}
</style>