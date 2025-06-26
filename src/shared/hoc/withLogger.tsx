import { ComponentType, useEffect } from 'react'
import { notification } from 'antd'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withLogger<T extends { log?: (message: string, data?: any) => void }>(
  WrappedComponent: ComponentType<T>,
) {
  return function WithLogger (props: Omit<T, 'log'>) {
    useEffect(() => {
      notification.info({
        message: 'Component Mounted',
        description: `Component ${WrappedComponent.displayName || WrappedComponent.name} mounted`,
        duration: 3,
      })

      return () => {
        notification.info({
          message: 'Component Unmounted',
          description: `Component ${WrappedComponent.displayName || WrappedComponent.name} unmounted`,
          duration: 3,
        })
      }
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const log = (message: string, data?: any) => {
      notification.info({
        message: 'Log Message',
        description: message,
        duration: 3,
      })

      if (data !== undefined) {
        // eslint-disable-next-line no-console
        console.log('[Logger Data]', data)
      }
    }

    return <WrappedComponent {...(props as T)} log={log} />
  }
}