<script setup>
import { ref, computed } from 'vue'
import TextQuestion from './form/TextQuestion.vue'
import SelectQuestion from './form/SelectQuestion.vue'

const emit = defineEmits(['create'])

const id = ref('')
const title = ref('')
const description = ref('')
const type = ref('radio')
const placeholder = ref('')
const options = ref([{ label: '', value: '' }])

const typeOptions = [
  { value: 'radio', label: 'Выбор (radio)' },
  { value: 'checkbox', label: 'Выбор нескольких (checkbox)' },
  { value: 'select', label: 'Выбор (select)' },
  { value: 'text', label: 'Текстовый (text)' },
]

function addOption() {
  options.value.push({ label: '', value: '' })
}

function removeOption(i) {
  options.value.splice(i, 1)
}

const canCreate = computed(() => {
  if (!id.value || !title.value || !type.value) return false

  if (type.value === 'text' && placeholder.value.length > 0) return true

  return options.value.every((o) => o.label.length > 0 && o.value.length > 0)
})

function createQuestion(id, title, description, type, value) {
  if (!canCreate.value) return

  const key = type === 'text' ? 'placeholder' : 'options'
  emit('create', { id, title, description, type, [key]: value })
  reset()
}

function reset() {
  id.value = ''
  title.value = ''
  description.value = ''
  type.value = 'radio'
  placeholder.value = ''
  options.value = [{ label: '', value: '' }]
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow p-6 col-span-2">
    <h2 class="text-xl font-semibold mb-4">Добавить вопрос</h2>
    <form class="space-y-3">
      <TextQuestion placeholder="ID вопроса" v-model="id" />
      <TextQuestion placeholder="Заголовок вопроса" v-model="title" />
      <TextQuestion placeholder="Описание вопроса" v-model="description" />
      <SelectQuestion :options="typeOptions" v-model="type" />
      <TextQuestion placeholder="Placeholder" v-model="placeholder" v-if="type === 'text'" />
      <div v-else class="space-y-3">
        <div v-for="(option, i) in options" :key="i" class="flex gap-2">
          <TextQuestion placeholder="Label" v-model="option.label" />
          <TextQuestion placeholder="Value" v-model="option.value" />
          <button
            class="px-4 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer border"
            @click.prevent="removeOption(i)"
            v-if="options.length > 1"
          >
            X
          </button>
        </div>
        <button
          class="mt-6 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
          @click.prevent="addOption"
        >
          Добавить вариант
        </button>
      </div>
    </form>
    <button
      class="mt-6 px-4 py-2 rounded bg-gray-100 enabled:hover:bg-gray-200 cursor-pointer disabled:cursor-not-allowed"
      :disabled="!canCreate"
      @click="createQuestion(id, title, description, type, type === 'text' ? placeholder : options)"
    >
      Добавить вопрос
    </button>
  </div>
</template>
