const API_KEY = " 1fa87b10ef8665b0a0fd2d2f07cc30ed";

//Endpoints
// ("https://api.themoviedb.org/3/trending/all/week?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&language=en-US");
// "https://api.themoviedb.org/3/discover/tv/?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_networks=213
const baseURL = "https://api.themoviedb.org/3";
const requests = {
  fetchTrending:
    "https://api.themoviedb.org/3/trending/all/week?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&language=en-US",
  fetchNetflixOriginals:
    "https://api.themoviedb.org/3/trending/all/week?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_networks=213",
  fetchTopRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&language=en-US",
  fetchActionMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_genres=28",
  fetchComedyMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_genres=35",
  fetchHorrorMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_genres=27",
  fetchRomanceMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_genres=10749",
  fetchDocumentaries:
    "https://api.themoviedb.org/3/discover/movie?api_key=1fa87b10ef8665b0a0fd2d2f07cc30ed&with_genres=99",
  //   fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  //   fetchNetflixOriginals: `${baseURL}/discover/tv/?api_key=${API_KEY}&with_networks=213`,
  //   fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  //   fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  //   fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  //   fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  //   fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  //   fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
