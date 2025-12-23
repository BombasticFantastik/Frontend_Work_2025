<script setup>
import { inject } from 'vue'
import { useShopStore } from './stores/shopStore'
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'

const product = inject('productContext')
const store = useShopStore()

const handleBuy = () => {
  store.buyProduct(product.id)
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :initialValue="product.meta.comment" />
    <LikeCount :initialValue="product.meta.like" />
    <ViewCount :initialValue="product.meta.view" />

    <button class="bg-black text-white p-2" @click="handleBuy">Купить</button>
  </div>
</template>
