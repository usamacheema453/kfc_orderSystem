import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch Extras from API
export const fetchExtras = createAsyncThunk('extras/fetchExtras', async () => {
  const response = await axios.get('http://localhost:5000/api/extras');
  return response.data;
});

const extraSlice = createSlice({
  name: 'extras',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExtras.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExtras.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchExtras.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default extraSlice.reducer;
