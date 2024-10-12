// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './burgerSlice';
import dealReducer from './dealSlice';
import spicyArabianReducer from './spicySlice'; // Import the spicy Arabian slice
import extraReducer from './extraSlice'; // Import the extra slice
import fryReducer from './frySlice'; // Import the fry slice
import dipReducer from './dipSlice'; 
import cartReducer from './cartSlice';


export const store = configureStore({
  reducer: {
    burgers: burgerReducer,
    deals: dealReducer, // Add deal reducer to the store
    spicyArabian: spicyArabianReducer,
    extras: extraReducer, 
    fries: fryReducer, // Add fry reducer to the store
    dips: dipReducer,
    cart: cartReducer
  },
});
