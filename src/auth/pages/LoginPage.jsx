import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "./layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  
  startGoogleSignIn,
  startLogInWithEmailPassword,
} from "../../store/auth/thunks";

const formData ={
     email: "",
     password: "",
  } 

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm(formData);
  const { status,errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const onsubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
    dispatch(startLogInWithEmailPassword({email,password}));
  };

  const onGoogleSingIn = () => {
    console.log("google");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onsubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="pass"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}  display={!!errorMessage ?'': 'none'}>
             <Alert severity="error">{errorMessage}

             </Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} onClick={onGoogleSingIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Register
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
