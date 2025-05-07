import { useContext } from 'react'
import LOCAL_STORAGE_KEYS from '../../../shared/constants'
import { ThemeContext } from './ThemeContext'
import { Theme } from '../models/theme'

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme)
  }

  const setNewTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme)
  }

  return {
    theme,
    toggleTheme,
    setNewTheme,
  }
}

export default useTheme