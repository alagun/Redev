import { combineReducers } from '@reduxjs/toolkit'
import { todoApi } from '@/feature/todo/api/todoApi'

export const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
})