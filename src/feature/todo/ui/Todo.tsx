import { useTodo } from '../lib/useTodo'
import { TaskInput } from './TaskInput'
import { TaskList } from './TaskList'

// import styles from './Todo.module.scss'

interface TodoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log?: (message: string, data?: any) => void;
}

export function Todo ({ log }:TodoProps) {
  const {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
  } = useTodo()

  return (
    // <div className={styles.todoContainer}>
    <div>
      <h1>Todo List</h1>
      <TaskInput
        value={inputValue}
        onChange={setInputValue}
        onAdd={addTask}
        log={log}
      />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onUpdate={updateTask}
        log={log}
      />
    </div>
  )
}