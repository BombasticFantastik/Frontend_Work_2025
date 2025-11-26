<script setup>
import { computed, ref } from 'vue'
import BudgetSummary from './BudgetSummary.vue'

const emit = defineEmits({
  remove: null,
})

const { all_operations } = defineProps({
  all_operations: null,
})

const sort_type = ref('no')

function sort_update() {
  switch (sort_type.value) {
    case 'no':
      sort_type.value = 'asc'
      break
    case 'ask':
      sort_type.value = 'asc'
      break
    case 'desc':
      sort_type.value = 'no'
      break
  }
}

const sorted_operations = computed(() => {
  const new_operations = [...all_operations]
  if (sort_type.value === 'asc') {
    new_operations.sort(
      (a, b) => (a.type === 'earn' ? 1 : -1) * a.value - (b.type === 'earn' ? 1 : -1) * b.value,
    )
  }
  if (sort_type.value === 'desc') {
    new_operations.sort(
      (a, b) => (b.type === 'earn' ? 1 : -1) * b.value - (a.type === 'earn' ? 1 : -1) * a.value,
    )
  }
  return new_operations
})
</script>

<template>
  <div class="bg-white shadow rounded-xl p-4">
    <h2 class="text-lg font-semibold mb-3">Операции</h2>

    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b">
          <th class="p-2">Название</th>
          <th class="p-2">Тип</th>
          <th class="p-2">Сумма</th>
          <th class="p-2">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b" v-for="operation in sorted_operations" :key="operation.id">
          <td class="p-2">{{ operation.name }}</td>

          <!-- либо доход либо расход -->
          <td class="p-2 text-green-600 font-medium" v-if="operation.type === 'earn'">Доход</td>
          <td class="p-2 text-red-600 font-medium" v-else>Расход</td>

          <td class="p-2" v-if="operation.type === 'earn'">+{{ operation.value }}</td>
          <td class="p-2" v-else>-{{ operation.value }}</td>

          <td class="p-2 text-sm text-red-500 cursor-pointer">
            <button @click="emit('remove', operation.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <BudgetSummary :all_operations="all_operations" />
</template>
