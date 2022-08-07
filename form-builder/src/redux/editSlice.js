import { createSlice } from '@reduxjs/toolkit'

export const editSlice = createSlice({
    name: 'drawer',
    initialState: {
        edit: false,
        activeId: null,
    },
    reducers: {
        openEdit: (state, action) => {
            const { id } = action.payload
            state.edit = true
            state.activeId = id
        },

        closeEdit: (state) => {
            state.edit = false
        },
    },
})

export const { openEdit, closeEdit } = editSlice.actions
export default editSlice.reducer
