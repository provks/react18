import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="products" element={<Product />} />
    </>
  ));

  // Step 1: create router (using this going ahead)
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   },
  //   {
  //     path: "/products",
  //     element: <Product/>
  //   }
  // ])

  return (
    <>
      {/* Provide router */}
      <Navbar/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
