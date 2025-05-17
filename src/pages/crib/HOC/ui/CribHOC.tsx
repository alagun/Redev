import {  useState } from 'react'
import {
  Card,
  Typography,
  Button,
  Divider,
  Space,
  List,
} from 'antd'
import { CodeOutlined } from '@ant-design/icons'
import { ProfileWithLoading } from '@/feature/layout-hoc'

const { Title, Text, Paragraph } = Typography

const HOC = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        Higher-Order Component (HOC)
      </Title>

      <Paragraph>
        <Text strong>HOC</Text> — это функция, которая принимает компонент и возвращает новый компонент с дополнительной функциональностью.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Демонстрация
        </Title>
      </Divider>

      <Space direction='vertical' style={{ width: '100%' }}>
        <ProfileWithLoading
          name='Иван Иванов'
          email='ivan@example.com'
          loading={false}
        />
      </Space>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Преимущества HOC
        </Title>
      </Divider>

      <List
        dataSource={[
          'Повторное использование логики',
          'Изоляция функциональности',
          'Композиция компонентов',
          'Не изменяет оригинальный компонент',
          'Легко тестируется',
        ]}
        renderItem={item => (
          <List.Item>
            <Text>{item}</Text>
          </List.Item>
        )}
      />

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Реализация
        </Title>
      </Divider>

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginBottom: 16 }}
      >
        {showDetails ? 'Скрыть код' : 'Показать реализацию'}
      </Button>

      {showDetails && (
        <Card>
          <Text code>
            {'import React, { ComponentType, useState } from \'react\';\n\n'}
            {'interface WithLoadingProps {\n'}
            {'  loading?: boolean;\n'}
            {'}\n\n'}
            {'const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {\n'}
            {'  const WithLoading: React.FC<P & WithLoadingProps> = (props) => {\n'}
            {'    const [isLoading, setIsLoading] = useState<boolean>(props.loading || false);\n\n'}
            {'    return (\n'}
            {'      <Spin spinning={isLoading}>\n'}
            {'        <WrappedComponent {...props as P} />\n'}
            {'      </Spin>\n'}
            {'    );\n'}
            {'  };\n\n'}
            {'  return WithLoading;\n'}
            {'};\n\n'}
            {'// Использование\n'}
            {'const EnhancedComponent = withLoading(OriginalComponent);'}
          </Text>
        </Card>
      )}
    </Card>
  )
}

export default HOC