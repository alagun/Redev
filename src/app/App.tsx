import { Menu } from '../widgets'
import { Outlet } from 'react-router-dom'
import './styles/App.scss'

function App () {
  return (

    <div className='wrapper'>
      <div className='app'>
        <Menu />
        <div className='main'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App