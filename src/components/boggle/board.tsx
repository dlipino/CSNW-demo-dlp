import React, { useState } from 'react';
import Tile from './tile';

import { Link } from 'react-router-dom';

const Board = () => {

  const [tiles, setTiles] = useState<(string | null)[]>(Array(9).fill(null));
  
  const handleClick = (index: number) => {
    // if (calculateWinner(squares) || squares[index]) {
    //   return;
    // }
    // const newSquares = squares.slice();
    // newSquares[index] = isXNext ? 'X' : 'O';
    // setSquares(newSquares);
    // setIsXNext(!isXNext);
  };
  
  const renderTile = (index: number) => {
    return <Tile value={tiles[index]} onClick={() => handleClick(index)} />;
  };
  return (
    <div className="flex flex-col items-center">
      {/* <div className="status mb-4 text-2xl">{status}</div> */}
      <div className="grid grid-cols-3 gap-1 mb-4">
        {Array(9).fill(null).map((_, index) => renderTile(index))}
      </div>
      {/* <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleRestart}
  
        Restart
      </button>    > */}
    </div>
  );
};

export default Board;
