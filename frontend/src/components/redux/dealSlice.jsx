import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Async action to fetch deals from API
export const fetchDeals = createAsyncThunk('deals/fetchDeals', async () => {
  const response = await axios.get('http://localhost:5000/api/deals'); // Adjust URL according to your API
  // console.log(response);
  return response.data;
});

const dealSlice = createSlice({
  name: 'deals',
  initialState: {
    deals: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deals = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dealSlice.reducer;
