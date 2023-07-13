import { useContext, useState } from "react";
import { MovieContext } from "../../context/Apis";
import { useParams } from "react-router-dom";

const DetailCard = () => {

    const getPosterUrl = (posterPath) => {
        return `https://image.tmdb.org/t/p/original${posterPath}`;
    };
  
    const { movies } = useContext(MovieContext);
    const { id } = useParams()
    console.log(useParams)
    
    const findMovies = movies.find((movie)=> movie.id === parseInt(id))
    console.log(findMovies) 

    if(findMovies){
       return (
        <div>
          <h2>{findMovies.title}</h2>
          <img src={getPosterUrl(findMovies.poster_path)} alt={findMovies.title} />
          <p>{findMovies.overview}</p>
        </div>
      ); 
    } else {
        return(
            <p>no encontrado</p>
        )
    }

    


}

export default DetailCard
