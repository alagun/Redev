import { Card } from 'antd'
import { LoggedTodo } from '@/feature/todo'

export const TodoPage = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
      <Card title='ToDo - List' variant='borderless'>
        <LoggedTodo />
      </Card>
    </div>
  )
}