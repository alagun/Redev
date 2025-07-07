import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'

import { loginSchema } from '../lib/ValidationSchema'
import { TLoginForm } from '../models/login'
import { login } from '@/feature/auth/api/auth'

import styles from './LoginForm.module.scss'
import { useAuth } from '@/feature/auth/lib/useAuth'

export const LoginForm = () => {

  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: TLoginForm) => {
    try {
      await login(data)
      Modal.success({
        title: 'Успешная авторизация!',
        content: 'Теперь вы можете войти в систему',
        onOk: () => {
          setAuth(true)
          navigate('/')
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      const serverMessage = error.response?.data?.message
      const defaultMessage = 'Произошла ошибка при авторизации'

      Modal.error({
        title: 'Ошибка',
        content: serverMessage || defaultMessage,
      })
    }
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout='vertical' className={styles.registrationForm}>
      <Form.Item label='Email' help={errors.email?.message} validateStatus={errors.email ? 'error' : ''}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item label='Пароль' help={errors.password?.message} validateStatus={errors.password ? 'error' : ''}>
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input.Password {...field} />}
        />
      </Form.Item>

      <Button type='primary' htmlType='submit'>
        Авторизоваться
      </Button>
    </Form>
  )
}