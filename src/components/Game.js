import React, { useState } from 'react';
import "./App.css";
import CalculateWinner from './CalculateWinner.js';
import Restart from './Restart.js';

import Square from './Square.js'
function Game() {
    
    const [squares,setSquares]=useState(Array(9).fill(null))
    const[isXNext,setIsXNext]=useState(true)
    const nextSymbol=isXNext?"X":"O";
    const winner = CalculateWinner(squares);
    
    const isBoardFull=(squares)=> {
        for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
        }
        return true;
    }
  
    const getStatus=()=> {
        if (winner) {
        return "Winner: " + winner;
        } else if (isBoardFull(squares)) {
        return "Draw!";
        } else {
        return "Next player: " + nextSymbol
        }
    }
    const renderRestartButton=()=> {
        return (
          <Restart
            onClick={() => {
              setSquares(Array(9).fill(null));
              setIsXNext(true);
            }}
          />
        );
      }

    const renderSquare=(i)=>{
       return( <Square
        value={squares[i]}
        onClick={()=>{
            if (squares[i]!=null ||winner!=null) {
                return
            }
            const nextSquares=squares.slice()//returns array of all values to return array ye kiya thats it.
            nextSquares[i]=nextSymbol
            setSquares(nextSquares)
            setIsXNext(!isXNext)//toggling
        }}
        />
       )

    }
    
    return(
        <div className='container'>
            <div className='game'>
                <div className='game=board'>
                    <div className='board-row'>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className='board-row'>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className='board-row'>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <div className="game-info">{getStatus()}</div>
                <div className="restart-button">{renderRestartButton()}</div>
            </div>
            
        </div>
        
    )

}
export default Game;