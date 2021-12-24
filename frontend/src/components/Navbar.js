import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

function Navbar({ user }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user !== null) {
      setName(localStorage.getItem("name"));
      setRole(localStorage.getItem("role"));
    }
    return () => {};
  }, []);

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
    window.location.href = "/";
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-3">
        <Link to="/" className="navbar-brand">
          TravelCOM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/upcoming-tours"
              >
                Upcoming Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/booking-closed-tours"
              >
                Booking Closed
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/completed-tours"
              >
                Complete Tours
              </Link>
            </li>
            {user && role === "coordinator" ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/create-tour"
                >
                  New Tour
                </Link>
              </li>
            ) : null}
          </ul>
          {user ? (
            <ul className="navbar-nav me-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  {name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <p className="dropdown-item" onClick={logout}>
                      Log Out
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-5">
              <li className="nav-item">
                <Link
                  to="/signin"
                  className="btn-outline-light btn-rounded text-white m-3"
                  data-mdb-ripple-color="dark"
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="btn-outline-light btn-rounded text-white m-3"
                  data-mdb-ripple-color="dark"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
