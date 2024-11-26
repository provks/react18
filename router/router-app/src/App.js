import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/Error';

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
  // NESTED Routes
  // const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <>
  //   <Route path='/root' element={<Navbar/>}>
  //     <Route index element={<Home />}/>
  //     <Route path="about" element={<About />} />
  //     <Route path="products" element={<Product />} />
  //   </Route>
  //   </>
  // ));

  // Step 1: create router (using this going ahead)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      errorElement: <ErrorPage />,
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
          // element: <Product/>
          children: [
            {
              path: "",
              element: <Product/>
            },
            {
              path: ":id",
              element: <ProductDetails/>
            }
        ]
        },
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
