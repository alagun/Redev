import { useTodo } from '../lib/useTodo'
import { TaskInput } from './TaskInput'
import { TaskList } from './TaskList'

interface TodoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log?: (message: string, data?: any) => void;
}

export function Todo ({ log }:TodoProps) {
  const {
    inputValue,
    setInputValue,
    tasks,
    isLoading,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
  } = useTodo()

  return (
    <div>
      <TaskInput
        value={inputValue}
        onChange={setInputValue}
        onAdd={addTask}
        log={log}
      />
      <TaskList
        tasks={tasks}
        isLoading={isLoading}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onUpdate={updateTask}
        log={log}
      />
    </div>
  )
}