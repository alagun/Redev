import { useState } from 'react'
import { Card, Typography, Divider, Tag, Space, Button } from 'antd'
import { CodeOutlined, UserOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

interface PropsExampleProps {
  name?: string;
  age?: number;
  isAdmin?: boolean;
}

const PropsExample = ({
  name = 'Guest',
  age = 18,
  isAdmin = false,
}:PropsExampleProps) => {
  return (
    <Card
      size='small'
      style={{
        marginBottom: 16,
        borderLeft: `4px solid ${isAdmin ? '#ff4d4f' : '#1890ff'}`,
      }}
    >
      <Space align='center'>
        <UserOutlined style={{ fontSize: 18 }} />
        <Text strong style={{ fontSize: 16 }}>
          Hello, {name}!
        </Text>
        <Text type='secondary'>(age: {age})</Text>
        {isAdmin && <Tag color='red'>Admin</Tag>}
      </Space>
    </Card>
  )
}

const CribProps= () => {
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false)

  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        React Props (Свойства компонентов)
      </Title>

      <Paragraph>
        <Text strong>Props</Text>
        — это входные данные компонента, которые передаются от родителя к дочернему компоненту и доступны только для чтения.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Пример использования
        </Title>
      </Divider>

      <Card style={{ marginBottom: 24 }}>
        <PropsExample name='Alice' age={25} />
        <PropsExample name='Bob' isAdmin />
        <PropsExample />
      </Card>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Основные принципы
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Однонаправленный поток:</Text> Данные передаются только сверху вниз
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Неизменяемость:</Text> Компонент не должен изменять свои пропсы
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Типизация:</Text> Всегда определяйте типы пропсов (TypeScript/PropTypes)
          </li>
        </ul>
      </Paragraph>

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowAdvanced(!showAdvanced)}
        style={{ marginTop: 16 }}
      >
        {showAdvanced ? 'Скрыть код' : 'Показать реализацию'}
      </Button>

      {showAdvanced && (
        <Card bordered style={{ marginTop: 16 }}>
          <Text code>
            {'// Определение типов пропсов\n'}
            {'interface PropsExampleProps {\n'}
            {'  name?: string;\n'}
            {'  age?: number;\n'}
            {'  isAdmin?: boolean;\n'}
            {'}\n\n'}
            {'// Компонент с пропсами\n'}
            {'const PropsExample: React.FC<PropsExampleProps> = ({\n'}
            {'  name = \'Guest\', \n'}
            {'  age = 18,\n'}
            {'  isAdmin = false\n'}
            {'}) => {\n'}
            {'  return (\n'}
            {'    <div>\n'}
            {'      <p>Hello, {name}! (age: {age})</p>\n'}
            {'      {isAdmin && <span>Admin</span>}\n'}
            {'    </div>\n'}
            {'  );\n'}
            {'};\n\n'}
            {'// Использование компонента\n'}
            {'<PropsExample name="Alice" age={25} />\n'}
            {'<PropsExample name="Bob" isAdmin />\n'}
            {'<PropsExample />'}
          </Text>
        </Card>
      )}
    </Card>
  )
}

export default CribProps