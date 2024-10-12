import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch fries from API
export const fetchFries = createAsyncThunk('fries/fetchFries', async () => {
  const response = await axios.get('http://localhost:5000/api/fries');
  return response.data;
});

const frySlice = createSlice({
  name: 'fries',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFries.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchFries.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default frySlice.reducer;
