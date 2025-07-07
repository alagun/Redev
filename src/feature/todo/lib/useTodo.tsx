import { useState, useEffect } from 'react'
import { Modal } from 'antd'
import { todoApi } from '../api/todoApi'
import { ITodo } from '../models/Todo'

export const useTodo = () => {
  const [tasks, setTasks] = useState<ITodo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTodos()
  }, [])

  const showError = (content: string) => {
    Modal.error({
      title: 'Ошибка',
      content,
    })
  }

  const fetchTodos = async () => {
    setLoading(true)

    try {
      const todos = await todoApi.getTodos()

      setTasks(todos)
    } catch (error) {
      showError('Не удалось загрузить задачи')
      console.error('Failed to fetch todos:', error)
    } finally {
      setLoading(false)
    }
  }

  const addTask = async () => {
    if (!inputValue.trim()) {
      showError('Введите текст задачи')

      return
    }

    setLoading(true)

    try {
      const newTask = await todoApi.createTodo(inputValue)

      setTasks([...tasks, newTask])
      setInputValue('')

      Modal.success({
        title: 'Успешно!',
        content: 'Задача добавлена',
      })
    } catch (error) {
      showError('Не удалось добавить задачу')
      console.error('Failed to add task:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleTask = async (id: string) => {
    try {
      const updatedTask = await todoApi.toggleTodoCompletion(id)

      setTasks(tasks.map(task => task.id === id ? updatedTask[0] : task,
      ))
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
          await todoApi.deleteTodo(id)
          setTasks(tasks.filter(task => task.id !== id))

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
      const updatedTask = await todoApi.updateTodoText(id, text)

      setTasks(tasks.map(task => task.id === id ? updatedTask : task,
      ))
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
    loading,
  }
}