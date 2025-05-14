import React, { useState } from 'react'
import { Card, Typography, Button, Divider, Space, Alert } from 'antd'
import { BulbOutlined, CodeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ThemeSwitch } from '@/shared/theme-switch'
import { useTheme } from '@/feature/theme-toggle'

const { Title, Text, Paragraph } = Typography

const CribContext: React.FC = () => {
  const { theme } = useTheme()
  const [showCode, setShowCode] = useState(false)

  return (
    <Card >
      <Title level={2} style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <BulbOutlined /> Context API (useContext)
      </Title>

      <Paragraph style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <Text strong>Контекст</Text> позволяет передавать данные через дерево компонентов без явной передачи пропсов.
      </Paragraph>

      <Divider orientation='left' style={{
        borderColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}>
        <Title level={4} style={{
          margin: 0,
          color: theme === 'light' ? '#000' : '#fff',
        }}>
            Демонстрация переключения темы
        </Title>
      </Divider>

      <Space direction='vertical' size='middle' style={{ marginTop: 24 }}>
        <ThemeSwitch/>

        <Alert
          message={`Текущая тема: ${theme === 'light' ? 'Светлая' : 'Тёмная'}`}
          type={theme === 'light' ? 'info' : 'warning'}
          showIcon
        />
      </Space>

      <Divider orientation='left' style={{
        borderColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}>
        <Title level={4} style={{
          margin: 0,
          color: theme === 'light' ? '#000' : '#fff',
        }}>
            Принципы работы
        </Title>
      </Divider>

      <Paragraph style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Создание контекста:</Text> React.createContext()
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Провайдер:</Text> Обеспечивает доступ к значению для дочерних компонентов
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Потребление:</Text> useContext() для доступа к значению
          </li>
        </ul>
      </Paragraph>

      <Button
        type='dashed'
        icon={<CodeOutlined />}
        onClick={() => setShowCode(!showCode)}
        style={{ marginTop: 16 }}
      >
        {showCode ? 'Скрыть код' : 'Показать пример'}
      </Button>

      {showCode && (
        <Card style={{ marginTop: 16 }}>
          <pre>
            <code>
        import React, {'{ createContext, useContext, useState }'} from &apos;react&apos;;
              {'\n\n'}
        interface ThemeContextType {'{\n'}
          theme: string;{'\n'}
          toggleTheme: () ={'>'} void;{'\n'}
              {'}\n\n'}
        const ThemeContext = createContext{'<ThemeContextType | undefined>'}(undefined);
              {'\n\n'}
        const Context: React.FC = () ={'>'} {'{\n'}
          const [theme, setTheme] = useState{'<string>'}(&apos;light&apos;);
              {'\n\n'}
          const toggleTheme = () ={'>'} {'{\n'}
            setTheme(prev ={'>'} prev === &apos;light&apos; ? &apos;dark&apos; : &apos;light&apos;);
              {'};\n\n'}
          return (
              {'<ThemeContext.Provider value={{ theme, toggleTheme }}>\n'}
              {'{/* Дочерние компоненты */}\n'}
              {'</ThemeContext.Provider>\n'}
          );
              {'};\n\n'}
        const ThemeButton: React.FC = () ={'>'} {'{\n'}
          const context = useContext(ThemeContext);{'{\n'}
          if (!context){'{\n'}
          throw new Error(&apos;Component must be used within a ThemeProvider&apos;);
              {'\n\n'}
          return (
              {'<button onClick={context.toggleTheme}>\n'}
              {'Toggle Theme (${context.theme})\n'}
              {'</button>\n'}
          );
              {'};\n\n'}
        export default Context;
            </code>
          </pre>
        </Card>
      )}
      <Paragraph>
        <Link to='/theme'>Пример Task4</Link>
      </Paragraph>
    </Card>
  )
}

export default CribContext

