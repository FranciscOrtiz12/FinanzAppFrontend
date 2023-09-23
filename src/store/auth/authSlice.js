import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    status: localStorage.getItem('uid') ? 'authenticated' : 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: localStorage.getItem('uid') ? localStorage.getItem('uid') : null,
    email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
    displayName: localStorage.getItem('name') ? localStorage.getItem('name') : null,
    photoURL: localStorage.getItem('photoUrl') ? localStorage.getItem('photoUrl') : '',
    errorMessage: null,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.name;
            state.photoURL = payload.photoUrl;
            state.errorMessage = null;
        },
        logout: ( state, payload ) => {
            console.log(payload)
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.msg;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        },
        setErrorMessage: ( state, { payload } ) => {
            state.errorMessage = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, setErrorMessage } = authSlice.actions;