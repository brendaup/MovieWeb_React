import "../styles/App.css";
import { Routes, Route, useNavigate} from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import ListMovies from "./ListMovies/ListMovies";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import { MovieContextProvider } from "../context/Apis";
import userData from "../data/userData.json";
import { UserContext, useUserContext } from "../context/UserContext";
import AuthRoute from "./AuthRoute/AuthRoute";
import { useEffect, useState } from "react";
import axios from "axios";
import BillBoardsList from "./BillBoards/BillBoardsList";


function App() {
  
  const [movieUpComing, setmovieUpComing] = useState([])
  
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c2b990d8a3919549d7f38b1d4bdd9955')
    .then((data)=>{
      setmovieUpComing(data.data.results)
    })
  },[])

  const dataUserContext = useUserContext()
  const {addUser} = dataUserContext

  const navigate = useNavigate();

  const loginUser = (formData) =>{
    const findUser = userData.find((user)=> user.email === formData.email && user.password === formData.password); 
  
    if (findUser){
      addUser(findUser)
      navigate('/profile')
    } else {
      navigate(false)
    }
    
  }

  return (
    <>
      <UserContext.Provider value={dataUserContext}>
      <MovieContextProvider>
        
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/listMovies" element={<ListMovies />}>Popular Movies</Route>
            <Route path="/billBoardsList" element={<BillBoardsList movie={movieUpComing} />} />
            <Route path="/login" element={<Login loginUser={loginUser} />} />
            <Route path="/profile" element={<AuthRoute component={<Profile />} />} />
          </Routes>
       
      </MovieContextProvider>
       </UserContext.Provider>
    </>
  );
}

export default App;
