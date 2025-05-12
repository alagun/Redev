import React from 'react'
import { Typography, Card, Divider, Row, Col } from 'antd'

const { Title, Text, Paragraph } = Typography

const Introduction = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      <Card>
        <Title level={2} style={{ marginBottom: '24px' }}>
          React - это JavaScript-библиотека для создания пользовательских интерфейсов
        </Title>

        <Divider orientation='left'>
          <Title level={4} style={{ margin: 0 }}>
            Основные концепции
          </Title>
        </Divider>

        <Paragraph>
          <ul>
            <li>
              <Text strong>Компонентный подход</Text> - UI разбивается на независимые компоненты
            </li>
            <li>
              <Text strong>Декларативность</Text> - описываем что должно отобразиться, а не как
            </li>
            <li>
              <Text strong>Однонаправленный поток данных</Text> - данные передаются сверху вниз через props
            </li>
            <li>
              <Text strong>Virtual DOM</Text> - оптимизирует обновления реального DOM
            </li>
          </ul>
        </Paragraph>

        <Divider orientation='left'>
          <Title level={4} style={{ margin: 0 }}>
            Почему React?
          </Title>
        </Divider>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title='Традиционный подход (jQuery)' size='small'>
              <Text code copyable>
                {`$('#button').on('click', function() {
  $('#counter').text(parseInt($('#counter').text()) + 1);
});`}
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title='React подход' size='small'>
              <Text code copyable>
                {`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
              </Text>
            </Card>
          </Col>
        </Row>

        <Divider orientation='left'>
          <Title level={4} style={{ margin: 0 }}>
            Где используется React?
          </Title>
        </Divider>

        <Paragraph>
          <ul>
            <li>Веб-приложения (Facebook, Instagram, Airbnb)</li>
            <li>Мобильные приложения (React Native)</li>
            <li>Десктопные приложения (Electron + React)</li>
            <li>Статические сайты (Gatsby, Next.js)</li>
          </ul>
        </Paragraph>
      </Card>
    </div>
  )
}

export default Introduction