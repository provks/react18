import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
      {/* <Navbar/> */}
      <h1>Products Page</h1>
      <h1><Link to="/">Go back </Link></h1>
    </>
  )
}

export default Product