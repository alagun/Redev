import { createContext } from 'react'
import { Theme, ThemeContextProps } from '../models/theme'


export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
})