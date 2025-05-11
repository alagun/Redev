import { useState } from 'react'
import { Button, Menu as CustomMenu } from 'antd'
import {
  TagsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { ThemeSwitch } from '@/shared/theme-switch'

import styles from './Menu.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const items = [
  { key: '/', label: 'Task 1', icon: <TagsOutlined /> },
  { key: 'lifecycle', label: 'Task 2', icon: <TagsOutlined /> },
  { key: 'list', label: 'Task 3', icon: <TagsOutlined /> },
  { key: 'theme', label: 'Task 4', icon: <TagsOutlined /> },
  { key: 'registration', label: 'Task 5', icon: <TagsOutlined /> },
  { key: 'in-progress', label: 'In progress', icon: <TagsOutlined /> },
]

const Menu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuBtn}>
        <Button
          type='primary'
          onClick={toggleCollapsed}
          style={{
            margin: '16px',
            width: 'calc(100% - 32px)',
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <CustomMenu
        selectedKeys={[location.pathname.split('/')[1] || '/']}
        onSelect={({ key }) => navigate(key)}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
        items={items}
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          borderRight: 0,
        }}
      />
      <ThemeSwitch/>
    </div>
  )
}

export default Menu