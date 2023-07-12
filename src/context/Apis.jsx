import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=c2b990d8a3919549d7f38b1d4bdd9955";

export const MovieContextProvider = ({ children }) => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
       await axios.get(`${BASE_URL}`).then((info)=> 
       setMovies(info.data.results))
    }
    getMovies()
  }, []);

  return (
    <MovieContext.Provider value={{movies}}>
        {children}
    </MovieContext.Provider>
  );
};
