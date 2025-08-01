import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { useCreateTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useToggleTodoMutation, useUpdateTodoMutation } from '../api/todoApi'
import {
  setTasks,
  addTask as addTaskAction,
  toggleTask as toggleTaskAction,
  updateTask as updateTaskAction,
  deleteTask as deleteTaskAction,
  setLoading,
  setError,
} from '../slice/todoSlice'
import { useAppDispatch } from '@/shared/hook/redux'


export const useTodo = () => {
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState('')

  const { data } = useGetTodosQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data))
    }
  }, [data, dispatch])

  const [createTodo] = useCreateTodoMutation()
  const [toggleTodo] = useToggleTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  const showError = (content: string) => {
    Modal.error({
      title: 'Ошибка',
      content,
    })
  }

  const addTask = async () => {
    if (!inputValue.trim()) {
      showError('Введите текст задачи')

      return
    }

    try {
      dispatch(setLoading(true))
      const newTask = await createTodo({ title: inputValue }).unwrap()

      dispatch(addTaskAction(newTask))

      setInputValue('')
      Modal.success({
        title: 'Успешно!',
        content: 'Задача добавлена',
      })
    } catch (error) {
      showError('Не удалось добавить задачу')
      console.error('Failed to add task:', error)
      dispatch(setError('Не удалось добавить задачу'))
    }
  }

  const toggleTask = async (id: string) => {
    try {
      await toggleTodo(id).unwrap()
      dispatch(toggleTaskAction(id))
    } catch (error) {
      showError('Не удалось изменить статус задачи')
      console.error('Failed to toggle task:', error)
      dispatch(setError('Не удалось изменить статус задачи'))
    }
  }

  const deleteTask = async (id: string) => {
    Modal.confirm({
      title: 'Удалить задачу?',
      content: 'Вы уверены, что хотите удалить эту задачу?',
      okText: 'Да',
      cancelText: 'Отмена',
      onOk: async () => {
        try {
          await deleteTodo(id).unwrap()
          dispatch(deleteTaskAction(id))
          Modal.success({
            title: 'Успешно!',
            content: 'Задача удалена',
          })
        } catch (error) {
          showError('Не удалось удалить задачу')
          console.error('Failed to delete task:', error)
          dispatch(setError('Не удалось удалить задачу'))
        }
      },
    })
  }

  const updateTask = async (id: string, text: string) => {
    if (!text.trim()) {
      showError('Введите текст задачи')

      return
    }

    try {
      await updateTodo({ id, title: text }).unwrap()
      dispatch(updateTaskAction({ id, title: text }))
    } catch (error) {
      showError('Не удалось обновить задачу')
      console.error('Failed to update task:', error)
      dispatch(setError('Не удалось обновить задачу'))
    }
  }

  return {
    inputValue,
    setInputValue,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
  }
}