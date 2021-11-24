import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
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
              <Link class="nav-link" to="#">
                Tours
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
                  data-bs-toggle="dropdown"
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
                    <a class="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          ) : null}
        </div>

        {/* <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-dark text-white me-2" to="/profile">
                Profile
              </Link>
            </li>
          </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
