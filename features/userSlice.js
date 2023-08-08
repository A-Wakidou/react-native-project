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
            new AuthApi(Configuration, 'http://localhost:3000').authControllerCheckToken({ token: action.payload })
                .then((res) => {
                    if (res.data == true) {
                        return
                    }
                    else {
                        logOut()
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        logIn: (state, action) => {
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
            state.isLoggedIn = false
            state.value = {}
            state.token = null
            state.isLoggedIn = false
        }
    }
})



export const { logIn, setUser, setToken, checkToken, logOut } = userSlice.actions

export default userSlice.reducer

