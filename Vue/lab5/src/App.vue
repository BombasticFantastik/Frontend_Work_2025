<script setup>
import { storeToRefs } from 'pinia'
import { useShopStore } from './Feed/stores/shopStore'
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'

const store = useShopStore()
const { products } = storeToRefs(store)
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />

    <div class="grid grid-cols-2 gap-6">
      <FeedNode :product="product" v-for="product in products" :key="product.id" />
    </div>
  </div>
</template>
