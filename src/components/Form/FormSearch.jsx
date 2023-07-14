import { useContext, useState } from "react";
import { MovieContext } from "../../context/Apis";
import { Link } from "react-router-dom"
import "./FormSearch.css";

const FormSearch = ({ movies }) => {
  const getPosterUrl = (posterPath) => {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  };

  const [movieSearch, setMovieSearch] = useState("");
/*   const { movies } = useContext(MovieContext); */

  const handleChange = (ev) => {
    setMovieSearch(ev.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.toLowerCase())
  );

  return (
    <div className="container-form-search">
      <div className="container-form">
        <form className="form-search">
          <input
            type="text"
            placeholder="Enter title"
            value={movieSearch}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="search-results">
        {filteredMovies.map((movie) => (
          <div className="result-item-filtered" key={movie.id}>
            <h3>{movie.title}</h3>
           <Link to={`/detail/${movie.id}`}> <img src={getPosterUrl(movie.poster_path)} alt={movie.title} /></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FormSearch;
