// Importing libraries from react framework
import { useState } from 'react';

// Template function for the individual board tiles
function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Default function ("main") that creates our board
function Board({ xIsNext, squares, onPlay }) {

  /*
  * Set the first move to X by default - we'll do this by adding another
  * piece of state to the component
  * 
  * isNext is a boolean value correlating to players X and O - we'll flip it
  * on each click, so in "handleClick"
  */
  //const [xIsNext, setXIsNext] = useState(true);

  // Declare a const to create array of 9 nulls mapping to the 9 squares
  //const [squares, setSquares] = useState(Array(9).fill(null));

  /* 
  * Implement handleClick function inside our board component so we can update the squares array
  * This ensures immutability in the code so we can implement things like a "time travel" feature to
  * restore past states of the game
  */
  function handleClick(i) {
    // Exception handling - return early if squares is not null, or if player has won
    if(squares[i] || calculateWinner(squares)) { return; }

    // Use JavaScript "slice" array method to create a copy of squares array
    const nextSquares = squares.slice();
    // Update "nextSquares" to add X to the first square, then call setSquares to let React know component state has changed
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  // Creating the board - each squre recieves a "value" that will be either X, O, or null
  // This looks extremely for loop-able, look into it
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>       
      
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length-1];

  function handlePlay(nextSquares) {
    // ...history = "enumerate all the items in history"
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

// Helper function to determine if game is won
function calculateWinner(squares) {

  // 2D array storing possible win conditions
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for(let i = 0; i < lines.length; i++)
  {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a]
    }
  }
  return null;
}