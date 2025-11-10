<template>
  <div class="card product-card h-100" :class="{ 'featured': isFeatured }">
    <div class="product-image">
      <img :src="product.image" class="card-img-top product-img" :alt="product.title">
    </div>
    <div class="card-body product-content d-flex flex-column">
      <h5 class="card-title product-title">{{ product.title }}</h5>
      <p class="card-text product-description flex-grow-1">{{ truncatedDescription }}</p>
      
      <div class="product-meta d-flex justify-content-between align-items-center mb-3">
        <span class="product-price">₡{{ formattedPrice }}</span>
        <span class="badge product-category">{{ categoryLabel }}</span>
      </div>

      <div class="rating mb-2" v-if="product.rating">
        <span class="text-warning">⭐ {{ product.rating.rate }}</span>
        <small class="text-muted ms-1">({{ product.rating.count }})</small>
      </div>
      
      <button class="btn add-to-cart w-100 mt-auto" @click="handleAddToCart">
        🚀 Adquirir
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useProductCard } from '@/composables/useProductCard'

export default {
  name: 'ProductCardComponent',
  props: {
    product: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.title && value.price && value.category
      }
    }
  },
  emits: ['add-to-cart'],
  setup(props, { emit }) {
    const { 
      truncateDescription, 
      getCategoryLabel, 
      handleAddToCartEffect 
    } = useProductCard()

    const truncatedDescription = computed(() => 
      truncateDescription(props.product.description)
    )

    const categoryLabel = computed(() => 
      getCategoryLabel(props.product.category)
    )

    const formattedPrice = computed(() => 
      props.product.price.toLocaleString()
    )

    const isFeatured = computed(() => 
      props.product.rating?.rate > 4.5
    )

    const handleAddToCart = (event) => {
      emit('add-to-cart', props.product)
      handleAddToCartEffect(event)
    }

    return {
      truncatedDescription,
      categoryLabel,
      formattedPrice,
      isFeatured,
      handleAddToCart
    }
  }
}
</script>

<style scoped>
/* SOLO estilos específicos del componente que no están en product-card.scss */
/* La mayoría de los estilos están en el archivo modular */
</style>