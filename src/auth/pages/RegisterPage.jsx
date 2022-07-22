import { Link as RouterLink } from "react-router-dom";
// import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "./layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const data = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "email must be have @"],
  password: [
    (value) => value.length >= 6,
    "password must be have more than 6 characters",
  ],
  displayName: [
    (value) => value.length >= 1,
    "name must be have more than 1 character",
  ],
};

export const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(data, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmited(true);

    if(!isFormValid)return;
    console.log(formState);
  };

  return (
    <AuthLayout title="Create an account">
      <h1>Form Valid {isFormValid ? "Valid" : "not ValidForm"}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="name"
              type="text"
              placeholder="name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>
              You do not have an account yet?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              singin
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
