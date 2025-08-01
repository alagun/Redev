import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './app/providers/ThemeProvider'
import { router } from './app/router'
import 'antd/dist/reset.css'
import './app/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './app/providers/StoreProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store= {store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
