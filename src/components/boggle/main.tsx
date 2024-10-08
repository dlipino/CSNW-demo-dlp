import { useEffect } from 'react';
import data from '../../assets/initialLibrary.json';


import { Link } from 'react-router-dom';
import Board from "./board";
import { useBoggle } from '../../context/BoggleContext';
import { LoadTilesElement } from './loadTilesElement';
import { LoadLibrary } from './loadLibraryElement';
import { LetterSelector } from '../../utils/boggle/letterSelector';
import { BoggleSolver } from '../../utils/boggle/boggleSolver';
import { WordMatcherUsingSets } from '../../utils/boggle/wordMatcher';
import "../../demo.css"

const BoggleMain = () => {
  const { updateLetters,validWords, letters, updateSolvedWords, updateValidWords, solvedWords} = useBoggle();
  const selector = new LetterSelector()
  const rowCount = 4;
  const columnCount = 4;
  useEffect(() => {
    console.log(data)
    updateValidWords(data["words"])
  }, []);

  const handleReset = () => {
    //Just to shorten the line
    const w = columnCount;
    const h = rowCount;
    const letterSource = Array.from({ length: w }, () => Array.from({ length: h }, () => selector.randomLetterFromAlphabet()));

    updateLetters(letterSource)
    updateSolvedWords(null)
  };

  const handleSolve = () => {
    const wordMatcher = new WordMatcherUsingSets(validWords);
    const boggleSolver = new BoggleSolver(letters as string[][], wordMatcher);
    boggleSolver.solveBoggleBoard();
    console.log("Solve the case", boggleSolver.getSolvedWords())
    updateSolvedWords(boggleSolver.getSolvedWords())
  }

  const renderSolutionWord = (value: string) => {
    return <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300" key={value}>{value}</button>;
  };

  return (
    <div className='bg-gray-300 '>
      <div className='flex justify-start px-2'>
        <p>To <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to="/">Home</Link> </p>
      </div>
      <div className='flex'>
        <div className = 'flex flex-col space-y-4 px-2 pt-2 border-2 border-stone-950'>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleReset}>
              Reset Board
          </button>
          <LoadTilesElement/>
          <LoadLibrary/>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleSolve}>
              Solve board
          </button>
        </div>
        <div className = 'flex-none'>
          <Board />
        </div>
        <div className = 'grow border-2 border-b-stone-950 '>
          <h2 className="flex flex-row flex-nowrap items-center">
            <span className="flex-grow block border-t border-black"></span>
            <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
              Words on Board 
              {solvedWords ? ` : (${solvedWords.length})` : ""}
              
            </span>
            <span className="flex-grow block border-t border-black"></span>
          </h2>
          <div className="flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4 text-sm">
            {solvedWords ? solvedWords.map((value, _) => renderSolutionWord(value)) : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoggleMain;
