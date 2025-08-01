import { API_URL } from '@/shared/config/api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from '../models/Todo'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => '/todos',
      providesTags: ['Todos'],
    }),
    createTodo: builder.mutation<ITodo, { title: string }>({
      query: body => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation<ITodo, { id: string; title: string }>({
      query: ({ id, title }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: { title },
      }),
      invalidatesTags: ['Todos'],
    }),
    toggleTodo: builder.mutation<ITodo, string>({
      query: id => ({
        url: `/todos/${id}/isCompleted`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: id => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} = todoApi