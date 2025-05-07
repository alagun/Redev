import { Button, Card } from 'antd'
import useTheme from '../lib/useTheme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Card title='Задание 4: Переключение темы' style={{ marginBottom: 20 }}>
      <Button type='primary' onClick={toggleTheme}>
        Переключить на {theme ? 'светлую' : 'темную'} тему
      </Button>
    </Card>
  )
}

export default ThemeToggle