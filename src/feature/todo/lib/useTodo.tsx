import { useState } from 'react'
import { Modal } from 'antd'
import { useCreateTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useToggleTodoMutation, useUpdateTodoMutation } from '../api/todoApi'


export const useTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const { data: tasks = [], isLoading } = useGetTodosQuery()
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
      await createTodo({ title: inputValue }).unwrap()
      setInputValue('')
      Modal.success({
        title: 'Успешно!',
        content: 'Задача добавлена',
      })
    } catch (error) {
      showError('Не удалось добавить задачу')
      console.error('Failed to add task:', error)
    }
  }

  const toggleTask = async (id: string) => {
    try {
      await toggleTodo(id).unwrap()
    } catch (error) {
      showError('Не удалось изменить статус задачи')
      console.error('Failed to toggle task:', error)
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
          Modal.success({
            title: 'Успешно!',
            content: 'Задача удалена',
          })
        } catch (error) {
          showError('Не удалось удалить задачу')
          console.error('Failed to delete task:', error)
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
    } catch (error) {
      showError('Не удалось обновить задачу')
      console.error('Failed to update task:', error)
    }
  }

  return {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    loading: isLoading,
  }
}