import React from 'react';
import Square from '../Square/Square'

import './Board.css'

const Board = () => {

    function renderSquare(i){
        return <Square value={i}/>
    }
    
    const status = 'Next Player: X'

    return(  
            <div>
                <h4 className="status">{status}</h4>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
       
    )
}

export default Board