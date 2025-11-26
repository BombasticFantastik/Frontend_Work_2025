<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const value = ref('')
const type = ref('')

const emit = defineEmits({
  add: null,
})

function add_operation({ name, value, type }) {
  if (name.length === 0) return
  if (typeof value !== 'number' || value === 0) return
  if (!['earn', 'spend'].includes(type)) return
  emit('add', { name, value, type, id: new Date() })
}
</script>

<template>
  <div class="bg-white shadow rounded-xl p-4 flex flex-row gap-4">
    <input type="text" placeholder="Название" class="border p-2 flex-1" v-model="name" />

    <input type="number" placeholder="Сумма" class="border p-2 w-32" min="0" v-model="value" />

    <select class="border p-2 w-32" v-model="type">
      <option value="earn">Доход</option>
      <option value="spend">Расход</option>
    </select>

    <button
      type="button"
      class="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 operation"
      @click="add_operation({ name, value, type })"
    >
      Добавить
    </button>
  </div>
</template>
