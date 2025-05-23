<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
  >
    <!-- Background lighting effect -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800 opacity-80"
    ></div>

    <!-- Lighting animation effects -->
    <div
      class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 filter blur-3xl opacity-20 animate-pulse"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-secondary-500 filter blur-3xl opacity-20 animate-pulse"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-accent-500 filter blur-3xl opacity-20 animate-pulse"
      style="animation-delay: 2s"
    ></div>

    <div class="container relative z-10 px-4 py-16 md:py-32 text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
        Ilumina tu hogar con <span class="text-primary-500 glow">Dava</span
        ><span class="text-secondary-500 glow">di</span
        ><span class="text-accent-500 glow">led</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
        Soluciones de iluminación LED modernas, eficientes y con diseños
        exclusivos para cada espacio de tu hogar
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/productos" class="btn btn-primary light-effect"
          >Ver Productos</NuxtLink
        >
        <NuxtLink to="/contacto" class="btn btn-secondary"
          >Contáctanos</NuxtLink
        >
      </div>
    </div>

    <!-- Arrow down for scroll indication -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <a href="/productos" class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.bg-dark,
.bg-dark-900,
.bg-dark-800 {
  background-color: var(--dark-color);
}

.text-primary-500 {
  color: var(--primary-color);
}

.text-secondary-500 {
  color: var(--secondary-color);
}

.text-accent-500 {
  color: var(--accent-color);
}

.bg-primary-500 {
  background-color: var(--primary-color);
}

.bg-secondary-500 {
  background-color: var(--secondary-color);
}

.bg-accent-500 {
  background-color: var(--accent-color);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%) translateX(-50%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0) translateX(-50%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
