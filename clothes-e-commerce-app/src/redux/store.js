import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import productSlice from './productSlice';
import basketSlice from './basketSlice';
import favoriteSlice from './favoriteSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        basket: basketSlice,
        favorite: favoriteSlice
    },
});