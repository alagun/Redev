import { todoApi } from '@/feature/todo/api/todoApi'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
})