import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/student">Student</Link>
      <Link to="/teacher">Teacher</Link>
    </div>
  );
};

export default Navbar;
