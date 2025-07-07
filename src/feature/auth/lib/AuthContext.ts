import { createContext } from 'react'

export interface AuthContextValue {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  isAuth: false,
  setAuth: () => {},
})