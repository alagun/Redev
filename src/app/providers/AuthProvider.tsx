import { AuthContext } from '@/feature/auth/lib/AuthContext'
import { getToken, removeToken } from '@/shared/lib/auth/token'
import { ReactNode, useCallback, useEffect, useState } from 'react'

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(!!getToken())

  useEffect(() => {
    const handleStorage = () => setIsAuth(!!getToken())

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const setAuth = useCallback((value: boolean) => {
    setIsAuth(value)

    if (!value) removeToken()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
