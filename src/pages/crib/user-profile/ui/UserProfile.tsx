import { useParams, useNavigate } from 'react-router-dom'
import { Card, Typography,  Button, Space, Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const {  Text } = Typography

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()

  return (
    <Card
      title={
        <Space>
          <UserOutlined />
          <span>Профиль пользователя</span>
        </Space>
      }
      style={{ marginTop: 16 }}
      extra={
        <Button type='primary' onClick={() => navigate(-1)}>
          Назад
        </Button>
      }
    >
      <Space direction='vertical'>
        <Text strong>ID пользователя:</Text>
        <Tag color='blue' style={{ fontSize: 16 }}>{userId}</Tag>

        <Text strong>Дополнительная информация:</Text>
      </Space>
    </Card>
  )
}

export default UserProfile