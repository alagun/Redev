import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '@/feature/todo/models/Todo'

interface TodosState {
  tasks: ITodo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  tasks: [],
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITodo[]>) => {
      state.tasks = action.payload
      state.loading = false
    },
    addTask: (state, action: PayloadAction<ITodo>) => {
      state.tasks.push(action.payload)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload)

      if (task) {
        task.isCompleted = !task.isCompleted
      }
    },
    updateTask: (state, action: PayloadAction<{id: string; title: string}>) => {
      const task = state.tasks.find(task => task.id === action.payload.id)

      if (task) {
        task.title = action.payload.title
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {
  setTasks,
  addTask,
  toggleTask,
  updateTask,
  deleteTask,
  setLoading,
  setError,
} = todoSlice.actions

export default todoSlice.reducer