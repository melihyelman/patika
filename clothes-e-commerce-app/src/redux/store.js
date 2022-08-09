import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import userSlice from './userSlice';
import productSlice from './productSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        category: categorySlice,
        product: productSlice,
    },
});