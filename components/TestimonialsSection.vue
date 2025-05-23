<template>
  <section class="section bg-gradient-to-br from-dark-900 to-dark-800 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Experiencias reales de clientes que han transformado sus espacios con nuestras soluciones de iluminación
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="p-6 rounded-lg bg-dark-700 bg-opacity-50">
          <div class="flex mb-4">
            <div v-for="i in 5" :key="i" class="text-yellow-400 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 italic">"{{ testimonial.comment }}"</p>
          
          <div class="flex items-center">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover">
            <div class="ml-4">
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <p class="text-gray-400 text-sm">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'María González',
    location: 'Madrid',
    comment: 'Renovamos toda la iluminación de nuestra casa con productos de Davadiled y no podríamos estar más satisfechos. La calidad es excelente y el ahorro en la factura de luz es notable desde el primer mes.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Barcelona',
    comment: 'Las tiras LED que instalé en mi salón han transformado completamente el ambiente. El servicio de asesoramiento fue muy profesional y me ayudaron a elegir exactamente lo que necesitaba.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Laura Martínez',
    location: 'Valencia',
    comment: 'Compré varias lámparas de techo para mi nuevo apartamento y son preciosas. La luz que emiten es muy agradable y el diseño es moderno y elegante, justo lo que buscaba.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];
</script>

<style scoped>
.bg-dark-900, .bg-dark-800, .bg-dark-700 {
  background-color: var(--dark-color);
}

.text-yellow-400 {
  color: #facc15;
}
</style>