import { Link } from 'react-router-dom';

import Board from "./board";

function BoggleMain() {
  return (

    <div>
      <header >
        <p>To </p>
        <Link to="/">Home</Link>
      </header>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Board />
      </div>
    </div>
  );
}

export default BoggleMain;
