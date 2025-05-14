import { Card, Typography, Divider } from 'antd'

const { Title, Paragraph, Text } = Typography

const VirtualDOM = () => {
  return (
    <Card >
      <Title level={2} style={{ marginBottom: 16 }}>
        Введение в Virtual DOM
      </Title>

      <Paragraph>
        <Text strong>Virtual DOM (виртуальный DOM)</Text>
        — это концепция программирования, где «виртуальное» представление UI хранится в памяти и синхронизируется с «настоящим» DOM.
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Как это работает?
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>1. Создание Virtual DOM:</Text> React создает легковесную копию реального DOM
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>2. Изменения в Virtual DOM:</Text> При обновлении состояния, React сначала вносит изменения в Virtual DOM
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>3. Сравнение (Diffing):</Text> React сравнивает новую и предыдущую версии Virtual DOM
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>4. Обновление реального DOM:</Text> Только необходимые изменения применяются к реальному DOM
          </li>
        </ul>
      </Paragraph>

      <Divider orientation='left' style={{ margin: '24px 0 16px' }}>
        <Title level={4} style={{ margin: 0 }}>
          Преимущества
        </Title>
      </Divider>

      <Paragraph>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Производительность:</Text> Минимизация операций с реальным DOM
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Абстракция:</Text> Разработчики работают с декларативным API
          </li>
          <li style={{ marginBottom: 8 }}>
            <Text strong>Кроссплатформенность:</Text> Одна и та же логика для web, mobile и desktop
          </li>
        </ul>
      </Paragraph>

      <Paragraph style={{ marginTop: 24 }}>
        <Text type='secondary'>
          Virtual DOM — это не особенность React, а паттерн, который можно реализовать и в других библиотеках.
        </Text>
      </Paragraph>
    </Card>
  )
}

export default VirtualDOM