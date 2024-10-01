import { useEffect, useState } from 'react';
import Tile from './tile';
import { useBoggle } from '../../context/BoggleContext';

const Board = () => {
  const { letters } = useBoggle();
  const [flatTiles, setFlatTiles] = useState<(string | null)[]>(new Array(16).fill(null))

  useEffect(() => {
    setFlatTiles(letters.flat())
  }, [letters]);

  const handleClick = (index: number) => {
    console.log("Something should happen here", index)
  };

  const renderTile = (index: number) => {
    return <Tile key={index} value={flatTiles[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className="flex flex-col items-center bg-gray-500">
      <div className="grid grid-cols-4 gap-2 mx-3 my-3">
        {flatTiles.map((_, index) => renderTile(index))}
      </div>
    </div>
  );
};

export default Board;
