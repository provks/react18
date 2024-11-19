import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <h1>Home Page</h1>
      <Link to="/about">Go to About page</Link>
      <Link to="/products">Go to Products page</Link>
    </>
  )
}

export default Home