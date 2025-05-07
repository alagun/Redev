import { Switch } from 'antd'
import {
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons'
import { useTheme } from '../../../feature/theme-toggle'

import styles from './ThemeSwitch.module.scss'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.switchContainer}>
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </div>
  )
}

export default ThemeSwitch