//asyn task


import {
  logInWithEmailPassword,
  logOutFireBase,
  registerUserWithEmailPassword,
  signInWithGoogle,
 
} from "../../firerbase/providers";
import { clearJournalLogOut } from "../journal/journalSlice";
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



export const startLogInWithEmailPassword = ({email,password})=>{
  return async (dispatch)=>{

    dispatch(checkingCredentials());

    //function provider
    const resp = await logInWithEmailPassword({email,password});
    if(!resp.ok)return dispatch(logout(resp))
    dispatch( login(resp) )
   

  }
}
export const startLogOut =  (dispatch)=>{
return async (dispatch)=>{

  await logOutFireBase();
  dispatch(clearJournalLogOut())
  dispatch( logout() )
}
}
