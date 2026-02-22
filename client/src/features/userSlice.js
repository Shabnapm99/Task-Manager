import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedin: false,
        authUser: null,
        isCheckingAuth: true
    },
    reducers: {
        setIsLoggedin: (state, action) => {
            state.isLoggedin = action.payload
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
            state.isCheckingAuth = false; // Set to false once we have user data
        }
    }
})

export const { setAuthUser, setIsLoggedin } = userSlice.actions
export default userSlice.reducer