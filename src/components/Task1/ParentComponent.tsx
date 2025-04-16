import { Button, Card, Space, Typography } from "antd";

import { useState } from "react";
import ChildComponent from "./ChildComponent";

// const { Title, Text } = Typography;
const { Text } = Typography;

const ParentComponent = () => {
	const [counter, setCounter] = useState(0);
  
	const increase = () => setCounter(counter + 1);
	const decrease = () => counter > 0 && setCounter(counter - 1);
	const reset = () => setCounter(0);
	const random = () => setCounter(Math.floor(Math.random() * 10) + 1);
  
	return (
	  <Card title="Задание 1: Работа с состоянием и props" style={{ marginBottom: 20 }}>
		<Space direction="vertical">
		  <Text>Счетчик: {counter}</Text>
		  <Space>
			<Button type="primary" onClick={increase}>Увеличить</Button>
			<Button danger onClick={decrease}>Уменьшить</Button>
			<Button onClick={reset}>Сбросить</Button>
			<Button onClick={random}>Случайное значение</Button>
		  </Space>
		  
		  <ChildComponent name="дорогой друг" counter={counter} />
		  {/* <SiblingComponent /> */}
		</Space>
	  </Card>
	);
  };
  
  export default ParentComponent;