<template>
  <div class="card h-100 shadow-sm">
    <img :src="product.image" class="card-img-top product-image" :alt="product.title">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text flex-grow-1">{{ truncateDescription(product.description) }}</p>
      <div class="mt-auto">
        <p class="h5 text-primary-custom">${{ product.price }}</p>
        <p class="badge bg-secondary">{{ product.category }}</p>
        <div class="btn-group w-100 mt-2">
          <button class="btn btn-outline-primary btn-sm" @click="$emit('edit', product)">
            Editar
          </button>
          <button class="btn btn-outline-danger btn-sm" @click="$emit('delete', product.id)">
            Eliminar
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
      return description.length > 100 
        ? description.substring(0, 100) + '...' 
        : description
    }
  }
}
</script>

<style scoped>
.product-image {
  height: 200px;
  object-fit: cover;
}
</style>