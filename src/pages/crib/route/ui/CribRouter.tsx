import { Link, Outlet } from 'react-router-dom'
import { Card, Typography, Menu, Divider, Space } from 'antd'
import { BranchesOutlined, TeamOutlined } from '@ant-design/icons'
import Paragraph from 'antd/es/typography/Paragraph'

const { Title, Text } = Typography

const CribReactRouter = () => {
  return (
    <Card>
      <Title level={2} style={{ marginTop: 16 }}>
        <BranchesOutlined /> React Router v6
      </Title>

      <Text type='secondary'>
        Современная клиентская маршрутизация для React-приложений
      </Text>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Навигация
        </Title>
      </Divider>

      <Menu
        mode='horizontal'
        selectedKeys={[]}
        items={[
          {
            label: <Link to='users/1'>Пользователь 1</Link>,
            key: 'user1',
            icon: <TeamOutlined />,
          },
        ]}
        style={{ marginBottom: 24 }}
      />

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Основные возможности
        </Title>
      </Divider>

      <Space direction='vertical' size='middle' style={{ width: '100%' }}>
        <Card>
          <Text strong>Динамические роуты:</Text> Позволяют создавать URL на основе данных
        </Card>

        <Card>
          <Text strong>Outlet:</Text> Контейнер для отображения дочерних роутов
        </Card>

        <Card>
          <Text strong>Навигация:</Text> Программный переход между страницами
        </Card>
      </Space>

      <div style={{ marginTop: 24 }}>
        <Outlet />
      </div>
      <Paragraph>
        <Link to='/'>Главная</Link>
      </Paragraph>
    </Card>
  )
}

export default CribReactRouter