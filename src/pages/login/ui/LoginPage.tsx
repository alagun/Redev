import { LoginForm } from '@/feature/login-form'
import { LinkButton } from '@/shared/ui/link-button'
import { Card } from 'antd'

export const LoginPage = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
      <Card title='Авторизация' variant='borderless'>
        <LoginForm/>
      </Card>
      <LinkButton to={'/registration'}> Регистрация </LinkButton>
    </div>
  )
}