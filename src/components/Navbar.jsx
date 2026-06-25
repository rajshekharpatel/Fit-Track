import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        💪 FitTrack
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/bmi">BMI</Link></li>
        <li><Link to="/calories">Calories</Link></li>
        <li><Link to="/water">Water</Link></li>
        <li><Link to="/workout">Workout</Link></li>
        <li><Link to="/progress">Progress</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;