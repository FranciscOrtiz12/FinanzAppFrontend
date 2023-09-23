import { configureStore } from "@reduxjs/toolkit";  
import { authSlice } from './index'
import { loadingSlice } from './loading';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        loading: loadingSlice.reducer
    },
});