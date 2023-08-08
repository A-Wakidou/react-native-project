import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        value: [],
        error: false,
        total: null
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.value.length > 0) {
                for (var i = 0; i < state.value.length; i++) {
                    if (state.value[i].id == action.payload.item.id) {
                        if (state.value[i].stock >= state.value[i].quantity + action.payload.amount) {
                            state.value[i].quantity += action.payload.amount
                        }
                        else state.error = true
                    }
                }
                const found = state.value.find(element => element.id == action.payload.item.id)
                if (!found) {
                    let item = action.payload.item
                    item.quantity = action.payload.amount
                    state.value = [...state.value, item]
                }
            }
            else {
                let item = action.payload.item
                item.quantity = action.payload.amount
                state.value = [item]
            }
        },
        calculateTotal(state) {
            if (state.value.length > 0) {
                state.value.reduce((accumulator, currentValue) => {
                    state.total = accumulator.price + currentValue.price
                })
            }
        },
        resetCartError: (state) => {
            state.error = false
        },
        resetCart: (state) => {
            state.value = []
        }
    }
})



export const { addToCart, resetCart, resetCartError, calculateTotal } = cartSlice.actions

export default cartSlice.reducer

