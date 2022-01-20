import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../images/logo_Netflix.png";
import HeroBanner from "../images/dark.png";
import { NetfButton, NetfInput } from "../styled/styledComponents";
import SignUp from "./SignUp";

const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={classes.root}>
      <img src={logo} alt='' className={classes.logo} />
      <NetfButton className={classes.session}>Iniciar sesion</NetfButton>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant='h4 ' gutterBottom>
              Unlimited films, tv programes and more
            </Typography>
            <Typography variant='h5'>
              Whatc anywhere. Cancel at any time.
            </Typography>
            <Typography variant='h6' gutterBottom>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <NetfInput placeholder='Email address' />
              <NetfButton>GET STARTED</NetfButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: " center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
}));
export default Login;
