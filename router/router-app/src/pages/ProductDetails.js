import React from 'react'
import { useParams } from 'react-router-dom';
import { productList } from '../productsData/products'

function ProductDetails() {
    // const param = useParams();
    const {id} = useParams();
    console.log('id', id)
    console.log('productList', productList)
    const product = productList?.find(product => product.id === +id);
    console.log('product', product)
    // console.log('param', param)
    // console.log('param.productId', param.productId)
  return (
    <>
        <h1>ProductDetails</h1>
         <h2>{product?.title}</h2>
        <h2>{product?.description}</h2>
        <h2>{product?.price}</h2> 
    </>
  )
}

export default ProductDetails