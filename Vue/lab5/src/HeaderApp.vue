<script setup>
import { storeToRefs } from 'pinia'
import { useShopStore } from './Feed/stores/shopStore'

const store = useShopStore()
const { sum } = storeToRefs(store)
</script>
<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ sum }}</div>
</template>
