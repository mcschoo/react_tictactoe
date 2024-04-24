// Importing libraries from react framework
import { useState } from 'react';

// Template function for the individual board tiles
function Square({value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
  /*
  // Declare const to use as opposed to previous argument. Value begins equal to null
  const [value, setValue] = useState(null);

  // On-click command
  function handleClick() {
    setValue('X');
  }

  return (
    <button 
      // Observer, into callback
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
  */
}

// Default function ("main") that creates our board
export default function Board() {

  // Declare a const to create array of 9 nulls mapping to the 9 squares
  cosnt [squares, setSquares] = useState(Array(9).fill(null));

  // Creating the board - each squre recieves a "value" that will be either X, O, or null
  // This looks extremely for loop-able, look into it
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>       
      
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} onSquareClick={handleClick}/>
      </div>
    </>
  );
}
