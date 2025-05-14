import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, Button, Divider, Alert, Space, Tag } from 'antd'
import { CodeOutlined, SyncOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

const CribLifecycle = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [mountTime] = useState(new Date().toLocaleTimeString())
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    setMessage(`Count changed to: ${count}`)

    return () => {
      // eslint-disable-next-line no-console
      console.log(`Cleanup before count changes from ${count}`)
    }
  }, [count])

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Component mounted')

    return () => {
      // eslint-disable-next-line no-console
      console.log('Component will unmount')
    }
  }, [])

  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        <SyncOutlined /> Жизненный цикл и useEffect
      </Title>

      <Paragraph>
        <Text strong>useEffect</Text>
        позволяет выполнять побочные эффекты в функциональных компонентах, заменяя методы жизненного цикла классовых компонентов.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Демонстрация жизненного цикла
        </Title>
      </Divider>

      <Card style={{ marginBottom: 24 }}>
        <Space direction='vertical' size='middle' style={{ width: '100%' }}>
          <div>
            <Text strong>Текущее значение счетчика: </Text>
            <Tag color='blue' style={{ fontSize: 16 }}>{count}</Tag>
          </div>

          <Alert
            message={message || 'Изменяйте счетчик чтобы увидеть эффект'}
            type='info'
            showIcon
          />

          <Text type='secondary'>
            Компонент смонтирован в: {mountTime}
          </Text>

          <Space>
            <Button type='primary' onClick={() => setCount(c => c + 1)}>
              Увеличить (+1)
            </Button>
            <Button onClick={() => setCount(0)}>
              Сбросить
            </Button>
          </Space>
        </Space>
      </Card>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Принципы работы useEffect
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Зависимости (deps):</Text> Указывайте все используемые в эффекте значения
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Функция очистки:</Text> Возвращайте функцию для отписки от событий
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Пустой массив:</Text> Эффект выполнится только при монтировании
          </li>
        </ul>
      </Paragraph>

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginTop: 16 }}
      >
        {showDetails ? 'Скрыть детали' : 'Показать реализацию'}
      </Button>

      {showDetails && (
        <Card style={{ marginTop: 16 }}>
          <Text code>
            {'import { useState, useEffect } from \'react\';\n\n'}
            {'const Lifecycle = () => {\n'}
            {'  const [count, setCount] = useState(0);\n'}
            {'  const [message, setMessage] = useState(\'\');\n\n'}
            {'  // Эффект с зависимостью\n'}
            {'  useEffect(() => {\n'}
            {'    setMessage(`Count changed to: ${count}`);\n'}
            {'    \n'}
            {'    return () => {\n'}
            {'      console.log(`Cleanup before count changes from ${count}`);\n'}
            {'    };\n'}
            {'  }, [count]);\n\n'}
            {'  // Эффект при монтировании\n'}
            {'  useEffect(() => {\n'}
            {'    console.log(\'Component mounted\');\n'}
            {'    return () => {\n'}
            {'      console.log(\'Component will unmount\');\n'}
            {'    };\n'}
            {'  }, []);\n\n'}
            {'  return (\n'}
            {'    <div>\n'}
            {'      <p>Count: {count}</p>\n'}
            {'      <p>{message}</p>\n'}
            {'      <button onClick={() => setCount(c => c + 1)}>\n'}
            {'        Increment\n'}
            {'      </button>\n'}
            {'    </div>\n'}
            {'  );\n'}
            {'};\n\n'}
            {'export default Lifecycle;'}
          </Text>
        </Card>
      )}

      <Paragraph>
        <Link to='/lifecycle'>Пример Task2</Link>
      </Paragraph>
    </Card>
  )
}

export default CribLifecycle