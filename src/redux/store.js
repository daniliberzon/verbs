import {configureStore} from '@reduxjs/toolkit';
import toggleIsLoggedIn from './logSlice';

export default configureStore({
    reducer: {
        log: toggleIsLoggedIn
    }
})