import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Lámpara Colgante Nebula',
        description: 'Lámpara LED moderna con diseño de esferas múltiples y acabado en negro mate.',
        image: 'https://i.pinimg.com/736x/ba/0b/06/ba0b06e572d30f37e2ca62652726b03e.jpg',
        price: '129.99',
        oldPrice: '159.99',
        discount: 20,
        category: 'Lámparas',
      },
      {
        id: 2,
        name: 'Aplique LED Nova',
        description: 'Aplique de pared con iluminación regulable y diseño minimalista para interiores.',
        image: 'https://i.pinimg.com/736x/f8/64/44/f8644401f31baab0d71ee3c73b32b3b0.jpg',
        price: '79.99',
        oldPrice: null,
        discount: null,
        category: 'Apliques',
      },
      {
        id: 3,
        name: 'Lámpara de Mesa Orion',
        description: 'Lámpara de mesa con base de mármol y pantalla textil. Iluminación LED integrada.',
        image: 'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '89.99',
        oldPrice: '119.99',
        discount: 25,
        category: 'Lámparas',
      },
      {
        id: 4,
        name: 'Tira LED RGB Aurora',
        description: 'Tira LED de 5m con control por aplicación y cambio de colores. Compatible con asistentes de voz.',
        image: 'https://i.pinimg.com/736x/3f/4e/90/3f4e90d912b468888e266b309e5bd94c.jpg',
        price: '49.99',
        oldPrice: '69.99',
        discount: 30,
        category: 'Tiras',
      },
      {
        id: 5,
        name: 'Lámpara de Pie Eclipse',
        description: 'Lámpara de pie con brazo ajustable y base de mármol. Iluminación LED de alta intensidad.',
        image: 'https://i.pinimg.com/736x/3f/a7/c6/3fa7c6c99379cc96de0ba9666eeb6550.jpg',
        price: '149.99',
        oldPrice: null,
        discount: null,
        category: 'Lámparas',
      },
      {
        id: 6,
        name: 'Plafón LED Cosmos',
        description: 'Plafón de techo ultradelgado con cambio de temperatura de color y control remoto.',
        image: 'https://i.pinimg.com/736x/23/18/1b/23181b0c3aa2e53353bb4a96b4d679bb.jpg',
        price: '119.99',
        oldPrice: '149.99',
        discount: 20,
        category: 'Plafones',
      }
    ]
  }),
  getters: {
    getById: (state) => (id) => state.products.find(p => p.id === Number(id)),
    getRelated: (state) => (category, excludeId) => state.products.filter(p => p.category === category && p.id !== excludeId).slice(0, 3)
  },
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    updateProduct(id, data) {
      const idx = this.products.findIndex(p => p.id === id);
      if (idx !== -1) this.products[idx] = { ...this.products[idx], ...data };
    },
    removeProduct(id) {
      this.products = this.products.filter(p => p.id !== id);
    }
  }
});
