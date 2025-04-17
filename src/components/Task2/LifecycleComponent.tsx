import { Button, Card, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

class LifecycleComponent extends React.Component<object, { count: number; todos: unknown[] }> {
  constructor(props: object) {
    super(props);
    this.state = { 
      count: 0,
      todos: []
    };
  }

  async componentDidMount() {
    console.log('Компонент смонтирован');
    try {
      const response = await fetch('https://todo-redev.herokuapp.com/api/users');
      const data = await response.json();
      this.setState({ todos: data });
      console.log('Данные получены:', data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

  componentDidUpdate(_prevProps: object, prevState: { count: number }) {
    console.log('Компонент обновился. Текущее значение count:', this.state.count);
    
    if (this.state.count !== prevState.count) {
      console.log('Значение count изменилось:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Компонент будет размонтирован');
  }

  shouldComponentUpdate(_nextProps: object, nextState: { count: number }) {
    return nextState.count % 2 === 0;
  }

  increaseCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <Card title="Классовый компонент" style={{ marginBottom: 20 }}>
        <Text>Текущее значение count: {this.state.count}</Text>
        <Button onClick={this.increaseCount} style={{ marginLeft: 10 }}>
          Увеличить
        </Button>
        <div style={{ marginTop: 10 }}>
          <Text>Количество пользователей: {this.state.todos.length}</Text>
        </div>
      </Card>
    );
  }
}

export default LifecycleComponent;