import BillBoardsList from "../BillBoards/BillBoardsList";

const Home = ({ movieUpComing }) => {
  const renderMovies = movieUpComing.map((movie) => {
    return (
      <div key={movie.id}>
        <BillBoardsList movie={movie} />
      </div>
    );
  });

  return <div>{renderMovies}</div>;
};

export default Home;
