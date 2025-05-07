import { useState } from 'react'

import { Menu } from '../widgets'
import { InProgress } from '../feature/component-in-progress'
import { ParentComponent } from '../feature/component-hierarchy'
import { LifecycleTask } from '../feature/lifecycle-task'
import { ListTask } from '../feature/list-task'
import { ThemeToggle } from '../feature/theme-toggle'

import './styles/App.scss'

function App () {

  const [selectedKey, setSelectedKey] = useState('1')

  const renderContent = () => {
    switch(selectedKey) {
      case '1':
        return <ParentComponent />
      case '2':
        return <LifecycleTask />
      case '3':
        return <ListTask />
      case '4':
        return <ThemeToggle />
      case '100':
        return <InProgress />
      default:
        return <InProgress />
    }
  }

  return (
    <div className={'wrapper'}>
      <div className={'app'}>
        <Menu selectedKey={selectedKey} onSelect={setSelectedKey} />
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default App
