import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../api";
import Footer from "../../components/Footer";

function Profile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [picture, setPicture] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    if (uid) {
      getUserDetails(uid).then((res) => {
        console.log(res.data["data"]);
        setName(res.data["data"]["name"]);
        setBio(res.data["data"]["bio"]);
        setRole(res.data["data"]["role"]);
        setPicture(res.data["data"]["profile_picture"]);
        setProfession(res.data["data"]["profession"]);
        setLocation(res.data["data"]["location"]);
        setFacebook(res.data["data"]["facebook"]);
        setInstagram(res.data["data"]["instagram"]);
      });
    } else {
      window.location.href = "/signin";
    }
    return () => {};
  }, [uid]);

  return (
    <div>
      {uid !== null ? (
        <div className="container mt-3 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                {picture ? (
                  <img
                    src={picture}
                    className="rounded-circle"
                    alt="avatar"
                    style={{ width: "200px" }}
                  />
                ) : (
                  <img
                    src={
                      picture ||
                      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    }
                    className="rounded-circle"
                    alt="avatar"
                    style={{ width: "200px" }}
                  />
                )}
                <h3>
                  <b>{name}</b>{" "}
                </h3>
                {role !== "user" ? (
                  <p>
                    {role === "coordinator" ? "Tour Coordinator" : "Tour Guide"}
                  </p>
                ) : null}
                <h5>
                  <b>{bio}</b>
                </h5>

                {profession ? (
                  <p>
                    <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                    <span>{profession}</span>
                  </p>
                ) : null}

                {location ? (
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    <span>{location}</span>
                  </p>
                ) : null}

                <div className="row">
                  <div className="col-md-12">
                    {facebook ? (
                      <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                          backgroundColor: "#3b5998",
                        }}
                        href={facebook}
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                      >
                        <i className="fab fa-facebook fa-2x"></i>
                      </a>
                    ) : null}
                    <span> </span>
                    {instagram ? (
                      <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                          backgroundColor: "#ac2bac",
                        }}
                        href={instagram}
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                      >
                        <i className="fab fa-instagram fa-2x"></i>
                      </a>
                    ) : null}
                  </div>
                </div>

                <Link to="/edit-profile">
                  <button className="btn btn-info btn-md m-3">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ) : (
        <h3 className="text-center">
          You are not authorized to view this page
        </h3>
      )}
      <Footer />
    </div>
  );
}

export default Profile;
