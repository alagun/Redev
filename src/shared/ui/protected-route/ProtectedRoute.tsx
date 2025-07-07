import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/feature/auth/lib/useAuth'

type TProtectedRoute = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }:TProtectedRoute) => {
  const { isAuth } = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}