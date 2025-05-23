<template>
  <section id="productos" class="section bg-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nuestras Categorías</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra amplia gama de soluciones de iluminación LED para cada espacio de tu hogar
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(category, index) in categories" :key="index" class="card group">
          <div class="relative h-64 overflow-hidden">
            <img :src="category.image" :alt="category.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ category.title }}</h3>
            <p class="text-gray-600 mb-4">{{ category.description }}</p>
            <a :href="category.link" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800">
              Ver productos
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Lámparas de Techo',
    description: 'Iluminación elegante y funcional para el punto central de tus habitaciones.',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/productos/lamparas-techo'
  },
  {
    title: 'Iluminación de Pared',
    description: 'Apliques y lámparas de pared que añaden carácter y luz indirecta a tus espacios.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/productos/iluminacion-pared'
  },
  {
    title: 'Lámparas de Mesa',
    description: 'Diseños modernos y funcionales para iluminar tus escritorios y mesitas de noche.',
    image: 'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/productos/lamparas-mesa'
  },
  {
    title: 'Tiras LED',
    description: 'Iluminación flexible y decorativa para crear ambientes únicos en cualquier espacio.',
    image: 'https://images.pexels.com/photos/7005442/pexels-photo-7005442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/productos/tiras-led'
  },
  {
    title: 'Iluminación Exterior',
    description: 'Soluciones resistentes a la intemperie para jardines, terrazas y fachadas.',
    image: 'https://images.pexels.com/photos/2098911/pexels-photo-2098911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/productos/iluminacion-exterior'
  },
  {
    title: 'Iluminación Inteligente',
    description: 'Control por voz, aplicación móvil y automatización para tu hogar conectado.',
    image: 'https://images.pexels.com/photos/4277403/pexels-photo-4277403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/productos/iluminacion-inteligente'
  }
];
</script>

<style scoped>
.bg-light {
  background-color: var(--light-color);
}

.bg-dark-900 {
  background-color: rgba(13, 17, 23, 0.9);
}

.text-primary-600 {
  color: var(--primary-color);
}

.text-primary-800 {
  color: #0098a3;
}
</style>