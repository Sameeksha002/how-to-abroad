
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchCourse from "./pages/SearchCourse";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<SearchCourse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
