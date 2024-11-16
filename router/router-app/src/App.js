
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar setPage={setPage}/>
      {page === 'home' && <Home/>}
      {page === 'about' && <About/>}
      {page === 'product' && <Product/>}
    </>
  );
}

export default App;
