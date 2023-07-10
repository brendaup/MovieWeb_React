import "./BillBoardsList.css"

const getPosterUrl = (posterPath) =>{
    return `https://image.tmdb.org/t/p/original${posterPath}`
}
const BillBoardsList = ({movie}) => {

    return (
        <div  className="billboards-card">
        <h1>{movie.title}</h1>
        <img src={getPosterUrl(movie.poster_path)} alt={movie.original_title} />
    </div>
    )
  }

export default BillBoardsList
