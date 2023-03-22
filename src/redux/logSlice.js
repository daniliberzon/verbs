import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
    name: "log",
    initialState: {
        isLoggedIn: false,
        userEmail: "",
        userPassword: ""
    },
    reducers: {
        toggleIsLoggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        setUserPassword: (state, action) => {
            state.userPassword = action.payload;
        }
    }
})

export const { toggleIsLoggedIn, setUserEmail, setUserPassword } = logSlice.actions;

export default logSlice.reducer;