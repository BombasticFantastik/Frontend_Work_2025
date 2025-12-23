<script setup>
import { inject } from 'vue'

const product = inject('productContext')
</script>

<template>
  <div class="text-sm">
    <div>Creator - {{ product.user.full_name }}</div>
    <div>MEdia count: {{ product.collection_medias.length }}</div>
  </div>
  <h2 class="text-lg font-extrabold">{{ product.name }}</h2>
</template>
