import { useState, useEffect } from 'react';
import { Button, Card, Typography } from 'antd';

const { Text } = Typography;

const FunctionalLifecycle = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<unknown[]>([]);

  // componentDidMount
  useEffect(() => {
    console.log('Компонент смонтирован');
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://todo-redev.herokuapp.com/api/users');
        const data = await response.json();
        setTodos(data);
        console.log('Данные получены:', data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchTodos();

    // componentWillUnmount
    return () => {
      console.log('Компонент будет размонтирован');
    };
  }, []);

  // componentDidUpdate для count
  useEffect(() => {
    console.log('Значение count изменилось:', count);
  }, [count]);

  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  // shouldComponentUpdate
  if (count % 2 !== 0) {
    console.log('Нечётное значение, пропускаем рендер');
  }

  return (
    <Card title="Функциональный компонент" style={{ marginBottom: 20 }}>
      <Text>Текущее значение count: {count}</Text>
      <Button onClick={increaseCount} style={{ marginLeft: 10 }}>
        Увеличить
      </Button>
      <div style={{ marginTop: 10 }}>
        <Text>Количество пользователей: {todos.length}</Text>
      </div>
    </Card>
  );
};


export default FunctionalLifecycle;