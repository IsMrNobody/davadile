```vue
<template>
  <div>
    <AppHeader />
    <main class="pt-20">
      <section class="section bg-light">
        <div class="container mx-auto px-4">
          <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Product Image Section -->
            <div class="relative">
              <div class="aspect-square overflow-hidden rounded-lg bg-white">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                v-if="product.discount"
                class="absolute top-4 right-4 bg-primary-500 text-dark-900 px-4 py-2 rounded-full font-medium text-lg"
              >
                {{ product.discount }}% OFF
              </div>
            </div>

            <!-- Product Details Section -->
            <div>
              <div class="mb-6">
                <span
                  class="bg-dark-900 text-white text-sm px-3 py-1 rounded-full"
                  >{{ product.category }}</span
                >
              </div>
              <h1 class="text-3xl md:text-4xl font-bold mb-4">
                {{ product.name }}
              </h1>
              <p class="text-xl text-gray-600 mb-8">
                {{ product.description }}
              </p>

              <!-- Price Section -->
              <div class="mb-8">
                <div class="flex items-baseline gap-4">
                  <span
                    v-if="product.oldPrice"
                    class="text-xl text-gray-400 line-through"
                    >${{ product.oldPrice }}</span
                  >
                  <span class="text-3xl font-bold text-secondary-500"
                    >${{ product.price }}</span
                  >
                </div>
              </div>

              <!-- Features List -->
              <div class="mb-8">
                <h2 class="text-xl font-semibold mb-4">Características</h2>
                <ul class="space-y-3">
                  <li
                    v-for="(feature, index) in product.features"
                    :key="index"
                    class="flex items-start"
                  >
                    <span class="text-primary-500 mr-2">✓</span>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Technical Specifications -->
              <div class="mb-8">
                <h2 class="text-xl font-semibold mb-4">
                  Especificaciones Técnicas
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    v-for="(spec, key) in product.specifications"
                    :key="key"
                    class="bg-white p-4 rounded-lg"
                  >
                    <span class="text-sm text-gray-600">{{ key }}</span>
                    <p class="font-medium">{{ spec }}</p>
                  </div>
                </div>
              </div>

              <!-- Add to Cart Section -->
              <div class="flex gap-4">
                <div
                  class="flex items-center border border-gray-300 rounded-lg"
                >
                  <button
                    @click="quantity > 1 ? quantity-- : null"
                    class="px-4 py-2 text-gray-600 hover:text-primary-500"
                  >
                    -
                  </button>
                  <span class="px-4 py-2 border-x border-gray-300">{{
                    quantity
                  }}</span>
                  <button
                    @click="quantity++"
                    class="px-4 py-2 text-gray-600 hover:text-primary-500"
                  >
                    +
                  </button>
                </div>
                <button class="btn btn-primary flex-grow" @click="consultarPorWhatsapp">
                  Consultar Producto
                </button>
              </div>
            </div>
          </div>

          <!-- Related Products -->
          <div class="mt-16">
            <h2 class="text-2xl font-bold mb-8">Productos Relacionados</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="relatedProduct in relatedProducts"
                :key="relatedProduct.id"
                class="card group"
              >
                <div class="relative h-64 overflow-hidden">
                  <img
                    :src="relatedProduct.image"
                    :alt="relatedProduct.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    v-if="relatedProduct.discount"
                    class="absolute top-2 right-2 bg-primary-500 text-dark-900 px-3 py-1 rounded-full font-medium"
                  >
                    {{ relatedProduct.discount }}% OFF
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">
                    {{ relatedProduct.name }}
                  </h3>
                  <p class="text-gray-600 mb-4">
                    {{ relatedProduct.description }}
                  </p>
                  <div class="flex justify-between items-center">
                    <div>
                      <span
                        v-if="relatedProduct.oldPrice"
                        class="text-gray-400 line-through mr-2"
                        >${{ relatedProduct.oldPrice }}</span
                      >
                      <span class="text-xl font-bold text-secondary-500"
                        >${{ relatedProduct.price }}</span
                      >
                    </div>
                    <NuxtLink
                      :to="`/productos/${relatedProduct.id}`"
                      class="btn btn-primary"
                      >Ver Detalles</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products';
import { computed, ref } from 'vue';

const route = useRoute();
const quantity = ref(1);
const productsStore = useProductsStore();

const product = computed(() => productsStore.getById(route.params.id));
const relatedProducts = computed(() => {
  if (!product.value) return [];
  return productsStore.getRelated(product.value.category, product.value.id);
});

const consultarPorWhatsapp = () => {
  if (!product.value) return;
  const numero = '584126698258'; // Cambia este número al tuyo o al de tu empresa
  const mensaje = `Hola, quiero consultar sobre el producto: ${product.value.name}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};
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

.text-primary-500 {
  color: var(--primary-color);
}

.text-secondary-500 {
  color: var(--secondary-color);
}
</style>
```
