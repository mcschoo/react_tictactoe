// Importing libraries from react framework
import { useState } from 'react';

// Template function for the individual board tiles
function Square() {
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
}

// Default function ("main") that creates our board
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>       
      
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
