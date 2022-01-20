import React, { useEffect, useState } from "react";
import { AppBar, Avatar, makeStyles, Toolbar } from "@material-ui/core";
import logo from "../images/logo_Netflix.png";
import { Link } from "react-router-dom";
// import { unstable_HistoryRouter } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  // const history = unstable_HistoryRouter();
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);
  return (
    <AppBar
      position='sticky'
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
          <img src={logo} alt='logo' className={classes.logo} />
        </Link>
        <Link to='/profile'>
          <Avatar variant='square' style={{ cursor: "pointer" }} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));
export default Header;
