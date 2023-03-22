import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
    name: 'log',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        toggleIsLoggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
})

export const { toggleIsLoggedIn } = logSlice.actions;

export default logSlice.reducer;