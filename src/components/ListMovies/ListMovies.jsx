import { useContext } from "react"
import { MovieContext } from "../../context/Apis"
import FormSearch from "../Form/FormSearch"
import "./ListMovies.css"


const ListMovies = () => {

  const { movies } = useContext(MovieContext);

    return (
    <div className="container-movie">
      
      <FormSearch movies={movies}/>
     
    </div>
  )
}

export default ListMovies
