import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../axios/Request";

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let ramdon = Math.floor(Math.random() * (0, 20));

      setMovie(request.data.results[ramdon]);

      return request;
    };
    fetchData();
  }, []);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className={classes.content}>
        <Typography variant='h2' component='h1'>
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
          style={{ wordWrap: "break-word", width: " 30% " }}
          variant='h6'
          className={classes.description}
        >
          {truncate(movie?.overview, 160)}
        </Typography>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:Hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-grandiet(180deg,transparent,rgba(37,37,37,0,61),#111",
  },
}));
export default Banner;
