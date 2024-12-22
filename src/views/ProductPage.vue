<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" :alt="product.title">
    <p>Цена: {{ product.price }} ₽</p>
    <p>{{ product.description }}</p>
    <button @click="store.addToCart(product)">Добавить в корзину</button>
  </div>
  <div v-else>
    <p>Товар не найден</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useShopStore } from '../stores/shop.js'
import { ref, onMounted } from 'vue'

const route = useRoute()
const store = useShopStore()
const product = ref(null)

onMounted(() => {
  const productId = parseInt(route.params.id)
  product.value = store.getProductById(productId)
})
</script>