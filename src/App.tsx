import InProgress from './components/InProgress/InProgress'
import Menu from './components/menu/Menu'
import ParentComponent from './components/Task1/ParentComponent'
import './styles/App.css'

function App() {

  return (
    <>
      <Menu/>
      <ParentComponent/>
      <InProgress/>
    </>
  )
}

export default App
