import { Menu } from '../widgets'
import { Outlet } from 'react-router-dom'
import './styles/App.scss'
import { AuthProvider } from './providers/AuthProvider'

function App () {
  return (
    <AuthProvider>
      <div className='wrapper'>
        <div className='app'>
          <Menu />
          <div className='main'>
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App