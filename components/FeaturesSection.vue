<template>
  <section class="section bg-gradient-to-br from-dark-900 to-dark-800 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir Davadiled?</h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Nos especializamos en ofrecer soluciones de iluminación LED de alta calidad que transforman cualquier espacio
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="text-center p-6 rounded-lg bg-dark-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r" :class="feature.gradientClass">
            <span class="text-2xl" v-html="feature.icon"></span>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-300">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Eficiencia Energética',
    description: 'Nuestros productos LED consumen hasta un 80% menos de energía que las bombillas tradicionales, ayudándote a ahorrar en tu factura eléctrica.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    gradientClass: 'from-primary-500 to-accent-500'
  },
  {
    title: 'Diseño Exclusivo',
    description: 'Cada lámpara está diseñada pensando en la estética y funcionalidad, convirtiéndose en elementos decorativos por sí mismos.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
    gradientClass: 'from-secondary-500 to-primary-500'
  },
  {
    title: 'Larga Duración',
    description: 'Nuestras lámparas LED tienen una vida útil de hasta 50,000 horas, lo que significa más de 15 años de uso regular sin necesidad de reemplazos.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    gradientClass: 'from-accent-500 to-secondary-500'
  },
  {
    title: 'Calidad Garantizada',
    description: 'Todos nuestros productos pasan por estrictos controles de calidad y ofrecemos 2 años de garantía en todas nuestras soluciones de iluminación.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>',
    gradientClass: 'from-primary-500 to-secondary-500'
  }
];
</script>

<style scoped>
.bg-dark-900, .bg-dark-800, .bg-dark-700 {
  background-color: var(--dark-color);
}

.from-primary-500, .to-primary-500 {
  --tw-gradient-from: var(--primary-color);
  --tw-gradient-to: var(--primary-color);
}

.from-secondary-500, .to-secondary-500 {
  --tw-gradient-from: var(--secondary-color);
  --tw-gradient-to: var(--secondary-color);
}

.from-accent-500, .to-accent-500 {
  --tw-gradient-from: var(--accent-color);
  --tw-gradient-to: var(--accent-color);
}
</style>