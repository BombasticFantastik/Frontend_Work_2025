<script setup>
import { computed } from 'vue'

const { all_operations } = defineProps({
  all_operations: null,
})

const all_earns = computed(() => {
  return all_operations
    .filter((t) => t.type === 'earn')
    .map((t) => t.value)
    .reduce((acc, v) => acc + v, 0)
})

const all_spends = computed(() => {
  return all_operations
    .filter((t) => t.type === 'spend')
    .map((t) => t.value)
    .reduce((acc, v) => acc + v, 0)
})

const balance = computed(() => {
  return all_earns.value - all_spends.value
})

const bankrupt = computed(() => balance.value < 0)
</script>

<template>
  <div class="bg-white shadow rounded-xl p-4 text-center">
    <h2 class="text-lg font-semibold mb-3">Сводка</h2>

    <div class="grid grid-cols-3 gap-4">
      <div>
        <p class="text-gray-500">Доходы</p>
        <p class="text-green-600 text-xl font-semibold">
          {{ all_earns }}
        </p>
      </div>
      <div>
        <p class="text-gray-500">Расходы</p>
        <p class="text-red-600 text-xl font-semibold">
          {{ all_spends }}
        </p>
      </div>
      <div>
        <p class="text-gray-500">Баланс</p>
        <p class="text-gray-800 text-xl font-semibold">
          {{ balance }}
        </p>
      </div>
    </div>

    <p v-if="bankrupt" class="mt-4 text-red-500 font-medium">⚠️ Ваш баланс отрицательный!</p>
  </div>
</template>
