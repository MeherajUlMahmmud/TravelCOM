import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUpcomingTours } from "../../api";
import Footer from "../../components/Footer";

function UpcomingTours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUpcomingTours().then((res) => {
            console.log(res.data["data"]);
            setTours(res.data["data"]);
            console.log(tours);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center m-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center m-5">
                                <h1>Upcoming Tours</h1>
                                <hr />
                            </div>
                            <div className="row">
                                <div className="container-fluid d-flex justify-content-center">
                                    <div className="row row-cols-1 row-cols-md-2 g-4">
                                        {tours &&
                                            tours.map((tour) => (
                                                <div
                                                    className="card border-0 shadow-sm mb-4"
                                                    key={tour.id}
                                                    style={{
                                                        maxWidth: "40rem",
                                                        minWidth: "35rem",
                                                    }}
                                                >
                                                    <div
                                                        className="bg-image hover-overlay ripple"
                                                        data-mdb-ripple-color="light"
                                                    >
                                                        <img
                                                            src={
                                                                tour.image ||
                                                                "https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                                                            }
                                                            className="img-fluid"
                                                            alt={tour.name}
                                                            style={{
                                                                height: "20rem",
                                                                width: "35rem",
                                                            }}
                                                        />
                                                        <Link
                                                            to={`/tour/${tour._id}`}
                                                        >
                                                            <div
                                                                className="mask"
                                                                style={{
                                                                    backgroundColor:
                                                                        "rgba(251, 251, 251, 0.15)",
                                                                }}
                                                            ></div>
                                                        </Link>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4 className="card-title">
                                                            {tour.name}
                                                        </h4>
                                                        <p className="card-text">
                                                            {tour.description.substring(
                                                                0,
                                                                100
                                                            )}
                                                        </p>
                                                        <Link
                                                            className="btn btn-outline-primary me-3 btn-lg"
                                                            to={`/tour/${tour._id}`}
                                                        >
                                                            See Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default UpcomingTours;
