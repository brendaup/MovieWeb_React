import "./Movie.css";

const getPosterUrl = (posterPath) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
};

const Movie = ({ movie }) => {
  return (
    <div className="movie-card" key={movie.id}>
      <h1>{movie.title}</h1>
      <img src={getPosterUrl(movie.poster_path)} alt={movie.original_title} />
      <p>{movie.vote_average}</p>
    </div>
  );
};

export default Movie;
