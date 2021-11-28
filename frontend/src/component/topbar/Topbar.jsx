import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = ({ user }) => {
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/settings" className="link">
              BOOKING
            </Link>
          </li>

          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              SEARCH
            </Link>
          </li>
          {!user ? (
            <li className="topListItem">
              <Link to="/signup" className="link">
                REGESTRATION
              </Link>
            </li>
          ) : (
            <li className="topListItem">
              <Link to="/" className="link">
                TOURS
              </Link>
            </li>
          )}

          <li className="topListItem">
            <Link to="/login" className="link">
              {user ? "LOGOUT" : "LOGIN"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
    /* <div className="topSaparator" /> */
  );
};

export default Topbar;
