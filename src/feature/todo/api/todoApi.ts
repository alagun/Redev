import axios from 'axios'
import { API_URL } from '@/shared/config/api'

const apiClient = axios.create({
  baseURL: API_URL,
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export const todoApi = {
  async getTodos (isCompleted?: boolean) {
    const params = isCompleted !== undefined ? { isCompleted } : {}
    const response = await apiClient.get(`${API_URL}/todos`, { params })

    return response.data
  },

  async createTodo (title: string) {
    const response = await apiClient.post(`${API_URL}/todos`, { title })

    return response.data
  },

  async updateTodoText (id: string, title: string) {
    const response = await apiClient.patch(`${API_URL}/todos/${id}`, { title })

    return response.data
  },

  async toggleTodoCompletion (id: string) {
    const response = await apiClient.patch(`${API_URL}/todos/${id}/isCompleted`)

    return response.data
  },

  async deleteTodo (id: string) {
    const response = await apiClient.delete(`${API_URL}/todos/${id}`)

    return response.data
  },
}