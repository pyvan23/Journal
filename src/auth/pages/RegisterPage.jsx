
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "./layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create an account">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="name"
              type="text"
              placeholder="name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="email@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="pass"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
           
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}}>You do not have an account yet?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              singin
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
