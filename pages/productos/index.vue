```vue
<template>
  <div>
    <AppHeader />
    <main class="pt-20">
      <section class="section bg-light">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">Nuestros Productos</h1>
          
          <!-- Filters -->
          <div class="mb-12">
            <div class="flex flex-wrap gap-4 justify-center">
              <button 
                v-for="category in categories" 
                :key="category"
                @click="selectedCategory = category"
                class="px-4 py-2 rounded-full transition-all duration-300"
                :class="selectedCategory === category ? 'bg-primary-500 text-dark-900' : 'bg-dark-900 text-white hover:bg-primary-500 hover:text-dark-900'"
              >
                {{ category }}
              </button>
            </div>
          </div>
          
          <!-- Products Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="product in filteredProducts" 
              :key="product.id" 
              class="card group"
            >
              <NuxtLink :to="`/productos/${product.id}`">
                <div class="relative h-64 overflow-hidden">
                  <img 
                    :src="product.image" 
                    :alt="product.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  >
                  <div 
                    v-if="product.discount" 
                    class="absolute top-2 right-2 bg-primary-500 text-dark-900 px-3 py-1 rounded-full font-medium"
                  >
                    {{ product.discount }}% OFF
                  </div>
                </div>
                
                <div class="p-6">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-xl font-semibold">{{ product.name }}</h3>
                    <span class="bg-dark-900 text-white text-sm px-2 py-1 rounded">{{ product.category }}</span>
                  </div>
                  <p class="text-gray-600 mb-4">{{ product.description }}</p>
                  <div class="flex items-end justify-between">
                    <div class="flex flex-col">
                      <span v-if="product.oldPrice" class="text-gray-400 line-through">${{ product.oldPrice }}</span>
                      <span class="text-xl font-bold text-secondary-500">${{ product.price }}</span>
                    </div>
                    <button class="btn btn-primary">Ver Detalles</button>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductsStore } from '@/stores/products';

const categories = ['Todos', 'Lámparas', 'Apliques', 'Plafones', 'Tiras', 'Iluminación Exterior', 'Iluminación Inteligente'];
const selectedCategory = ref('Todos');

const store = useProductsStore();

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return store.products;
  }
  return store.products.filter(product => product.category === selectedCategory.value);
});

</script>

<style scoped>
.bg-light {
  background-color: var(--light-color);
}

.bg-dark-900 {
  background-color: var(--dark-color);
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

.hover\:bg-primary-500:hover {
  background-color: var(--primary-color);
}
</style>
```