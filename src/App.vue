<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col">
    <header class="bg-gray-800 mb-6">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <router-link 
          to="/" 
          class="text-blue-500 text-xl font-bold hover:text-blue-400"
        >
          ГЛАВНАЯ
        </router-link>
        <router-link 
          to="/cart" 
          class="text-blue-500 text-xl font-bold hover:text-blue-400 flex items-center gap-2"
        >
          КОРЗИНА
          <span v-if="cartItemsCount" class="bg-green-500 px-2 py-1 rounded-full text-sm">
            {{ cartItemsCount }}
          </span>
        </router-link>
      </nav>
    </header>
    <main class="container mx-auto px-4 flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useShopStore } from './stores/shop'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const store = useShopStore()
const { cartItemsCount } = storeToRefs(store)
const route = useRoute()

watch(
  () => route.name,
  (newName) => {
    document.title = getPageTitle(newName)
  },
  { immediate: true }
)

function getPageTitle(routeName) {
  switch(routeName) {
    case 'home':
      return 'Главная - Магазин альбомов'
    case 'cart':
      return 'Корзина - Магазин альбомов'
    default:
      return 'Магазин альбомов'
  }
}
</script>