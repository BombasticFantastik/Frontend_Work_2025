<script setup>
import { ref } from 'vue'
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { getPosts, deletePost } from '../api/posts'
import BaseTable from '../components/BaseTable.vue'
import { refDebounced } from '@vueuse/core'

const queryClient = useQueryClient()
const search = ref('')
const debouncedSearch = refDebounced(search, 500)

const { data: posts, isLoading } = useQuery({
  queryKey: ['posts', debouncedSearch],
  queryFn: () => getPosts(debouncedSearch.value),
})

const { mutate: removePost } = useMutation({
  mutationFn: deletePost,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  onError: (err) => alert('Ошибка: ' + err.message),
})

const header = {
  image_url: 'Фото',
  name: 'Название',
  content: 'Контент',
  actions: 'Действия',
}
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <h2 class="text-2xl font-bold text-white">Посты</h2>

      <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
        <div class="relative flex-grow sm:flex-grow-0">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск по названию..."
            class="w-full sm:w-64 bg-zinc-900 border-zinc-800 text-zinc-200 rounded-md pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
          <span class="absolute left-3 top-2.5 text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        <router-link
          to="/create"
          class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-all font-medium text-sm flex items-center gap-2"
        >
          <span>+</span> Создать пост
        </router-link>
      </div>
    </div>

    <div v-if="isLoading" class="flex justify-center py-12">
      <div class="text-zinc-500 animate-pulse flex items-center gap-2">
        <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
        Загрузка...
      </div>
    </div>

    <BaseTable v-else :rows="posts" :header="header">
      <template #image_url="{ value }">
        <div class="relative w-12 h-12">
          <img :src="value" class="w-full h-full object-cover rounded-md border border-zinc-800 shadow-sm" alt="img" />
        </div>
      </template>

      <template #name="{ value, row }">
        <router-link
          :to="`/edit/${row.slug}`"
          class="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors decoration-indigo-400/30 underline-offset-4 hover:underline"
        >
          {{ value }}
        </router-link>
      </template>

      <template #content="{ value }">
        <span class="text-zinc-500 text-sm leading-relaxed">
          {{ value.length > 50 ? value.slice(0, 50) + '...' : value }}
        </span>
      </template>

      <template #actions="{ row }">
        <button
          @click="removePost(row.slug)"
          class="text-zinc-500 hover:text-rose-400 transition-colors p-1"
          title="Удалить пост"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </template>
    </BaseTable>
  </div>
</template>
