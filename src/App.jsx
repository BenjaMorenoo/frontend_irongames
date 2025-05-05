import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />        
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
