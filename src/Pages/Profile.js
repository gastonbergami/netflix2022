import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../components/Header";
import avatar from "../images/avatar.png";
import Plans from "../components/Plans";
import { NetfButton } from "../styled/styledComponents";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const sigNout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Edit Profile</Typography>
      <div className={classes.info}>
        <img src={avatar} alt='avatar' />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant='h6'>email usuario</Typography>
            <Typography className={classes.tih5} variant='h5' gutterBottom>
              Plans
            </Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basico</Plans>
            <Plans wide='medium' color='gray' cost={15.99}>
              Netflix Premiun
            </Plans>
            <NetfButton onClick={sigNout} wide='fullWidth'>
              Sign out
            </NetfButton>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  tih5: {
    borderBottom: "1px solid lightgray",
  },
}));
export default Profile;
