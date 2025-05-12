import React from 'react'
import { Typography, Card, List } from 'antd'

const { Title, Text, Paragraph } = Typography

const ProjectStructure = () => {
  const structureData = [
    {
      title: 'public/',
      description: 'Статические файлы (index.html, favicon и др.)',
    },
    {
      title: 'src/',
      description: 'Исходный код приложения',
    },
    {
      title: 'components/',
      description: 'UI компоненты (кнопки, формы, карточки и др.)',
    },
    {
      title: 'pages/',
      description: 'Страницы приложения',
    },
    {
      title: 'assets/',
      description: 'Изображения, шрифты, иконки и другие медиафайлы',
    },
    {
      title: 'styles/',
      description: 'Глобальные стили, темы',
    },
    {
      title: 'utils/',
      description: 'Вспомогательные функции, утилиты',
    },
  ]

  return (
    <Card bordered={false}>
      <Title level={2} style={{ marginBottom: 16 }}>
        С чего начать? Структура проекта
      </Title>

      <Paragraph>
        <Text strong>Типичная структура React-проекта включает:</Text>
      </Paragraph>

      <List
        itemLayout='horizontal'
        dataSource={structureData}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Text code>{item.title}</Text>}
              description={item.description}
            />
          </List.Item>
        )}
        style={{ marginTop: 16 }}
      />

      <Paragraph style={{ marginTop: 24 }}>
        <Text type='secondary'>
          Совет: Для создания проекта используйте <Text code>create-react-app</Text>,
          <Text code>Vite</Text> или <Text code>Next.js</Text> - они предоставляют
          готовую структуру проекта.
        </Text>
      </Paragraph>
    </Card>
  )
}

export default ProjectStructure