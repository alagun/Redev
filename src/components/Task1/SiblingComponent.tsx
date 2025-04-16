import { Button, Typography } from 'antd';
import { useState } from 'react';

const { Text } = Typography;

const SiblingComponent = () => {
  const [text, setText] = useState('Исходный текст');

  const changeText = () => setText(text === 'Исходный текст' ? 'REDEV' : 'Исходный текст');

  return (
    <div>
      <Text>Текущий текст: {text}</Text>
      <Button type="primary" onClick={changeText} style={{ marginLeft: 10 }}>Изменить текст</Button>
    </div>
  );
};

export default SiblingComponent;