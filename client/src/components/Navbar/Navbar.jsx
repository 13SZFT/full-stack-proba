import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log(isLoggedIn);
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <div className="link-container">
          <Link to="/student">Student</Link>
          <Link to="/teacher">Teacher</Link>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
