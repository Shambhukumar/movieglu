import axios from "axios";
import { useEffect, useState } from "react";

import "./App.scss";
import Axios, { keyurl } from "./component/axios";
import { MovieProvider} from "./component/context/MovieContext";
import Home from "./component/Home/Home";
import Movie from "./component/Movie/Movie";

const App = () => {
  const [movies, setMovies] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    CallApi();
  }, []);
  const CallApi = async () => {
    const res = await Axios.get(`movie/upcoming?${keyurl}`)
    setMovies(res.data.results);
  };
  return (
    <div className="App">
    
      <MovieProvider value={{selectedMovie, setSelectedMovie }}>
        {selectedMovie ? <Movie /> : <Home movie={movies} />}
      </MovieProvider>
    </div>
  );
};

export default App;
