<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="{
      'bg-opacity-90 bg-dark shadow-lg': scrolled,
      'bg-transparent': !scrolled,
    }"
  >
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-20">
        <NuxtLink to="/" class="flex items-center">
          <span
            class="text-2xl font-bold transition-colors duration-300"
            :class="scrolled ? 'text-white' : 'text-primary'"
          >
            Dava<span class="text-secondary">di</span
            ><span class="text-accent">led</span>
          </span>
        </NuxtLink>

        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-8">
          <!-- <NuxtLink
            to="/"
            class="text-lg font-medium transition-colors duration-200"
            :class="
              scrolled
                ? 'text-white hover:text-primary-400'
                : 'text-white hover:text-primary-400'
            "
          >
            Inicio
          </NuxtLink> -->

          <!-- Products Dropdown -->
          <div class="relative group">
            <button
              class="text-lg font-medium transition-colors duration-200 flex items-center"
              :class="
                scrolled
                  ? 'text-white hover:text-primary-400'
                  : 'text-black hover:text-primary-400'
              "
            >
              Productos
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute left-0 mt-2 w-64 bg-dark-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0"
            >
              <div class="py-2">
                <NuxtLink
                  v-for="category in productCategories"
                  :key="category.path"
                  :to="category.path"
                  class="block px-4 py-2 text-white hover:bg-primary-500 hover:text-dark-900 transition-colors duration-200"
                >
                  {{ category.name }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- <NuxtLink 
            to="/iluminacion-hogar" 
            class="text-lg font-medium transition-colors duration-200"
            :class="scrolled ? 'text-white hover:text-primary-400' : 'text-white hover:text-primary-400'"
          >
            Iluminación para el Hogar
          </NuxtLink>
          
          <NuxtLink 
            to="/nosotros" 
            class="text-lg font-medium transition-colors duration-200"
            :class="scrolled ? 'text-white hover:text-primary-400' : 'text-white hover:text-primary-400'"
          >
            Nosotros
          </NuxtLink> -->

          <NuxtLink
            to="/contacto"
            class="text-lg font-medium transition-colors duration-200"
            :class="
              scrolled
                ? 'text-white hover:text-primary-400'
                : 'text-black hover:text-primary-400'
            "
          >
            Contacto
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden focus:outline-none"
          :class="scrolled ? 'text-white' : 'text-black'"
          @click="toggleMobileMenu"
        >
          <span v-if="!mobileMenuOpen" class="block h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <span v-else class="block h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </nav>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="[mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0', scrolled ? 'bg-black' : 'bg-white']"
    >
      <div class="container mx-auto px-4">
        <NuxtLink
          to="/"
          class="block py-3 text-white hover:text-primary-400 text-lg"
          @click="closeMobileMenu"
        >
          Inicio
        </NuxtLink>

        <!-- Mobile Products Dropdown -->
        <div class="relative">
          <button
            @click="toggleMobileProductsMenu"
            class="w-full flex justify-between items-center py-3 text-lg transition-colors duration-300"
            :class="scrolled ? 'text-white hover:text-primary-400' : 'text-black hover:text-primary-400'"
          >
            Productos
            <svg
              class="w-4 h-4 ml-1 transform transition-transform duration-200"
              :class="{ 'rotate-180': mobileProductsOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div v-if="mobileProductsOpen" class="pl-4 pb-2">
            <NuxtLink
              v-for="category in productCategories"
              :key="category.path"
              :to="category.path"
              class="block py-2 text-lg transition-colors duration-300"
              :class="scrolled ? 'text-white hover:text-primary-400' : 'text-black hover:text-primary-400'"
              @click="closeMobileMenu"
            >
              {{ category.name }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          to="/iluminacion-hogar"
          class="block py-3 text-lg transition-colors duration-300"
          :class="scrolled ? 'text-white hover:text-primary-400' : 'text-black hover:text-primary-400'"
          @click="closeMobileMenu"
        >
          Iluminación para el Hogar
        </NuxtLink>

        <NuxtLink
          to="/nosotros"
          class="block py-3 text-lg transition-colors duration-300"
          :class="scrolled ? 'text-white hover:text-primary-400' : 'text-black hover:text-primary-400'"
          @click="closeMobileMenu"
        >
          Nosotros
        </NuxtLink>

        <NuxtLink
          to="/contacto"
          class="block py-3 text-lg transition-colors duration-300"
          :class="scrolled ? 'text-white hover:text-primary-400' : 'text-black hover:text-primary-400'"
          @click="closeMobileMenu"
        >
          Contacto
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const scrolled = ref(false);
const mobileMenuOpen = ref(false);
const mobileProductsOpen = ref(false);

const productCategories = [
  { name: "Lámparas de Techo", path: "/productos/lamparas-techo" },
  { name: "Iluminación de Pared", path: "/productos/iluminacion-pared" },
  { name: "Lámparas de Mesa", path: "/productos/lamparas-mesa" },
  { name: "Tiras LED", path: "/productos/tiras-led" },
  { name: "Iluminación Exterior", path: "/productos/iluminacion-exterior" },
  {
    name: "Iluminación Inteligente",
    path: "/productos/iluminacion-inteligente",
  },
  { name: "Todos los Productos", path: "/productos" },
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (!mobileMenuOpen.value) {
    mobileProductsOpen.value = false;
  }
};

const toggleMobileProductsMenu = () => {
  mobileProductsOpen.value = !mobileProductsOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  mobileProductsOpen.value = false;
};

// Handle scroll for header background change
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
</script>

<style scoped>
.bg-dark {
  background-color: var(--dark-color);
}
.bg-black {
  background-color: #111 !important;
}
.bg-white {
  background-color: #fff !important;
}
.text-primary-400,
.text-primary-500 {
  color: var(--primary-color);
}
.text-secondary-500 {
  color: var(--secondary-color);
}
.hover\:bg-primary-500:hover {
  background-color: var(--primary-color);
}
</style>
