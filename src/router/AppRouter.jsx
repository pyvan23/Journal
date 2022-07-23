import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/authRoutes";
import { FirebaseAuth } from "../firerbase/config";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { login, logout } from "../store/auth/authSlice";
import { CheckingAuht } from "../ui/components/CheckingAuht";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, photoURL, email, displayName } = user;
      dispatch(login({ uid, photoURL, email, displayName }));
    });
  }, []);

  if (status === "checking") {
    return <CheckingAuht />;
  }

  return (
    <Routes>
      {status === "Authenticated" ? 
        <Route path="/*" element={<JournalRoutes />} />
       : 
        <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to='/auth/login'/>}/>
    </Routes>
  );
};
