import { useContext, useState } from "react";
import { MovieContext } from "../../context/Apis";

const FormSearch = () => {
  const getPosterUrl = (posterPath) => {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  };

  const [movieSearch, setMovieSearch] = useState("");
  const { movies } = useContext(MovieContext);

  const handleChange = (ev) => {
    setMovieSearch(ev.target.value);
  };

  const handleSearch = (ev) => {
    ev.preventDefault();
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter title"
          value={movieSearch}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={getPosterUrl(movie.poster_path)}
              alt={movie.original_title}
            />
          </div>
        ))
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={movie.original_title}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormSearch;
