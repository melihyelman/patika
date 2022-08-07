import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const generateElement = (type) => {
    const commonFields = {
        id: nanoid(),
        type,
        placeholder: 'Placeholder Label',
    }

    switch (type) {
        case 'text-input':
        case 'text-area':
            return commonFields
        case 'dropdown':
            return {
                ...commonFields,
                options: [
                    {
                        label: 'Option 1',
                        value: 'default value',
                    },
                ],
            }
        default:
            return null
    }
}

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        elements: [],
        edit: false,
    },
    reducers: {
        addElement: (state, action) => {
            const { type } = action.payload
            state.elements.push(generateElement(type))
        },

        addAtElement: (state, action) => {
            const { index, type } = action.payload
            state.elements.splice(index, 0, generateElement(type))
        },

        moveElement: (state, action) => {
            const { from, to } = action.payload
            const elements = [...state.elements]
            const element = elements[from]
            elements.splice(from, 1)
            elements.splice(to, 0, element)
            state.elements = elements
        },

        removeElement: (state, action) => {
            const { id } = action.payload
            state.elements = state.elements.filter(
                (element) => element.id !== id
            )
        },

        updateElement: (state, action) => {
            const { id, element } = action.payload
            const elements = [...state.elements]
            const index = elements.findIndex((element) => element.id === id)
            elements[index] = element
            state.elements = elements
        },
        setEdit: (state, action) => {
            state.edit = action.payload
        }
    },
})

export const {
    addElement,
    moveElement,
    addAtElement,
    removeElement,
    updateElement,
    setEdit,
} = globalSlice.actions

export default globalSlice.reducer
