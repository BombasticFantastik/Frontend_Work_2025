<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { getCategories } from '../api/categories'
import { createPost, updatePost, getPostBySlug } from '../api/posts'

const props = defineProps(['slug'])
const router = useRouter()
const queryClient = useQueryClient()

const isEdit = computed(() => !!props.slug)

const form = ref({
  name: '',
  content: '',
  image_url: '',
  category_id: null,
})

const { data: categories } = useQuery({
  queryKey: ['categories'],
  queryFn: getCategories,
})

const { data: postData } = useQuery({
  queryKey: ['post', props.slug],
  queryFn: () => getPostBySlug(props.slug),
  enabled: isEdit.value,
})

watchEffect(() => {
  if (postData.value) {
    form.value = { ...postData.value }
  }
})

const mutation = useMutation({
  mutationFn: (data) => (isEdit.value ? updatePost(props.slug, data) : createPost(data)),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] })
    router.push('/')
  },
  onError: (error) => {
    alert('Ошибка сохранения: ' + (error.response?.data?.detail || error.message))
  },
})

const save = () => {
  mutation.mutate(form.value)
}
</script>

<template>
  <h2 class="text-2xl font-bold text-white mb-8">{{ isEdit ? 'Редактирование' : 'Создание' }} поста</h2>

  <form @submit.prevent="save" class="space-y-6 max-w-2xl">
    <div>
      <label class="block text-sm font-medium text-zinc-400 mb-1">Название</label>
      <input
        v-model="form.name"
        type="text"
        class="block w-full rounded-md border-zinc-800 bg-zinc-900 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
        placeholder="Введите название..."
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-zinc-400 mb-1">Категория</label>
      <select
        v-model="form.category_id"
        class="block w-full rounded-md border-zinc-800 bg-zinc-900 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
      >
        <option :value="null" disabled>Выберите категорию</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id" class="bg-zinc-900">
          {{ cat.name }}
        </option>
      </select>
      <p v-if="!categories?.length" class="text-xs text-rose-400 mt-2 flex items-center gap-1">
        Сначала создайте категории!
      </p>
    </div>

    <div>
      <label class="block text-sm font-medium text-zinc-400 mb-1">URL картинки</label>
      <input
        v-model="form.image_url"
        type="text"
        class="block w-full rounded-md border-zinc-800 bg-zinc-900 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
        placeholder="https://..."
      />
      <div v-if="form.image_url" class="mt-4 flex items-center gap-4 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
        <img :src="form.image_url" class="h-20 w-20 object-cover rounded-md border border-zinc-700 shadow-md" />
        <span class="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Превью изображения</span>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-zinc-400 mb-1">Текст поста</label>
      <textarea
        v-model="form.content"
        rows="6"
        class="block w-full rounded-md border-zinc-800 bg-zinc-900 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
        placeholder="О чем будет этот пост?"
      ></textarea>
    </div>

    <div class="flex justify-end gap-3 pt-6 border-t border-zinc-800">
      <router-link
        to="/"
        class="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors border border-zinc-700 rounded-md hover:bg-zinc-800"
      >
        Отмена
      </router-link>
      <button
        type="submit"
        class="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
      >
        {{ isEdit ? 'Сохранить изменения' : 'Опубликовать' }}
      </button>
    </div>
  </form>
</template>
