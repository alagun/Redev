import React, { useMemo, useRef, useState } from 'react'
import { Card, Typography, Input, Button, Divider, Tag, Space, Tabs, Alert, InputRef } from 'antd'
import { HighlightOutlined, CodeOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs

const CribAdvanced: React.FC = () => {
  const inputRef = useRef<InputRef>(null)
  const [value, setValue] = useState<string>('')
  const [showDetails, setShowDetails] = useState(false)

  const memoizedValue = useMemo(() => {
    return value.toUpperCase()
  }, [value])

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <Card bordered={false}>
      <Title level={2} style={{ marginBottom: 16 }}>
        <HighlightOutlined /> Продвинутые техники React
      </Title>

      <Paragraph>
        <Text strong>useRef, useMemo, React.memo и другие</Text> — инструменты для оптимизации и работы с DOM.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Демонстрация возможностей
        </Title>
      </Divider>

      <Tabs defaultActiveKey='1'>
        <TabPane tab='useRef + useMemo' key='1'>
          <Card bordered style={{ marginTop: 16 }}>
            <Space direction='vertical' style={{ width: '100%' }}>
              <Input
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Введите текст...'
                style={{ maxWidth: 400 }}
              />

              <Space>
                <Button type='primary' onClick={focusInput}>
                  Фокусировать поле ввода
                </Button>
                <Button onClick={() => setValue('')}>
                  Очистить
                </Button>
              </Space>

              <Alert
                message={
                  <span>
                    Мемоизированное значение: <Tag color='blue'>{memoizedValue}</Tag>
                  </span>
                }
                type='info'
                showIcon
              />
            </Space>
          </Card>
        </TabPane>

        <TabPane tab='Оптимизация' key='2'>
          <Card style={{ marginTop: 16 }}>
            <Paragraph>
              <Text strong>React.memo</Text> — оптимизирует перерисовку компонентов.
            </Paragraph>
            <Text code>
              {'const MemoComponent = React.memo(({ prop }) => {\n  return <div>{prop}</div>;\n});'}
            </Text>

            <Divider dashed style={{ margin: '16px 0' }} />

            <Paragraph>
              <Text strong>useCallback</Text> — мемоизирует функции.
            </Paragraph>
            <Text code>
              {'const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);'}
            </Text>
          </Card>
        </TabPane>
      </Tabs>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Когда использовать?
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>useRef:</Text> Для доступа к DOM или хранения мутируемых значений между рендерами
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>useMemo:</Text> Для тяжелых вычислений, которые не нужно повторять при каждом рендере
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>React.memo:</Text> Для предотвращения ненужных ререндеров дочерних компонентов
          </li>
        </ul>
      </Paragraph>

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginTop: 16 }}
      >
        {showDetails ? 'Скрыть код' : 'Показать реализацию'}
      </Button>

      {showDetails && (
        <Card bordered style={{ marginTop: 16 }}>
          <Text code>
            {'import React, { useMemo, useRef, useState } from \'react\';\n'}
            {'import { Input, Button } from \'antd\';\n\n'}
            {'const Advanced = () => {\n'}
            {'  // Используем правильный тип ref для Ant Design Input\n'}
            {'  const inputRef = useRef<Input>(null);\n'}
            {'  const [value, setValue] = useState(\'\');\n\n'}
            {'  const memoizedValue = useMemo(() => {\n'}
            {'    return value.toUpperCase();\n'}
            {'  }, [value]);\n\n'}
            {'  const focusInput = () => {\n'}
            {'    // Используем правильный метод focus для Ant Design Input\n'}
            {'    inputRef.current?.focus();\n'}
            {'  };\n\n'}
            {'  return (\n'}
            {'    <Input\n'}
            {'      ref={inputRef}\n'}
            {'      value={value}\n'}
            {'      onChange={(e) => setValue(e.target.value)}\n'}
            {'      placeholder="Type something..."\n'}
            {'    />\n'}
            {'    <Button onClick={focusInput}>Focus Input</Button>\n'}
            {'    <p>Memoized value: {memoizedValue}</p>\n'}
            {'  );\n'}
            {'};\n\n'}
            {'export default Advanced;'}
          </Text>
        </Card>
      )}
    </Card>
  )
}

export default CribAdvanced