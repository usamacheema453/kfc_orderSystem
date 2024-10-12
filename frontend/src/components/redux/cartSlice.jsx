import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { _id, quantity, price } = action.payload;
      const existingItem = state.items.find(item => item._id === _id);

      if (existingItem) {
        // If the item already exists, increment its quantity
        existingItem.quantity += quantity;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({
          ...action.payload,
          price: Number(price), // Ensure price is a number
        });
      }

      // Recalculate subtotal, tax, and total after adding the item
      calculateTotals(state);
    },
    removeItem: (state, action) => {
      // Filter out the item that matches the provided _id
      state.items = state.items.filter(item => item._id !== action.payload._id);

      // Recalculate totals after removing the item
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;

      // Validation to prevent invalid quantities
      if (typeof quantity !== 'number' || quantity < 1) {
        console.error('Invalid quantity');
        return;
      }

      // Find the item and update its quantity
      const item = state.items.find(item => item._id === _id);
      if (item) {
        item.quantity = quantity;
      }

      // Recalculate totals after updating the quantity
      calculateTotals(state);
    },
  },
});

// Utility function to calculate subtotal, tax, and total
const calculateTotals = (state) => {
  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.16; // Assuming a tax rate of 16%
  const total = subtotal + tax;

  state.subtotal = subtotal;
  state.tax = tax;
  state.total = total;
};

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
