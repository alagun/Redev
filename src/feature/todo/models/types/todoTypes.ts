import { ITodo } from '../Todo'

export const TODO_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  SET_TODOS: 'SET_TODOS',
} as const

export type TodoAction =
  { type: typeof TODO_ACTION_TYPES.ADD_TODO; payload: ITodo }
  | { type: typeof TODO_ACTION_TYPES.TOGGLE_TODO; payload: string }
  | { type: typeof TODO_ACTION_TYPES.DELETE_TODO; payload: string }
  | { type: typeof TODO_ACTION_TYPES.UPDATE_TODO; payload: { id: string; title: string } }
  | { type: typeof TODO_ACTION_TYPES.SET_TODOS; payload: ITodo[] };
