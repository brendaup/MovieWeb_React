import React from 'react'
import BillBoardsMovie from './BillBoardsMovie'
import "./BillBoardsList.css"

const BillBoardsList = ({movie}) => {

    const renderListMovie = movie.map((mov)=>{
        return(
            <div className='movie-card' key={mov.id}>
                <div>
                    <BillBoardsMovie movieBillBoard={mov}/>
                </div>
            </div>
        )
    })

    return (
    <div>
      {renderListMovie}
    </div>
  )
}

export default BillBoardsList
