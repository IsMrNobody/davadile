<template>
  <section class="section bg-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Productos Destacados</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestras soluciones de iluminación LED más populares
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(product, index) in products" :key="index" class="card group">
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            >
            <div class="absolute top-2 right-2 bg-primary-500 text-dark-900 px-3 py-1 rounded-full font-medium">
              {{ product.discount ? `${product.discount}% OFF` : 'Nuevo' }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <div>
                <span v-if="product.oldPrice" class="text-gray-400 line-through mr-2">${{ product.oldPrice }}</span>
                <span class="text-xl font-bold text-secondary-500">${{ product.price }}</span>
              </div>
              <button @click="goToProduct(product.id)" class="btn btn-primary py-2 px-4">Ver Detalles</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a href="/productos" class="btn btn-secondary">Ver Todos los Productos</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProductsStore } from '~/stores/products';
import { useRouter } from 'vue-router';

const productsStore = useProductsStore();
const products = productsStore.products;
const router = useRouter();

function goToProduct(productId) {
  router.push(`/productos/${productId}`);
}
</script>

<style scoped>
.bg-light {
  background-color: var(--light-color);
}

.text-dark-900 {
  color: var(--dark-color);
}

.bg-primary-500 {
  background-color: var(--primary-color);
}

.text-secondary-500 {
  color: var(--secondary-color);
}
</style>