<script setup lang="ts">
import BudgetForm from './BudgetForm.vue'
import BudgetTable from './BudgetTable.vue'
import { ref, watch } from 'vue'

const all_operations = ref(JSON.parse(localStorage.getItem('all_operations')) ?? [])

watch(
  all_operations,
  (new_operation) => {
    localStorage.setItem('all_operations', JSON.stringify(new_operation))
  },
  {
    deep: true,
  },
)

function add(operation) {
  all_operations.value.push(operation)
}

function remove(id) {
  all_operations.value = all_operations.value.filter((operation) => operation.id !== id)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Калькулятор бюджета</h1>

    <div class="max-w-3xl mx-auto space-y-8">
      <BudgetForm @add="add" />
      <BudgetTable :all_operations="all_operations" @remove="remove" />
    </div>
  </div>
</template>
