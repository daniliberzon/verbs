import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
    name: "log",
    initialState: {
        isLoggedIn: -1,
    },
    reducers: {
        toggleIsLoggedIn: (state) => {
            state.isLoggedIn = state.isLoggedIn===1? 0 :1;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const { toggleIsLoggedIn, setIsLoggedIn } = logSlice.actions;

export default logSlice.reducer;