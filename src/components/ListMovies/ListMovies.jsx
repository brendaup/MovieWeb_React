import { useContext } from "react"
import { MovieContext } from "../../context/Apis"
import FormSearch from "../Form/FormSearch"
import Movie from "../Movie/Movie"

const ListMovies = () => {
    
   const {movies} = useContext(MovieContext) 

/*   const renderListMovie = movies.map((movie)=>{
    return(
      <div className="movie-card" key={movie.id}>
        <div>
          <Movie movie={movie}/>
        </div>
      </div>
    )
  }) */

    return (
    <div className="container">
      <FormSearch movies={movies}/>
     
    </div>
  )
}

export default ListMovies
