import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Student from './pages/Student/Student';
import Diak from './pages/Diak/Diak';
import Teacher from './pages/Teacher/Teacher';
import Tanar from './pages/Tanar/Tanar';
import Ujtanar from './pages/Ujtanar/Ujtanar';

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
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
