import { useState } from 'react';
import InProgress from './components/InProgress/InProgress'
import Menu from './components/menu/Menu'
import ParentComponent from './components/Task1/ParentComponent'
import './styles/App.css'

function App() {

  const [selectedKey, setSelectedKey] = useState('1');

  const renderContent = () => {
    switch(selectedKey) {
      case '1':
        return <ParentComponent />;
      case '2':
        return <InProgress />;
      default:
        return <InProgress />;
    }
  };

  return (
    <>
      <Menu selectedKey={selectedKey} onSelect={setSelectedKey} />
      <div style={{ marginLeft: 95, padding: '20px' }}>
        {renderContent()}
      </div>
    </>
  )
}

export default App
