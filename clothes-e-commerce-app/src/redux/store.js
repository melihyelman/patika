import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import productSlice from './productSlice';
import basketSlice from './basketSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        basket: basketSlice,
    },
});