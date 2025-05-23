<template>
  <div>
    <AppHeader />
    <main class="pt-20">
      <section class="section bg-light">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl md:text-4xl font-bold text-center mb-12">Iluminación para el Hogar</h1>
          <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Esta página está en construcción. Pronto podrás encontrar aquí toda nuestra información sobre iluminación para el hogar.
          </p>
          <div class="text-center">
            <NuxtLink to="/" class="btn btn-primary">Volver a la página principal</NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Home lighting page component
</script>

<style scoped>
.bg-light {
  background-color: var(--light-color);
}
</style>