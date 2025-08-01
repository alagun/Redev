import { combineReducers } from '@reduxjs/toolkit'
import { todoApi } from '@/feature/todo/api/todoApi'
import todoReducer from '@/feature/todo/slice/todoSlice'

export const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
  todos: todoReducer,
})