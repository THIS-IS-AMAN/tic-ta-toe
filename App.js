import React, { useState } from 'react';
import './App.css';

import { Tic } from './components/Tic';
import { Board } from "./components/Board"
import {Playagain} from "./components/Playagain"


function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState();
  const handleboxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      }
      else {
        return value;
      }
    })
    checkwinner(updatedBoard);

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  }
  const checkwinner =(board) => {
    for (let i = 0; i< WIN_CONDITIONS.length; i++) {
    const [x,y,z] = WIN_CONDITIONS[i];

    if (board[x] && board[x]=== board[y] && board[y] === board[z]) {
      setGameOver(true);
      setWinner(board[x]);
      
    }
     
    }
  }
   const resetBoard=() => {
    setGameOver(false);
    setBoard(Array(9).fill(null)) 
   }
  return (
    <div className="App">
      <Tic/>
      <Board board={board} onClick={gameOver ? resetBoard :handleboxClick} />
      {
        winner && (
          <>
          <p color='white'>{winner} is the winner </p></>
        )
        
      }
      
      
      <Playagain resetBoard={resetBoard} />
      
    </div>
  );
}

export default App;
