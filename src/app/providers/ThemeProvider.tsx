import { ReactNode, useEffect, useState } from 'react'
import LOCAL_STORAGE_KEYS from '../../shared/constants'
import { Theme, ThemeContext, ThemeContextProps } from '../../feature/theme-toggle'

type ThemeProviderProps = {
  children: ReactNode;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme) || Theme.LIGHT

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme)
  }, [theme])

  const defaultValue: ThemeContextProps = {
    theme: theme,
    setTheme: setTheme,
  }

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider