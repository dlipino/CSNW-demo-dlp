import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoggleMain from "./components/boggle/main";
import Main from "./components/main";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/boggle"
              element={<BoggleMain />} />
          <Route path="/"
              element={<Main />} />
      </Routes>
      </Router>
  )
}

export default App;