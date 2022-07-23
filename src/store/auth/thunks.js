//asyn task

import { async } from "@firebase/util";
import {
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firerbase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const {uid,errorMessage,ok,photoURL} = await registerUserWithEmailPassword({
      
      email,
      password,
      displayName,
    });
   if(!ok)return dispatch(logout({errorMessage}));
   dispatch(login({uid,displayName,email,photoURL}))
  };
};
