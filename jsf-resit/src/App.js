import "./css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Grass from "./components/Grass";
import Contact from "./components/Contact";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <Router>
      <Nav />

      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/grass" element={<Grass />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
