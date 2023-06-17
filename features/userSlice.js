import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        isLoggedIn: false,
        value: {},
        error: false,
        token: null
    },
    reducers: {
        checkToken: (state) => {
            //generate request for check token
        },
        logIn: (state, action) => {
            console.log(action.payload)
            state.value = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        logOut: (state) => {
            state.value = {}
            state.token = null
        }
    }
})



export const { logIn, setUser, setToken, logOut } = userSlice.actions

export default userSlice.reducer

