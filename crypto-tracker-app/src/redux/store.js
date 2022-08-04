import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cryptoSlice from './cryptoSlice';

export const store = configureStore({
    reducer: {
        crypto: cryptoSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});