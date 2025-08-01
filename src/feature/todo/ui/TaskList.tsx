import { useState } from 'react'
import { List, Button, Input, Typography } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { ITodo } from '../models/Todo'

import styles from './TaskList.module.scss'
import { useAppSelector } from '@/shared/hook/redux'

interface TaskListProps {
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log?: (message: string, data?: any) => void;
}

export function TaskList ({ onToggle, onDelete, onUpdate, log }: TaskListProps) {
  const tasks = useAppSelector(state => state.todos.tasks)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')

  const handleEditStart = (task: ITodo) => {
    log?.('User started editing task', { task })
    setEditingId(task.id)
    setEditText(task.title)
  }

  const handleEditSave = (id: string) => {
    if (editText.trim()) {
      log?.('User saved edited task', { id, newText: editText })
      onUpdate(id, editText)
      setEditingId(null)
    }
  }

  return (
    <List
      className={styles.taskList}
      dataSource={tasks}
      renderItem={task => (
        <List.Item
          className={`${styles.taskItem} ${task.isCompleted ? styles.completed : ''}`}
          onClick={() => {
            if (editingId !== task.id) {
              log?.('User toggled task completion', { task })
              onToggle(task.id)
            }
          }}
        >
          {editingId === task.id ? (
            <Input
              value={editText}
              onChange={e => setEditText(e.target.value)}
              onPressEnter={() => handleEditSave(task.id)}
              onBlur={() => handleEditSave(task.id)}
              autoFocus
            />
          ) : (
            <>
              <Typography.Text
                delete={task.isCompleted}
                className={styles.taskText}
              >
                {task.title}
              </Typography.Text>
              <div className={styles.taskActions}>
                <Button
                  icon={<EditOutlined />}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleEditStart(task)
                  }}
                />
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  onClick={(e) => {
                    e.stopPropagation()
                    log?.('User deleted task', { task })
                    onDelete(task.id)
                  }}
                />
                <CheckOutlined className={task.isCompleted ? styles.completedIcon : styles.doIcon} />
              </div>
            </>
          )}
        </List.Item>
      )}
    />
  )
}