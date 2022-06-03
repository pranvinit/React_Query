// RR imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages imports
import Home from "./pages/home/Home";
import { Data } from "./pages/data/Data";
import { DataDetails } from "./pages/dataDetails/DataDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path=":entity" element={<Data />} />
          <Route path=":entity/:id" element={<DataDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
