import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firerbase/config";
import { login, logout } from "../store/auth/authSlice";

export const useCheckingAuth = () => {
    const { status } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (!user) return dispatch(logout());
  
        const { uid, photoURL, email, displayName } = user;
        
        dispatch(login({ uid, photoURL, email, displayName }));
      });
    }, []);
  

    return {
        status
    }
}
