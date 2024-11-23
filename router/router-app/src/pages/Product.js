import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
      {/* <Navbar/> */}
      <h1>Products Page</h1>
      <ul>
        <li>
        <Link to="p1">Product 1</Link>
        </li>
        <li>
        <Link to="p2">Product 2</Link>
        </li>
        <li>
        <Link to="p3">Product 3</Link>
        </li>
      </ul>
      <h1><Link to="/">Go back </Link></h1>
    </>
  )
}

export default Product