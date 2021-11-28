import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

function Navbar({ user }) {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-3">
        <Link to="/" className="navbar-brand">
          TravelCOM
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                Upcoming Tours
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                Booking Closed
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                Complete Tours
              </Link>
            </li>
          </ul>
          {user ? (
            <ul class="navbar-nav me-5">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Name
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <p class="dropdown-item" onClick={logout}>
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
