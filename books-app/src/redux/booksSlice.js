import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const booksSlice = createSlice({
    name: "books",
    initialState: {
        data: [],
    },
    reducers: {
        getBooks: (state, action) => {
            state.data = [...action.payload]
        }
    },
})

export const getBooksAsync = (booksName) => async (dispatch) => {
    try {
        const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=intitle:${booksName}&printType=books&orderBy=newest`)
        dispatch(getBooks(response.data.items))
    } catch (err) {
        throw new Error(err)
    }
}


export const { getBooks } = booksSlice.actions;

export default booksSlice.reducer;
