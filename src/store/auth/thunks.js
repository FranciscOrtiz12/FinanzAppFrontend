import axios from "axios";
import { checkingCredentials, login, logout, setErrorMessage } from "./authSlice";
import { setLoading } from '../loading/loadingSlice';


export const modifyErrorMessage = ( errorMessage ) => {
    return ( dispatch ) => {
        dispatch(setErrorMessage(errorMessage));
    }
}


export const startCreatingUserWithEmailPassword = ({ displayName, email, password, photoUrl }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        dispatch( modifyErrorMessage(null) );
        dispatch( setLoading(true) );

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_REACT_URL_BACKEND}/auth/newUser`, { name: displayName, email, password, photoUrl });
            if( !data.ok ) return dispatch(logout( data ));
            
            saveSessionOnLocalStorage(data);
            dispatch(login(data))
        } catch (error) {
            console.error(error);
            dispatch( modifyErrorMessage(error?.response?.data?.msg) );
        }
        
        dispatch( setLoading(false) );
    }
};


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        dispatch( setLoading(true) );

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_REACT_URL_BACKEND}/auth/`, { email, password })
            if( !data.ok ) return dispatch(logout( data ));

            saveSessionOnLocalStorage(data);
            dispatch( login( data ));
        } catch (error) {
            console.error(error);
            dispatch( modifyErrorMessage(error?.response?.data?.msg) );
        };

        dispatch( setLoading(false) );
    }
};


export const startLogout = () => {
    localStorage.clear();
    return (dispatch) => {
        dispatch( logout({}) );
    }
}


const saveSessionOnLocalStorage = ({ uid, name, email, photoUrl, token }) => {
    localStorage.setItem('uid', uid);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('photoUrl', photoUrl);
    localStorage.setItem('token', token);
    localStorage.setItem('token-init-date', new Date().getTime() );
}