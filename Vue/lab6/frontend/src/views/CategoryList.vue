<script setup>
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { getCategories, deleteCategory } from '../api/categories'
import BaseTable from '../components/BaseTable.vue'
import { useRouter } from 'vue-router'

const queryClient = useQueryClient()
const router = useRouter()

const {
  data: categories,
  isLoading,
  isError,
} = useQuery({
  queryKey: ['categories'],
  queryFn: getCategories,
})

const { mutate: removeCategory } = useMutation({
  mutationFn: deleteCategory,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
  },
  onError: (err) => alert('Ошибка удаления: ' + err.message),
})

const header = {
  id: 'ID',
  name: 'Название',
  actions: 'Действия',
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-white">Категории</h2>

      <router-link
        to="/categories/create"
        class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors shadow-lg shadow-indigo-500/10"
      >
        Создать категорию
      </router-link>
    </div>

    <div v-if="isLoading" class="text-zinc-500 animate-pulse">Загрузка...</div>
    <div v-else-if="isError" class="text-red-400">Ошибка загрузки данных</div>

    <BaseTable v-else :rows="categories" :header="header">
      <template #actions="{ row }">
        <div class="flex space-x-4">
          <button
            @click="router.push(`/categories/edit/${row.id}`)"
            class="text-sky-400 hover:text-sky-300 font-medium transition-colors"
          >
            Ред.
          </button>
          <button
            @click="removeCategory(row.id)"
            class="text-rose-400 hover:text-rose-300 font-medium transition-colors"
          >
            Удалить
          </button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>
