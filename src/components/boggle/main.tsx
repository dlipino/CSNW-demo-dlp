import { Link } from 'react-router-dom';
import { useRef } from "react";
import Board from "./board";
import { useBoggle } from '../../context/BoggleContext';
import { SimpleFileInput } from './fileinput';


const BoggleMain = () => {
  const { updateLetters } = useBoggle();
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
    // const letterSource = Array.from({length: w*h}, () => selectRandomLetter());
    const letterSource =Array.from({ length: w }, () => Array.from({ length: h }, () => selectRandomLetter()));
    const flatLetters =  letterSource.flat();
    const tileDict = {"letters": letterSource}
    console.log(JSON.stringify(tileDict, null, 4));
    updateLetters(flatLetters)
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUploadClick = () => {
    console.log("Tring to load")
    fileInputRef.current?.click();
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
        <SimpleFileInput/>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <Board />
        </div>
      </div>
  );
}

export default BoggleMain;
