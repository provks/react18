import React from 'react'
import { Link } from 'react-router-dom';
import  { productList } from '../productsData/products';

function Product() {
  return (
    <>
      {/* <Navbar/> */}
      <h1>Products Page</h1>
      {/* Fetch the products list from BE API */}
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <h1><Link to="/">Go back </Link></h1>
    </>
  )
}

export default Product