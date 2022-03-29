import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from './productSlice';

const ProductAdd = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        dispatch(addProduct( {id: 1, name: "Product D"}))
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd