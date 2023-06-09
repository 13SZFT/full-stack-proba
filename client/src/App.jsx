import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Student from "./pages/Student/Student";
import Diak from "./pages/Diak/Diak";
import Teacher from "./pages/Teacher/Teacher";
import Tanar from "./pages/Tanar/Tanar";
import Ujtanar from "./pages/Ujtanar/Ujtanar";
import TanarModosito from "./pages/TanarModosito/TanarModosito";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/diak/:id" element={<Diak />} />
          <Route path="/tanar/:id" element={<Tanar />} />
          <Route path="/tanarfelvetel" element={<Ujtanar />} />
          <Route path="/tanarmodosito/:id" element={<TanarModosito />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
