import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostList.vue'
import PostForm from '../views/PostForm.vue'
import CategoryList from '../views/CategoryList.vue'
import CategoryForm from '../views/CategoryForm.vue'

const routes = [
  { path: '/', name: 'home', component: PostList },
  { path: '/create', name: 'post-create', component: PostForm },
  { path: '/edit/:slug', name: 'post-edit', component: PostForm, props: true },

  { path: '/categories', name: 'categories', component: CategoryList },
  { path: '/categories/create', name: 'category-create', component: CategoryForm },
  { path: '/categories/edit/:id', name: 'category-edit', component: CategoryForm, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
