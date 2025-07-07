import { Card } from 'antd'
import { RegistrationForm } from '@/feature/registration-form'
import { LinkButton } from '@/shared/ui/link-button'

const RegistrationPage = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
      <Card title='Регистрация' variant='borderless'>
        <RegistrationForm />
      </Card>
      <LinkButton to={'/login'}> Авторизация </LinkButton>
    </div>
  )
}

export default RegistrationPage