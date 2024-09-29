import { Link } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import Board from "./board";


const BoggleMain = () => {

  //TODO enhance this and move it out
  const selectRandomLetter = () : string => {
    const letters = [...'abcdefghijklmnopqrstuvwxyz'];
    const letter = letters[(Math.floor(Math.random() * letters.length))]
    return letter
  }
  const handleRestart = () => {
    console.log("Getting new")
    const w = 4;
    const h = 4;
    let letterSource = Array.from({length: w*h}, () => selectRandomLetter());
    console.log(letterSource)
    // setSquares(Array(9).fill(null));
    // setIsXNext(true);
  };


  return (

    <div>
      <header >
        <p>To </p>
        <Link to="/">Home</Link>
      </header>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleRestart}
      >
        Restart
      </button>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Board />
      </div>
    </div>
  );
}

export default BoggleMain;
