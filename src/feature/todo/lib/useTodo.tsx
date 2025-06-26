import { useState } from 'react'
import { ITodo } from '../models/Todo'

export function useTodo () {
  const [tasks, setTasks] = useState<ITodo[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (!inputValue.trim()) return

    const newTask: ITodo = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false,
      createdAt: Date.now(),
    }

    setTasks([...tasks, newTask])
    setInputValue('')

    return newTask
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id
      ? { ...task, completed: !task.completed, updatedAt: Date.now() }
      : task,
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updateTask = (id: string, newText: string) => {
    setTasks(tasks.map(task => task.id === id
      ? { ...task, text: newText, updatedAt: Date.now() }
      : task,
    ))
  }

  return {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
  }
}