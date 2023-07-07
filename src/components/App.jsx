import "../styles/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import axios from "axios";
import Nav from "./Nav/Nav"
import Home from "./Home/Home";
import ListMovies from "./ListMovies/ListMovies";
import Login from "./Login/Login"

function App() {
  const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=c2b990d8a3919549d7f38b1d4bdd9955";
/*   const API_ID = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=c2b990d8a3919549d7f38b1d4bdd9955" */

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then((info) => {
      setGames(info.data.results)
    });
  }, []);

  return (
    <>
    <Nav/>
    <Routes>
      
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/listMovies" element={<ListMovies/>}>Popular Movies</Route>
      <Route path="/login" element={<Login/>}>Login</Route>

    </Routes>
    </>
  );
}

export default App;
