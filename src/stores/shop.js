import { defineStore } from 'pinia'
import { products } from '../data/products'

export const useShopStore = defineStore('shop', {
  state: () => ({
    products: products,
    cart: []
  }),
  
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price, 0)
    },
    
    cartItemsCount: (state) => {
      return state.cart.length
    }
  },
  
  actions: {
    addToCart(product) {
      this.cart.push(product)
    },
    
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
    },
    
    getProductById(id) {
      return this.products.find(product => product.id === id)
    }
  }
})