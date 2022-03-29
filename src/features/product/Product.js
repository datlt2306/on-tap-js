import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './productSlice';

const Product = () => {
    const products = useSelector(data => data.product.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
  return (
    <div>
        {products.map(item => item.name)}
    </div>
  )
}

export default Product