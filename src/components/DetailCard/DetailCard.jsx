import { useContext, useState } from "react";
import { MovieContext } from "../../context/Apis";
import { useParams } from "react-router-dom";
import "./DetailCard.css"

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
        <div className="container-detail-card">
          <div className="detail-card">
            <h2>{findMovies.title}</h2>
            <img src={getPosterUrl(findMovies.poster_path)} alt={findMovies.title} />
           <p>{findMovies.overview}</p> 
           <p>{findMovies.vote_average}</p> 
          </div>
        </div>
      ); 
    } else {
        return(
            <div className="not-found">
              <img src="https://img.freepik.com/vector-premium/icono-error-minimo-moderno-no-encontrado-vaya-pagina-no-encontrada-404-error-pagina-no-encontrada-concept_599740-716.jpg" alt="not-found" />  
            </div>
            
        )
    }
}

export default DetailCard
