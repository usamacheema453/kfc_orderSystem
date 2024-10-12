import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch Dips from API
export const fetchDips = createAsyncThunk('dips/fetchDips', async () => {
  const response = await axios.get('http://localhost:5000/api/dips');
  return response.data;
});

const dipSlice = createSlice({
  name: 'dips',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDips.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchDips.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default dipSlice.reducer;
