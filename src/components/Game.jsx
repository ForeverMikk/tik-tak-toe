import React from 'react';

import Board from './Board';

const Game = () => {
    return(
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <h2>By Michael Molina Pérez</h2>
            <br />
            <br />
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* STATUS */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

export default Game