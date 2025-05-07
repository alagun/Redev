import { useState } from 'react'
import { Button, Menu as CustomMenu } from 'antd'
import {
  TagsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { ThemeSwitch } from '@/shared/theme-switch'

import styles from './Menu.module.scss'


const items = [
  {
    key: '1',
    label: 'Task 1',
    icon: <TagsOutlined/>,
  },
  {
    key: '2',
    label: 'Task 2',
    icon: <TagsOutlined/>,
  },
  {
    key: '3',
    label: 'Task 3',
    icon: <TagsOutlined/>,
  },
  {
    key: '4',
    label: 'Task 4',
    icon: <TagsOutlined/>,
  },
  {
    key: '100',
    label: 'In progress',
    icon: <TagsOutlined/>,
  },
]

type TMenuProps = {
  selectedKey: string;
  onSelect: (key: string) => void;
};

const Menu = ({ selectedKey, onSelect }: TMenuProps) => {
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
        selectedKeys={[selectedKey]}
        onSelect={({ key }) => onSelect(key)}
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