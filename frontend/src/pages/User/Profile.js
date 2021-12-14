import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getUserDetails,
  getToursByUserId,
  getBookedToursByUserId,
  getCompletedToursByUserId,
} from "../../api";
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
  const [myTours, setMyTours] = useState([]);
  const [bookedTours, setBookedTours] = useState([]);
  const [completedTours, setCompletedTours] = useState([]);
  const id = localStorage.getItem("id");
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
      if (role === "coordinator") {
        getToursByUserId(id).then((res) => {
          console.log(res.data["data"]);
          setMyTours(res.data["data"]);
        });
      } else if (role === "guide") {
      } else if (role === "user") {
        getBookedToursByUserId(id).then((res) => {
          console.log(res.data["data"]);
          setBookedTours(res.data["data"]);
        });
        getCompletedToursByUserId(id).then((res) => {
          console.log(res.data["data"]);
          setCompletedTours(res.data["data"]);
        });
      }
    } else {
      window.location.href = "/signin";
    }
    return () => {};
  }, [uid, id]);

  return (
    <div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3 text-center">
              <img
                src={
                  picture ||
                  "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                }
                className="card-img-top"
                alt="avatar"
              />
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {role !== "user" ? (
                  <p>
                    {role === "coordinator" ? "Tour Coordinator" : "Tour Guide"}
                  </p>
                ) : null}
                <h5 className="card-title">{bio}</h5>
                {facebook ? (
                  <a
                    className="btn btn-primary btn-floating"
                    style={{
                      backgroundColor: "#3b5998",
                    }}
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                ) : null}
                <span> </span>
                {instagram ? (
                  <a
                    className="btn btn-primary btn-floating"
                    style={{
                      backgroundColor: "#ac2bac",
                    }}
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                ) : null}
              </div>

              <div className="card-footer">
                <Link to="/edit-profile">
                  <button className="btn btn-primary btn-block btn-md m-3">
                    <i className="fas fa-pencil-alt me-2"></i> Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card text-left mb-5">
              <div className="card-header">
                <p className="h3 text-black">General Information</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    {profession ? (
                      <p>
                        <span className="h6">Profession: </span>
                        {profession}
                      </p>
                    ) : (
                      <Link to="/edit-profile">
                        <button className="btn btn-primary btn-block btn-md m-3">
                          <i className="fas fa-pencil-alt me-2"></i> Add
                          Profession
                        </button>
                      </Link>
                    )}
                  </div>
                  <div className="col-md-6">
                    {location ? (
                      <p>
                        <span className="h6">Location: </span>
                        {/* take to google map in a new tab */}
                        <a
                          href={`https://www.google.com/maps/place/${location}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {location}
                        </a>
                      </p>
                    ) : (
                      <Link to="/edit-profile">
                        <button className="btn btn-primary btn-block btn-md m-3">
                          <i className="fas fa-pencil-alt me-2"></i> Add
                          Location
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs navs */}
            {role === "coordinator" ? (
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    My Tours
                  </a>
                </li>
              </ul>
            ) : role === "guide" ? null : role === "user" ? (
              <ul className="nav nav-tabs mb-3" id="ex3" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="ex3-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex3-tabs-1"
                    role="tab"
                    aria-controls="ex3-tabs-1"
                    aria-selected="true"
                  >
                    Booked Tours
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="ex3-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex3-tabs-2"
                    role="tab"
                    aria-controls="ex3-tabs-2"
                    aria-selected="true"
                  >
                    Completed Tours
                  </a>
                </li>
              </ul>
            ) : null}

            {/* Tabs navs */}

            {/* Tabs content */}
            {role === "coordinator" ? (
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  {myTours.length > 0 &&
                    myTours.map((tour) => (
                      <div className="card text-left mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <img
                                src={
                                  tour.image ||
                                  "https://via.placeholder.com/150"
                                }
                                className="img-thumbnail"
                                alt="order banner"
                                style={{ height: "200px" }}
                              />
                            </div>
                            <div className="col-md-6">
                              <span className="h5">{tour.name}</span>
                              <p>
                                <strong>Location: </strong>
                                {tour.location}
                              </p>
                              <p>
                                <strong>From </strong>
                                {new Date(tour.startDate).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                                <strong> To </strong>
                                {new Date(tour.endDate).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                              <p>
                                <strong>Duration: </strong>
                                {tour.duration} Days
                              </p>

                              <Link
                                className="btn btn-outline-primary me-3 btn-lg"
                                to={`/tour/${tour._id}`}
                              >
                                See Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {myTours.length === 0 && <p className="h5">No Tours</p>}
                </div>
              </div>
            ) : role === "guide" ? null : role === "user" ? (
              <div className="tab-content" id="ex3-content">
                <div
                  className="tab-pane fade show active"
                  id="ex3-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex3-tab-1"
                >
                  {bookedTours.length > 0 &&
                    bookedTours.map((tour) => (
                      <div className="card text-left mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <img
                                src={
                                  tour.image ||
                                  "https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                                }
                                className="img-thumbnail"
                                alt="order banner"
                                style={{ height: "200px" }}
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="h5">{tour.name}</p>
                              <p>
                                <strong>Location: </strong>
                                {tour.location}
                              </p>
                              <p>
                                <strong>From </strong>
                                {new Date(tour.startDate).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                                <strong> To </strong>
                                {new Date(tour.endDate).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                              <p>
                                <strong>Duration: </strong>
                                {tour.duration} Days
                              </p>

                              <Link
                                className="btn btn-outline-primary me-3 btn-lg"
                                to={`/tour/${tour._id}`}
                              >
                                See Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {bookedTours.length === 0 && (
                    <p className="h5">No Booked Tours</p>
                  )}
                </div>
                <div
                  className="tab-pane fade show"
                  id="ex3-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex3-tab-2"
                >
                  {completedTours.length > 0 &&
                    completedTours.map((tour) => (
                      <div className="card text-left mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <img
                                src={
                                  tour.image ||
                                  "https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                                }
                                className="img-thumbnail"
                                alt="order banner"
                                style={{ height: "200px" }}
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="h5">{tour.name}</p>
                              <p>
                                <strong>Location: </strong>
                                {tour.location}
                              </p>
                              <p>
                                <strong>From </strong>
                                {new Date(tour.startDate).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                                <strong> To </strong>
                                {new Date(tour.endDate).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                              <p>
                                <strong>Duration: </strong>
                                {tour.duration} Days
                              </p>

                              <Link
                                className="btn btn-outline-primary me-3 btn-lg"
                                to={`/tour/${tour._id}`}
                              >
                                See Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {completedTours.length === 0 && (
                    <p className="h5">No Completed Tours</p>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
