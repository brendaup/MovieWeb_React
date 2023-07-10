import { useContext } from "react"
import { MovieContext } from "../../context/Apis"
import "./Movie.css"

const getPosterUrl = (posterPath) =>{
    return `https://image.tmdb.org/t/p/original${posterPath}`
}

const Movie = () => {
  const {movies} = useContext(MovieContext)


    const renderMovie = movies.map((movie)=>{
        return(
            <div className="movie-card" key={movie.id}>
                <h1>{movie.title}</h1>
                <img src={getPosterUrl(movie.poster_path)} alt={movie.original_title} />
                <p>{movie.vote_average}</p>
            </div>
        )
    })

  return (
    <div className="movie-container">
      {renderMovie}
    </div>
  )
}

export default Movie