// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Davadiled Oficial - Iluminación LED para el Hogar',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Especialistas en iluminación LED para el hogar. Ofrecemos lámparas y soluciones de iluminación modernas, eficientes y de alta calidad.' },
        { name: 'keywords', content: 'LED, iluminación, lámparas, hogar, eficiencia energética, lámparas de techo' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.tailwindcss.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})