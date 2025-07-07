import { Button } from 'antd'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import styles from './LinkButton.module.scss'

const LinkButton = ({ to, children }: { to: string; children: ReactNode }) => (
  <div  className={styles.linkButton}>
    <Link to={to}>
      <Button type='primary' htmlType='submit'>
        {children}
      </Button>
    </Link>
  </div>
)

export default LinkButton