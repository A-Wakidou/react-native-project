import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        value: [],
        error: false,
        total: 0
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
        deleteInCart(state, action) {
            // const found = state.value.find(element => element.id == action.payload)
            // const product = (element) => element.id = action.payload
            console.log(action.payload)
            const index = state.value.findIndex((element) => element.id == action.payload)
            state.value = [...state.value.slice(0, index), ...state.value.slice(index+1)]
        },
        calculateTotal(state) {
            if (state.value.length > 0) {
                let total = state.value.reduce((accumulator, currentValue) =>  accumulator + (currentValue.price * currentValue.quantity), 0)
                state.total = total + 5.99
            }
            else {
                state.total = null
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



export const { addToCart, deleteInCart, resetCart, resetCartError, calculateTotal } = cartSlice.actions

export default cartSlice.reducer

