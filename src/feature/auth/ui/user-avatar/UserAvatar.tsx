import { Avatar, Dropdown, MenuProps, Space, Typography } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useLogout } from '../../lib/useLogout'

import styles from './UserAvatar.module.scss'

export const UserAvatar = () => {
  const { handleLogout } = useLogout()

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: 'Выйти',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ]

  return (
    <div className = {styles.userAvatar}>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Space >
          <Avatar icon={<UserOutlined />} />
          <Typography.Text type='secondary'>Пользователь</Typography.Text>
        </Space>
      </Dropdown>
    </div>
  )
}