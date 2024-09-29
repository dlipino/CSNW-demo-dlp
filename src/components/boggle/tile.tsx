import React from 'react';

interface TileProps {
  value: string | null;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 bg-white border-2 border-gray-400 text-2xl font-bold flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Tile;