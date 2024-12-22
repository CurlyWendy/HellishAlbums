<script setup>
import { useShopStore } from '../stores/shop.js'
import { storeToRefs } from 'pinia'


const store = useShopStore()
const { products } = storeToRefs(store)
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6">Список товаров</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" 
           :key="product.id" 
           class="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
        <img :src="product.image" 
             :alt="product.title" 
             class="w-full h-48 object-cover mb-4">
        <p class="text-gray-600 mb-4">Цена: {{ product.price }} ₽</p>
        <div class="flex gap-2">
          <router-link 
            :to="`/product/${product.id}`"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Посмотреть
          </router-link>
          <button 
            @click="store.addToCart(product)"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>