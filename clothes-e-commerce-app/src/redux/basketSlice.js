import { createSlice } from '@reduxjs/toolkit';



const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
    },
    reducers: {
        addBasket: (state, action) => {
            const product = action.payload;
            if (!state.basket.find(item => item.id === product.id)) {
                state.basket.push(action.payload)
            }
        },
        removeBasket: (state, action) => {
            const { id } = action.payload
            state.basket = state.basket.filter(item => item.id !== id)
        }
    }
})

export const { addBasket, removeBasket } = basketSlice.actions;

export default basketSlice.reducer;