import React from 'react'
import { Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import styles from './TaskInput.module.scss'

interface TaskInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log?: (message: string, data?: any) => void;
}

export function TaskInput ({ value, onChange, onAdd, log }: TaskInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      log?.('User pressed Enter to add task')
      onAdd()
    }
  }

  return (
    <div className={styles.taskInput}>
      <Input
        value={value}
        onChange={(e) => {
          log?.('User is typing in task input', { value: e.target.value })
          onChange(e.target.value)
        }}
        onKeyDown={handleKeyPress}
        placeholder='Enter task...'
      />
      <Button
        className={styles.btn}
        type='primary'
        icon={<PlusOutlined />}
        onClick={() => {
          log?.('User add task')
          onAdd()
        }}
      >
        Add Task
      </Button>
    </div>
  )
}