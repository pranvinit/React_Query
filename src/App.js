// RR imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages imports
import Home from "./pages/home/Home";
import { Data } from "./pages/data/Data";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path=":entity" element={<Data />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
