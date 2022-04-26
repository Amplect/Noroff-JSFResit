import "./css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Grass from "./components/Grass";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Nav />

      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/grass" element={<Grass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
