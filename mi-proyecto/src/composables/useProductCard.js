import { ref } from 'vue'

export function useProductCard() {
  const truncateDescription = (description) => {
    if (!description) return 'Descripción no disponible'
    return description.length > 100 
      ? description.substring(0, 100) + '...' 
      : description
  }

  const getCategoryLabel = (category) => {
    const categories = {
      'propiedad': '🏠 Propiedad',
      'experiencia': '🌌 Experiencia',
      'property': '🏠 Propiedad',
      'experience': '🌌 Experiencia'
    }
    return categories[category] || category
  }

  const handleAddToCartEffect = (event) => {
    const button = event?.target
    if (button) {
      const originalText = button.textContent
      const originalClass = button.className
      
      button.textContent = '✅ ¡Adquirido!'
      button.className = originalClass.replace('add-to-cart', 'btn-success')
      
      setTimeout(() => {
        button.textContent = originalText
        button.className = originalClass
      }, 2000)
    }
  }

  return {
    truncateDescription,
    getCategoryLabel,
    handleAddToCartEffect
  }
}