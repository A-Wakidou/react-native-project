import { createSlice } from '@reduxjs/toolkit'
import { AuthApi } from '../client'
import { Configuration } from '../client'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        isLoggedIn: false,
        value: {},
        error: false,
        token: null
    },
    reducers: {
        checkToken: (state, action) => {
            console.log(action.payload)
            new AuthApi(Configuration, 'http://localhost:3000').authControllerCheckToken({token: action.payload})
                .then( (res) => {
                    console.log(res);
                })
                .catch( (err) => {
                    console.log(err);
                })
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



export const { logIn, setUser, setToken, checkToken, logOut } = userSlice.actions

export default userSlice.reducer

