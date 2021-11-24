import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TravelCOM
        </Link>
        {/* {user ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-dark text-white me-2" to="/signin">
                Log Out
              </Link>
            </li>
          </ul>
        ) : null} */}
      </div>
    </nav>
  );
}

export default Navbar;
