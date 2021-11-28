import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    setName("John Doe");
  }, []);

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
                <b>{name}</b>
              </h3>
              <h4>
                <b>{bio}</b>
              </h4>

              {profession ? (
                <h5>
                  <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                  <span>{profession}</span>
                </h5>
              ) : null}

              {location ? (
                <h6>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  <span>{location}</span>
                </h6>
              ) : null}

              <div className="row">
                <div className="col-md-12">
                  {facebook ? (
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                  ) : null}
                  <span> </span>
                  {instagram ? (
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  ) : null}
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
