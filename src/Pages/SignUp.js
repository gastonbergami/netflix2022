import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetfButton, NetfInput } from "../styled/styledComponents";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => navigate("/"))
      .catch((err) => alert(err.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((autheUser) => navigate("/"))
      .catch((err) => {
        alert(err.message);
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography cariant='h5' align='left'>
        Sing In
      </Typography>
      <form className={classes.from}>
        <NetfInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          placeholder='Email'
          className={classes.email}
        />
        <NetfInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
          type='password'
          className={classes.password}
        />
        <NetfButton onClick={signIn} type='submit' wide='medium' radius='true'>
          Sign In{" "}
        </NetfButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{" "}
          <span className={classes.signupLink} onClick={register}>
            Sign Up now
          </span>
        </Typography>
      </form>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(2),
  },
  signupLink: {
    color: "#fff",
    cursor: "pointer",
    "& :hover": {
      textDecoration: "underline",
    },
  },
}));
export default SignUp;
