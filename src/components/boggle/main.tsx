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
  const { updateLetters,validWords, letters, updateSolvedWords, solvedWords} = useBoggle();
  const selector = new LetterSelector()
  const rowCount = 4;
  const columnCount = 4;

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
      <div>
        <header >
          <p>To </p>
          <Link to="/">Home</Link>
        </header>
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
        
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <Board />
        </div>
    <div className="flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4 text-sm">
       {solvedWords.map((value, _) => renderSolutionWord(value))}
    </div>
      </div>
  );
}

export default BoggleMain;
