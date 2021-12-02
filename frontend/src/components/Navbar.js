import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { getUserDetails } from "../api/index";

function Navbar({ user }) {
  var userDetails;
  if (user !== null) {
    userDetails = getUserDetails(user);
    console.log("navbar user", user);
  }

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-3">
        <Link to="/" className="navbar-brand">
          TravelCOM
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Upcoming Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Booking Closed
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Complete Tours
              </Link>
            </li>
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
                  {userDetails.name}
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
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
