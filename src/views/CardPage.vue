<template>
  <div class="h-[calc(100vh-8rem)] max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Корзина</h1>
    <div v-if="cart.length" class="space-y-4">
      <div v-for="item in cart" :key="item.id" 
           class="bg-gray-800 p-4 rounded-lg flex items-center justify-between shadow-lg hover:bg-gray-700 transition-colors">
        <div class="flex items-center gap-4">
          <img :src="item.image" :alt="item.title" class="w-24 h-24 object-cover rounded shadow">
          <div>
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <p class="text-gray-400">Цена: {{ item.price }} ₽</p>
          </div>
        </div>
        <button 
          @click="store.removeFromCart(item.id)"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Удалить
        </button>
      </div>
      <div class="text-xl font-bold mt-6 p-4 bg-gray-800 rounded-lg">
        Итого: {{ totalPrice }} ₽
      </div>
    </div>
    <div v-else class="mt-8 bg-gray-800 rounded-lg p-8 text-center">
      <p class="text-xl text-gray-400">Корзина пуста</p>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from '../stores/shop'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useShopStore()
const { cart } = storeToRefs(store)

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0)
})
</script>