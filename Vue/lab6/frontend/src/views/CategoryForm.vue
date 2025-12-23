<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useMutation, useQueryClient, useQuery } from '@tanstack/vue-query'
import { createCategory, updateCategory, getCategory } from '../api/categories'

const props = defineProps(['id'])

const router = useRouter()
const queryClient = useQueryClient()

const isEdit = computed(() => !!props.id)
const formData = ref({ name: '' })

const { data: existingCategory, refetch } = useQuery({
  queryKey: ['category', props.id],
  queryFn: () => getCategory(props.id),
  enabled: isEdit.value,
})

watchEffect(() => {
  if (existingCategory.value) {
    formData.value.name = existingCategory.value.name
  }
})

const mutation = useMutation({
  mutationFn: (data) => (isEdit.value ? updateCategory(props.id, data) : createCategory(data)),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
    router.push('/categories')
    //сделать refetch
  },
  onError: (error) => {
    alert('Ошибка: ' + (error.response?.data?.detail || error.message))
  },
})

const onSubmit = () => {
  mutation.mutate(formData.value)
}
</script>

<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-xl mb-4">{{ isEdit ? 'Редактировать' : 'Создать' }} категорию</h2>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label class="block text-sm">Название</label>
        <input
          v-model="formData.name"
          type="text"
          required
          placeholder="Введите категорию"
          class="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div class="flex justify-end space-x-3 pt-2">
        <router-link
          to="/categories"
          class="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Отмена
        </router-link>
        <button
          type="submit"
          :disabled="mutation.isPending.value"
          class="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {{ mutation.isPending.value ? 'Сохранение...' : isEdit ? 'Сохранить' : 'Создать' }}
        </button>
      </div>
    </form>
  </div>
</template>
