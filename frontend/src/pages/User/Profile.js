import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                className="rounded-circle"
                alt="avatar"
                style={{ width: "200px" }}
              />
              <h3>
                <b>John Doe</b>
              </h3>

              <h5>
                <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                <span>Business Person</span>
              </h5>
              <h6>
                <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                <span>Dhaka, Bangladesh</span>
              </h6>
              <div className="row">
                <div className="col-md-12">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <span> </span>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </div>

              <Link to="/edit-profile">
                <button className="btn btn-info m-3">Edit Profile</button>
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Profile;
