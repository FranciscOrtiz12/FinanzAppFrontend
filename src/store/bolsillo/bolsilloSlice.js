import { createSlice } from '@reduxjs/toolkit';

export const bolsilloSlice = createSlice({
    name: 'bolsillo',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = bolsilloSlice.actions;