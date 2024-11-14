import { useState } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Navbar from './components/Navbar';
import { itemContext } from './itemContext';
import { totalContext } from './totalContext';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <>
      <h2 className='App'>Cart-App</h2>
      <itemContext.Provider value={{ item, setItem }}>
        <totalContext.Provider value={{ total, setTotal }}>
          <Navbar/>
          <ItemsList/>
        </totalContext.Provider>
      </itemContext.Provider>
    </>
  );
}

export default App;
