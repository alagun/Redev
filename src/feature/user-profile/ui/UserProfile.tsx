import { Typography, Space } from 'antd'

const {  Text } = Typography

const UserProfile = ({ name, email }:{ name: string; email: string }) => {
  return (
    <Space direction='vertical'>
      <Text strong>Имя: {name}</Text>
      <Text strong>Email: {email}</Text>
    </Space>
  )
}

export default UserProfile