// TODO: Desde la primera función que vamos a crear dentro de nuestro thunks.js, que llamaremos checkingAuthentication, realizar un dispatch de checkingCredentials, cuando se la llame en la función que se ejecuta al hacer click en el botón login. Como resultado tendrá que cambiar el status de nuestro estado, pasando de non-authenticated a checking.

import { errorsFirebase } from "../../firebase/errors";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmail, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) =>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if(!result.ok) {
            result.errorMessage = errorsFirebase[result.errorCode]
            return dispatch(logout(result));
        }
        dispatch(login(result));

    }
}

export const startCreatingUserWithEmail = ({email,password,displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithEmail({email,password,displayName});
        if(!result.ok) {
            result.errorMessage = errorsFirebase[result.errorCode]
            return dispatch(logout(result));
        }
        dispatch(login(result));
    }
}

export const startLoginWithEmailPassword = ({email,password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email,password});
        if(!result.ok) {
            result.errorMessage = errorsFirebase[result.errorCode]
            return dispatch(logout(result));
        }
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout())
    }
}