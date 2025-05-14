import { useState } from 'react'
import { Card, Typography, Button, Space, Divider } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

const CribState = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        State (useState)
      </Title>

      <Paragraph>
        <Text strong>Состояние</Text> — это данные, которые могут меняться в компоненте и вызывают его перерисовку при изменении.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '16px 0' }}>
        <Text strong>Пример использования useState</Text>
      </Divider>

      <Card
        style={{
          margin: '16px 0',
          maxWidth: '400px',
        }}
      >
        <Paragraph style={{ fontSize: '18px', marginBottom: '24px' }}>
          <Text strong>Текущее значение:</Text> <Text code>{count}</Text>
        </Paragraph>

        <Space size='middle'>
          <Button
            type='primary'
            onClick={() => setCount(count + 1)}
          >
            Увеличить (+)
          </Button>
          <Button
            danger
            onClick={() => setCount(count - 1)}
          >
            Уменьшить (-)
          </Button>
          <Button
            onClick={() => setCount(0)}
          >
            Сбросить
          </Button>
        </Space>
      </Card>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Text strong>Особенности useState</Text>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Локальное состояние:</Text> Изменяется только в рамках этого компонента
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Асинхронные обновления:</Text> Состояние может обновляться не сразу
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Функциональные обновления:</Text> Можно передавать функцию для сложных вычислений
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <Link to='/'>Пример Task1</Link>
      </Paragraph>
    </Card>
  )
}

export default CribState