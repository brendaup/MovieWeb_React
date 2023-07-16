const getPosterUrl = (posterPath) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
};
const BillBoardsMovie = ({ movieBillBoard }) => {
  return (
    <div>
      <h1>{movieBillBoard.title}</h1>
      <img
        src={getPosterUrl(movieBillBoard.poster_path)}
        alt={movieBillBoard.original_title}
      />

    </div>
  );
};

export default BillBoardsMovie;
