import React from 'react'
import { useState } from 'react'
import { Button, Menu as CustomMenu, MenuProps } from 'antd'
import {
  TagsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
  FolderOutlined,
} from '@ant-design/icons'
import { ThemeSwitch } from '@/shared/theme-switch'

import styles from './Menu.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const mainItems = [
  { key: '/', label: 'Task 1', icon: <TagsOutlined /> },
  { key: 'lifecycle', label: 'Task 2', icon: <TagsOutlined /> },
  { key: 'list', label: 'Task 3', icon: <TagsOutlined /> },
  { key: 'theme', label: 'Task 4', icon: <TagsOutlined /> },
  { key: 'registration', label: 'Task 5', icon: <TagsOutlined /> },
]

const cribItems = [
  { key: 'crib/roadmap', label: 'Roadmap React/Redux', icon: <FileOutlined /> },
  { key: 'crib/react', label: 'React Basics', icon: <FileOutlined /> },
  { key: 'crib/components', label: 'Components', icon: <FileOutlined /> },
  { key: 'crib/hooks', label: 'Hooks', icon: <FileOutlined /> },
  { key: 'crib/router', label: 'Router', icon: <FileOutlined /> },
  { key: 'crib/state', label: 'State Management', icon: <FileOutlined /> },
]

const items: MenuItem[] = [
  ...mainItems.map(item => getItem(item.label, item.key, item.icon)),
  getItem('Task 6', 'crib', <FolderOutlined />, [
    ...cribItems.map(item => getItem(item.label, item.key, item.icon)),
  ]),
  getItem('In Progress', 'in-progress', <TagsOutlined />),
]

const Menu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const pathParts = location.pathname.split('/').filter(Boolean)
  const selectedKeys = pathParts.length > 1 && pathParts[0] === 'crib'
    ? [`crib/${pathParts[1]}`]
    : [pathParts[0] || '/']

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
        selectedKeys={selectedKeys}
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