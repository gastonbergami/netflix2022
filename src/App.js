import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Paypal from "./Pages/Paypal";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logut, selectUser } from "./features/UserSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logut);
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/checkout' element={<Paypal />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    minHeigth: "100vh",
  },
}));
export default App;

// 123454;
