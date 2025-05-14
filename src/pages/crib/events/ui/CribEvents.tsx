import React, { SyntheticEvent, useState } from 'react'
import { Card, Typography, Form, Input, Button, Divider, Alert, Space, Tag } from 'antd'
import { FormOutlined, ThunderboltOutlined, CodeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

const CribEvents = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [submittedValue, setSubmittedValue] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setSubmittedValue(inputValue)
    setInputValue('')
  }

  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        <ThunderboltOutlined /> Обработка событий в React
      </Title>

      <Paragraph>
        <Text strong>События в React</Text> обрабатываются аналогично DOM-событиям, но с синтаксическими отличиями:
        именование camelCase, синтетические события, и автоматическое делегирование.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          <FormOutlined /> Пример формы
        </Title>
      </Divider>

      <Card style={{ marginBottom: 24, maxWidth: 600 }}>
        <Form onSubmitCapture={handleSubmit}>
          <Form.Item>
            <Input
              placeholder='Введите текст...'
              value={inputValue}
              onChange={handleChange}
              size='large'
            />
          </Form.Item>
          <Space>
            <Button
              type='primary'
              htmlType='submit'
              disabled={!inputValue.trim()}
            >
              Отправить
            </Button>
            <Button
              onClick={() => {
                setInputValue('')
                setSubmittedValue(null)
              }}
            >
              Сбросить
            </Button>
          </Space>
        </Form>

        {submittedValue && (
          <Alert
            message={
              <span>
                Отправленное значение: <Tag color='blue'>{submittedValue}</Tag>
              </span>
            }
            type='success'
            showIcon
            style={{ marginTop: 16 }}
          />
        )}
      </Card>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Особенности событий
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Синтетические события:</Text> Обёртка над нативными событиями для кросс-браузерности
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Делегирование:</Text> React использует единый обработчик на корневом уровне
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Именование:</Text> onClick вместо onclick, onChange вместо onchange
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
        <Card style={{ marginTop: 16 }}>
          <Text code>
            {'import React, { SyntheticEvent, useState } from \'react\';\n'}
            {'import { Input, Button } from \'antd\';\n\n'}
            {'const Events = () => {\n'}
            {'  const [inputValue, setInputValue] = useState(\'\');\n\n'}
            {'  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n'}
            {'    setInputValue(e.target.value);\n'}
            {'  };\n\n'}
            {'  const handleSubmit = (e: SyntheticEvent) => {\n'}
            {'    e.preventDefault();\n'}
            {'    alert(`Submitted: ${inputValue}`);\n'}
            {'  };\n\n'}
            {'  return (\n'}
            {'    <form onSubmit={handleSubmit}>\n'}
            {'      <Input\n'}
            {'        value={inputValue}\n'}
            {'        onChange={handleChange}\n'}
            {'        placeholder="Type something..."\n'}
            {'      />\n'}
            {'      <Button htmlType="submit">Submit</Button>\n'}
            {'    </form>\n'}
            {'  );\n'}
            {'};\n\n'}
            {'export default Events;'}
          </Text>
        </Card>
      )}

      <Paragraph>
        <Link to='/list'>Пример Task3</Link>
      </Paragraph>
    </Card>
  )
}

export default CribEvents