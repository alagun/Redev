import { Typography } from 'antd';

const { Text } = Typography;

type TChildProps = {
  name?: string;
  counter: number;
}

const ChildComponent = ({ name = 'Андрей', counter }: TChildProps) => (
  <Text>Привет, {name}! Текущий счетчик: {counter}</Text>
);

export default ChildComponent;