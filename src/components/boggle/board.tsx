import React, { useState } from 'react';
import Tile from './tile';

import { Link } from 'react-router-dom';

const Board = () => {

  const [tiles, setTiles] = useState<(string | null)[]>(Array(16).fill(null));
  
  const handleClick = (index: number) => {
    // if (calculateWinner(squares) || squares[index]) {
    //   return;
    // }
    // const newSquares = squares.slice();
    // newSquares[index] = isXNext ? 'X' : 'O';
    // setSquares(newSquares);
    // setIsXNext(!isXNext);
  };
  const t =Array(4).fill("a")
  const renderTile = (index: number) => {
    return <Tile key={index} value={tiles[index]} onClick={() => handleClick(index)} />;
  };
  return (
    <div className="flex flex-col items-center">
      {/* <div className="status mb-4 text-2xl">{status}</div> */}
      <div className="grid grid-cols-4 gap-1 mb-4">
        {tiles.map((_, index) => renderTile(index))}
      </div>
    </div>
  );
};

export default Board;
