import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { productList } from '../productsData/products'

function ProductDetails() {
    // const param = useParams();
    const {id} = useParams();
    const product = productList?.find(product => product.id === +id);
  return (
    <>
        <h1>ProductDetails</h1>
         <h2>{product?.title}</h2>
        <h2>{product?.description}</h2>
        <h2>{product?.price}</h2> 
        <h2>
          <Link to={-1}>Go to Products</Link>
        </h2>
    </>
  )
}

export default ProductDetails