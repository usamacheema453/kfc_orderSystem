import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsByCategories = createAsyncThunk(
  'products/fetchByCategories',
  async (categoryNames, { rejectWithValue }) => {
    try {
      const queryString = categoryNames.map(name => `names[]=${encodeURIComponent(name)}`).join('&');
      const response = await axios.get(`http://localhost:5000/api/products?${queryString}`);
      console.log('products', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categorizedProducts: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Reset the state before updating with new categories
        state.categorizedProducts = {};
        action.payload.forEach(product => {
          if (!state.categorizedProducts[product.category.name]) {
            state.categorizedProducts[product.category.name] = [];
          }
          state.categorizedProducts[product.category.name].push(product);
        });
      })
      .addCase(fetchProductsByCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default productsSlice.reducer;