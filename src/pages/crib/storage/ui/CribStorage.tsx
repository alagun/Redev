import React, { useEffect, useState } from 'react'
import {
  Card,
  Typography,
  Input,
  Button,
  Divider,
  Space,
  Alert,
  Tabs,
  Switch,
  List,
} from 'antd'
import {
  DatabaseOutlined,
  CodeOutlined,
  SaveOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import Paragraph from 'antd/lib/typography/Paragraph'

const { Title, Text } = Typography
const { TabPane } = Tabs

const CribStorage = () => {
  const [localValue, setLocalValue] = useState<string>('')
  const [sessionValue, setSessionValue] = useState<string>('')
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [autoSave, setAutoSave] = useState<boolean>(false)

  // Загрузка данных при монтировании
  useEffect(() => {
    const savedLocal = localStorage.getItem('localStorageDemo')
    const savedSession = sessionStorage.getItem('sessionStorageDemo')

    if (savedLocal) setLocalValue(savedLocal)

    if (savedSession) setSessionValue(savedSession)
  }, [])

  // Автосохранение при изменении значения
  useEffect(() => {
    if (autoSave && localValue) {
      localStorage.setItem('localStorageDemo', localValue)
    }
  }, [localValue, autoSave])

  const saveToLocal = () => {
    localStorage.setItem('localStorageDemo', localValue)
  }

  const saveToSession = () => {
    sessionStorage.setItem('sessionStorageDemo', sessionValue)
  }

  const clearLocal = () => {
    localStorage.removeItem('localStorageDemo')
    setLocalValue('')
  }

  const clearSession = () => {
    sessionStorage.removeItem('sessionStorageDemo')
    setSessionValue('')
  }

  const storageFeatures = [
    {
      title: 'Local Storage',
      description: 'Данные сохраняются на неопределенный срок',
      actions: [
        { label: 'Сохранить', action: saveToLocal, icon: <SaveOutlined /> },
        { label: 'Очистить', action: clearLocal, icon: <DeleteOutlined /> },
      ],
    },
    {
      title: 'Session Storage',
      description: 'Данные очищаются при закрытии вкладки',
      actions: [
        { label: 'Сохранить', action: saveToSession, icon: <SaveOutlined /> },
        { label: 'Очистить', action: clearSession, icon: <DeleteOutlined /> },
      ],
    },
  ]

  return (
    <Card bordered={false}>
      <Title level={2} style={{ marginBottom: 16 }}>
        <DatabaseOutlined /> Web Storage API
      </Title>

      <Paragraph>
        <Text strong>LocalStorage и SessionStorage</Text> — механизмы хранения данных на стороне клиента.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Демонстрация работы
        </Title>
      </Divider>

      <Tabs defaultActiveKey='1'>
        {storageFeatures.map((storage, index) => (
          <TabPane tab={storage.title} key={String(index + 1)}>
            <Card bordered style={{ marginTop: 16 }}>
              <Space direction='vertical' style={{ width: '100%' }}>
                <Text strong>Текущее значение:</Text>
                <Input
                  value={index === 0 ? localValue : sessionValue}
                  onChange={e => index === 0
                    ? setLocalValue(e.target.value)
                    : setSessionValue(e.target.value)
                  }
                  placeholder={`Введите значение для ${storage.title}`}
                />

                {index === 0 && (
                  <Space>
                    <Text>Автосохранение:</Text>
                    <Switch checked={autoSave} onChange={setAutoSave} />
                  </Space>
                )}

                <Space>
                  {storage.actions.map((action, i) => (
                    <Button
                      key={i}
                      onClick={action.action}
                      icon={action.icon}
                    >
                      {action.label}
                    </Button>
                  ))}
                </Space>
              </Space>
            </Card>
          </TabPane>
        ))}
      </Tabs>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Различия хранилищ
        </Title>
      </Divider>

      <List
        dataSource={[
          {
            title: 'Local Storage',
            description: 'Доступен во всех вкладках одного домена, сохраняется после закрытия браузера',
            capacity: '~5-10MB',
          },
          {
            title: 'Session Storage',
            description: 'Доступен только в текущей вкладке, очищается при её закрытии',
            capacity: '~5-10MB',
          },
          {
            title: 'Cookies',
            description: 'Малый объем (~4KB), отправляется с каждым HTTP-запросом',
            capacity: '~4KB',
          },
        ]}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Text strong>{item.title}</Text>}
              description={
                <>
                  <Text>{item.description}</Text>
                  <br />
                  <Text type='secondary'>Объем: {item.capacity}</Text>
                </>
              }
            />
          </List.Item>
        )}
      />

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Лучшие практики
        </Title>
      </Divider>

      <Alert
        message='Не храните чувствительные данные в localStorage/sessionStorage'
        type='warning'
        showIcon
        style={{ marginBottom: 16 }}
      />

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowDetails(!showDetails)}
        style={{ marginTop: 16 }}
      >
        {showDetails ? 'Скрыть код' : 'Показать реализацию'}
      </Button>

      {showDetails && (
        <Card bordered style={{ marginTop: 16 }}>
          <Text code>
            {'// Сохранение в LocalStorage\n'}
            {'localStorage.setItem(\'key\', \'value\');\n'}
            {'const value = localStorage.getItem(\'key\');\n'}
            {'localStorage.removeItem(\'key\');\n\n'}
            {'// Сохранение в SessionStorage\n'}
            {'sessionStorage.setItem(\'key\', \'value\');\n'}
            {'const value = sessionStorage.getItem(\'key\');\n'}
            {'sessionStorage.removeItem(\'key\');\n\n'}
            {'// Реактивное использование с useState\n'}
            {'const [value, setValue] = useState(\n'}
            {'  () => localStorage.getItem(\'key\') || \'\'\n'}
            {');\n\n'}
            {'useEffect(() => {\n'}
            {'  localStorage.setItem(\'key\', value);\n'}
            {'}, [value]);'}
          </Text>
        </Card>
      )}
    </Card>
  )
}

export default CribStorage
