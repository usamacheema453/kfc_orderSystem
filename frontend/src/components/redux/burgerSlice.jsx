// src/redux/burgerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch burgers from API
export const fetchBurgers = createAsyncThunk('burgers/fetchBurgers', async () => {
  const response = await axios.get('http://localhost:5000/api/burgers'); // Adjust URL according to your API
  
  return response.data;
  
});

const burgerSlice = createSlice({
  name: 'burgers',
  initialState: {
    burgers: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Define non-async actions here if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.burgers = action.payload; // Add fetched burgers to the state
      })
      .addCase(fetchBurgers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default burgerSlice.reducer;
