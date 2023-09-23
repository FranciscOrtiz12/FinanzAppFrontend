import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false
    },
    reducers: {
        setLoading: ( state, { payload } ) => {
            state.isLoading = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setLoading } = loadingSlice.actions;