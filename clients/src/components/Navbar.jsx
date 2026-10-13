import  {NavLink} from "react-router-dom"; // 1. Fixed: Added curly braces {} around Link
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container"> {/* 2. Fixed: Typo "containter" changed to "container" */}
      <div className="logo">
        <h1>Shirani Logo</h1>
      </div>
      <nav className="navbar">
        <div className="links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>  {/* 3. Fixed: Changed href to to */}
          <li><NavLink to="/register">Register</NavLink></li> {/* 3. Fixed: Changed href to to */}
          <li><NavLink to="/login">Login</NavLink></li>
          </ul>       {/* 3. Fixed: Changed href to to */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
