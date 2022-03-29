import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        return data;
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        status: false
    },
    reducers: {
        getProduct(state){
            return state.value;
        },
        addProduct(state, action){
            console.log(action);
           state.value.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getProducts.fulfilled, (state, action) => {
              console.log(action);
            state.value = action.payload;
          });
      },
});

export const { getProduct, addProduct} = productSlice.actions;

export default productSlice.reducer;