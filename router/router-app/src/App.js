import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  // Another way of implmenting routes
  // const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />}/>
  //     <Route path="about" element={<About />} />
  //     <Route path="products" element={<Product />} />
  //   </>
  // ));

  // Step 1: create router (using this going ahead)
  const router = createBrowserRouter([
    {
      path: "/root",
      element: <Navbar/>,
      children: [
        {
          // path: "",
          index: true,
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "products",
          element: <Product/>
        }
      ]
    },
  ])

  return (
    <>
      {/* step2: Provide router */}
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
