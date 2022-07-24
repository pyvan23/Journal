
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/authRoutes";

import { useCheckingAuth } from "../hooks/useCheckingAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuht } from "../ui/components/CheckingAuht";

export const AppRouter = () => {
 const {status} = useCheckingAuth();

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
