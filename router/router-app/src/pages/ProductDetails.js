import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    // const param = useParams();
    const {id} = useParams();
    // console.log('param', param)
    // console.log('param.productId', param.productId)
  return (
    <>
        <h1>ProductDetails</h1>
        <p>{id}</p>
    </>
  )
}

export default ProductDetails