import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetfButton } from "../styled/styledComponents";
import { useDispatch } from "react-redux";
import { setPrice } from "../features/PriceSlice";
import { useNavigate } from "react-router-dom";

const Plans = ({ cost, children, color = "red", wide }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleClick = (cost) => {
    dispatch(setPrice(cost));
    navigator("/checkout");
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant='h5'>
        {children}
        <Typography> ${cost}</Typography>
      </Typography>
      <NetfButton color={color} wide={wide} onClick={() => handleClick(cost)}>
        Suscribe
      </NetfButton>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: theme.spacing(2),
    },
  },
  standard: {
    fontSize: "1.2rem",
    whiteSpace: "1px",
  },
}));
export default Plans;
