import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

export const getPosts = async (search = '') => {
  const params = search ? { search } : {}
  const { data } = await api.get('/posts', { params })
  return data
}

export const getPostBySlug = async (slug) => {
  const { data } = await api.get(`/posts/${slug}`)
  return data
}

export const createPost = async (post) => {
  const { data } = await api.post('/posts', post)
  return data
}

export const updatePost = async (slug, post) => {
  const { data } = await api.put(`/posts/${slug}`, post)
  return data
}

export const deletePost = async (slug) => {
  const { data } = await api.delete(`/posts/${slug}`)
  return data
}
