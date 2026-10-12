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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Services</NavLink>   {/* 3. Fixed: Changed href to to */}
          <NavLink to="/register">Register</NavLink> {/* 3. Fixed: Changed href to to */}
          <NavLink to="/login">Login</NavLink>       {/* 3. Fixed: Changed href to to */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
