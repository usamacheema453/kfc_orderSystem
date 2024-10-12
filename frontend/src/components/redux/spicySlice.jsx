import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch Spicy Arabian items from API
export const fetchSpicyArabian = createAsyncThunk('spicyArabian/fetchSpicyArabian', async () => {
  const response = await axios.get('http://localhost:5000/api/spicyArabian'); // Adjust URL according to your API
  console.log(response);
  return response.data;
});

const spicyArabianSlice = createSlice({
  name: 'spicyArabian',
 // Initial state should match what you're trying to access:
initialState: {
    items: [],  // 'spicy' changed to 'items' for consistency
    status: 'idle',
    error: null,
},

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpicyArabian.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpicyArabian.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSpicyArabian.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default spicyArabianSlice.reducer;
