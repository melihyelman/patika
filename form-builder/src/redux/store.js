import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import editSlice from './editSlice';

export const store = configureStore({
    reducer: {
        global: globalSlice,
        edit: editSlice
    },
});