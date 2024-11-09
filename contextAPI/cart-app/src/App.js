import { useState } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import Navbar from './components/Navbar';
import { itemContext } from './itemContext';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <>
      <h2 className='App'>Cart-App</h2>
      <itemContext.Provider value={{total, setTotal}}>
        <Navbar/>
        <ItemsList/>
      </itemContext.Provider>
    </>
  );
}

export default App;
