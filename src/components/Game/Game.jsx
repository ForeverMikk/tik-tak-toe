import React, {useState} from 'react';
import Board from '../Board/Board';
import calculateWinner from '../../helpers/calculateWinner';


import './Game.css'

const Game = () => {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner =  calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeHistory = history.slice(0, stepNumber + 1);
        const current = timeHistory[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) return;

        // put an X or O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeHistory, squares])
        setStepNumber(timeHistory.length)
        setXIsNext(!xIsNext)
    }

const jumpTo =(step)=> {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
}

    const renderMoves = () => {
        return history.map((_step, move)=> {
            const destination = move ? `Go to move #${move}` : `Go to start`;

            return (
                <li key={move} >
                    <button onClick={()=> jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    }
    
    return(
        <div className="game">
            <div className="game-title">
                <h1>Tic Tac Toe</h1>
                <h2>By Michael Molina Pérez</h2>
            </div>
            <br />
            <br />
            <div className="game-board">
                <Board squares={history[stepNumber]} onClick={handleClick}/>
            </div>
            <div className="game-info">
                <div>{winner ? `Winner ${winner}`: `Next Player ${xIsNext ? 'X' : 'O'}`}
                
                {renderMoves()}
                </div>
            </div>
        </div>
    )
}

export default Game