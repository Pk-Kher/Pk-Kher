
import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/User';

export const store = configureStore({
    reducer: {
        user
    },

})
