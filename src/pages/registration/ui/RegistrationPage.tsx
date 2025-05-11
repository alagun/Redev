
import { Card } from 'antd'
import { RegistrationForm } from '@/feature/registration-form'

export const RegistrationPage = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
      <Card title='Регистрация' variant='borderless'>
        <RegistrationForm />
      </Card>
    </div>
  )
}