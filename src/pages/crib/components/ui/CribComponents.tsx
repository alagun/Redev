import { Card, Typography, Divider, Tabs } from 'antd'
import { FunctionOutlined, ApiOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs

const CribComponents = () => {
  return (
    <Card bordered={false}>
      <Title level={2} style={{ marginBottom: 16 }}>
        React Components
      </Title>

      <Paragraph>
        <Text strong>Компоненты</Text> — это строительные блоки React-приложений, которые инкапсулируют логику и отображение.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Типы компонентов
        </Title>
      </Divider>

      <Tabs defaultActiveKey='1'>
        <TabPane
          tab={
            <span>
              <FunctionOutlined />
              Функциональные
            </span>
          }
          key='1'
        >
          <Card bordered style={{ marginTop: 16 }}>
            <Text code>{'import React from \'react\';\n\nconst FunctionalComponent = () => {\n  return <div>Hello World</div>;\n};\n\nexport default FunctionalComponent;'}</Text>
            <Paragraph style={{ marginTop: 16 }}>
              <Text strong>Особенности:</Text>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: 8 }}>✓ Используют хуки для состояния и жизненного цикла</li>
                <li style={{ marginBottom: 8 }}>✓ Более простой и понятный синтаксис</li>
                <li style={{ marginBottom: 8 }}>✓ Рекомендуемый подход в современных приложениях</li>
              </ul>
            </Paragraph>
          </Card>
        </TabPane>

        <TabPane
          tab={
            <span>
              <ApiOutlined />
              Классовые
            </span>
          }
          key='2'
        >
          <Card bordered style={{ marginTop: 16 }}>
            <Text code>{'import React, { Component } from \'react\';\n\nclass ClassComponent extends Component {\n  render() {\n    return <div>Hello World</div>;\n  }\n}\n\nexport default ClassComponent;'}</Text>
            <Paragraph style={{ marginTop: 16 }}>
              <Text strong>Особенности:</Text>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: 8 }}>✓ Используют методы жизненного цикла</li>
                <li style={{ marginBottom: 8 }}>✓ Имеют внутреннее состояние (this.state)</li>
                <li style={{ marginBottom: 8 }}>✓ Полезны для сложной логики компонента</li>
              </ul>
            </Paragraph>
          </Card>
        </TabPane>
      </Tabs>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Лучшие практики
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Разделение ответственности:</Text> Каждый компонент должен решать одну задачу
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Композиция:</Text> Собирайте сложные интерфейсы из простых компонентов
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Правильные пропсы:</Text> Используйте PropTypes или TypeScript для проверки типов
          </li>
        </ul>
      </Paragraph>
    </Card>
  )
}

export default CribComponents