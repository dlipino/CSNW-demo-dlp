import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import { useNavigate } from 'react-router-dom';

function Main() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const goToBoggle = () => {
    navigate('/boggle');
  };
  return (
    <>
      <h1>Landing</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={goToBoggle}> Go to Boggle</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Main

