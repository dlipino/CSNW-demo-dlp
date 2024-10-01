import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const goToBoggle = () => {
    navigate('/boggle');
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>dlp samples</h1>
      <div>Using: Vite + React + Typescript</div>
      <div className="card">
        <button onClick={goToBoggle}> Go to Boggle</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Main