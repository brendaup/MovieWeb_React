import React from 'react'
import BillBoardsMovie from './BillBoardsMovie'
import "./BillBoardsList.css"

const BillBoardsList = ({movie}) => {

return (
    
        <div className='container-list'>
            {movie.map((mov)=>(
                <div className='movie' key={mov.id}>
                    <BillBoardsMovie movieBillBoard={mov}/>
                </div>
            ))}
        </div>
    
)
}

export default BillBoardsList
