import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";
import booksSlice from './booksSlice';

export const store = configureStore({
    reducer: {
        books: booksSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});
