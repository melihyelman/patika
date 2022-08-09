import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
        },
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const loginASYNC = (user) => async dispatch => {
    try {
        const result = await axios(`${process.env.REACT_APP_BASE_ENDPOINT}/users`)
        const loginUser = await result.data.find(e => {
            if (e.email === user.email && e.password === user.password) {
                return e
            }
        })
        delete loginUser.password
        if (loginUser) {
            dispatch(login(loginUser))
            return loginUser;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e)
    }
}

export const registerASYNC = (user) => async dispatch => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`, user)
        return result.data
    } catch (e) {
        console.log(e)
    }
}


export const { login } = userSlice.actions;

export default userSlice.reducer;