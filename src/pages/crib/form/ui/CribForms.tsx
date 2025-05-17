import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Divider, Tabs, Space } from 'antd'
import { FormOutlined, CodeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { FormValues } from '../models/FormValue'

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs



const CribForms = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [form] = Form.useForm()
  const [showComparison, setShowComparison] = useState(false)

  const onFinish = (_values: FormValues) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const resetForm = () => {
    form.resetFields()
  }

  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        <FormOutlined /> Формы в React
      </Title>

      <Paragraph>
        <Text strong>Сравнение react-hook-form и Formik</Text> — два популярных решения для работы с формами.
      </Paragraph>

      <Card style={{ maxWidth: 500, margin: '0 auto' }}>
        <Form
          form={form}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
          layout='vertical'
        >
          <Form.Item
            label='Имя пользователя'
            name='username'
            rules={[
              { required: true, message: 'Пожалуйста, введите имя пользователя!' },
              { min: 3, message: 'Минимум 3 символа' },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder='Введите имя' />
          </Form.Item>

          <Form.Item
            label='Пароль'
            name='password'
            rules={[
              { required: true, message: 'Пожалуйста, введите пароль!' },
              { min: 6, message: 'Минимум 6 символов' },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Введите пароль' />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type='primary' htmlType='submit' loading={loading}>
                Отправить
              </Button>
              <Button htmlType='button' onClick={resetForm}>
                Сбросить
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Сравнение библиотек
        </Title>
      </Divider>

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowComparison(!showComparison)}
        style={{ marginBottom: 16 }}
      >
        {showComparison ? 'Скрыть сравнение' : 'Показать сравнение'}
      </Button>

      {showComparison && (
        <Tabs defaultActiveKey='1'>
          <TabPane tab='react-hook-form' key='1'>
            <Card  style={{ marginTop: 16 }}>
              <Text code>
                {'import { useForm } from \'react-hook-form\';\n\n'}
                {'const { register, handleSubmit, formState: { errors } } = useForm();\n\n'}
                {'const onSubmit = data => console.log(data);\n\n'}
                {'<form onSubmit={handleSubmit(onSubmit)}>\n'}
                {'  <input {...register(\'username\', { required: true })} />\n'}
                {'  {errors.username && <span>Обязательное поле</span>}\n'}
                {'  <button type="submit">Отправить</button>\n'}
                {'</form>'}
              </Text>
              <Paragraph style={{ marginTop: 16 }}>
                <Text strong>Преимущества:</Text>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: 8 }}>✓ Высокая производительность</li>
                  <li style={{ marginBottom: 8 }}>✓ Минимальный ререндеринг</li>
                  <li style={{ marginBottom: 8 }}>✓ Простая интеграция с нативными формами</li>
                </ul>
              </Paragraph>
            </Card>
          </TabPane>

          <TabPane tab='Formik' key='2'>
            <Card style={{ marginTop: 16 }}>
              <Text code>
                {'import { useFormik } from \'formik\';\n\n'}
                {'const formik = useFormik({\n'}
                {'  initialValues: { username: \'\' },\n'}
                {'  onSubmit: values => console.log(values),\n'}
                {'});\n\n'}
                {'<form onSubmit={formik.handleSubmit}>\n'}
                {'  <input\n'}
                {'    name="username"\n'}
                {'    value={formik.values.username}\n'}
                {'    onChange={formik.handleChange}\n'}
                {'  />\n'}
                {'  <button type="submit">Отправить</button>\n'}
                {'</form>'}
              </Text>
              <Paragraph style={{ marginTop: 16 }}>
                <Text strong>Преимущества:</Text>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: 8 }}>✓ Богатый набор функций</li>
                  <li style={{ marginBottom: 8 }}>✓ Удобная валидация</li>
                  <li style={{ marginBottom: 8 }}>✓ Большое сообщество</li>
                </ul>
              </Paragraph>
            </Card>
          </TabPane>
        </Tabs>
      )}

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Лучшие практики
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Валидация:</Text> Всегда проверяйте данные на клиенте и сервере
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Доступность:</Text> Добавляйте подписи к полям и сообщения об ошибках
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Производительность:</Text> Оптимизируйте сложные формы
          </li>
        </ul>
      </Paragraph>
    </Card>
  )
}

export default CribForms