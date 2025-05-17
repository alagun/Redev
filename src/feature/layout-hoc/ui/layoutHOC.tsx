import { UserProfile } from '@/feature/user-profile'
import { SyncOutlined } from '@ant-design/icons'
import { Card, Space, Switch, Spin, Typography } from 'antd'
import { ComponentType, useState } from 'react'

const { Text } = Typography

interface WithLoadingProps {
  loading?: boolean;
}

const layoutHOC = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithLoading = (props:P & WithLoadingProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(props.loading || false)

    return (
      <Card
        style={{ marginBottom: 24 }}
        title={
          <Space>
            <SyncOutlined />
            <Text strong>Компонент с загрузкой</Text>
          </Space>
        }
        extra={
          <Switch
            checked={isLoading}
            onChange={checked => setIsLoading(checked)}
            checkedChildren='Загрузка'
            unCheckedChildren='Готово'
          />
        }
      >
        <Spin spinning={isLoading} tip='Загрузка...' size='large'>
          <WrappedComponent {...props as P} />
        </Spin>
      </Card>
    )
  }

  return WithLoading
}

const ProfileWithLoading = layoutHOC(UserProfile)

export default ProfileWithLoading