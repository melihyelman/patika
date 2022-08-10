import { createSlice } from '@reduxjs/toolkit';



const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite: localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [],
    },
    reducers: {
        addFavorite: (state, action) => {
            const product = action.payload;
            if (!state.favorite.find(item => item.id === product.id)) {
                state.favorite.push(action.payload)
            }
        },
        removefavorite: (state, action) => {
            const { id } = action.payload
            state.favorite = state.favorite.filter(item => item.id !== id)
        }
    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;