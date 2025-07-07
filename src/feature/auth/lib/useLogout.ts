import { removeToken } from '@/shared/lib/auth/token'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useLogout = () => {
  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth(false)
    removeToken()
    navigate('/login')
  }

  return { handleLogout }
}