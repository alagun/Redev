import { Button, Typography, Space } from 'antd'
import { DeleteOutlined, AuditOutlined } from '@ant-design/icons'

const { Text } = Typography

interface ListItemProps {
  item: {
    id: number;
    text: string;
  };
  onModify: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ListItem = ({ item, onModify, onDelete }: ListItemProps) => {
  return (
    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
      <Text>{item.text}</Text>
      <Space>
        <Button
		  onClick={() => onModify(item.id)}
          icon={<AuditOutlined />}
	      shape='circle'
        />
        <Button
          danger
          onClick={() => onDelete(item.id)}
          icon={<DeleteOutlined />}
          shape='circle'
        />
      </Space>
    </Space>
  )
}