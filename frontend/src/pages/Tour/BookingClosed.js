import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBookingClosedTours } from "../../api";
import Footer from "../../components/Footer";

function BookingClosed() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookingClosedTours().then((res) => {
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
                <h1>Booking Closed Tours</h1>
                <hr />
              </div>
              <div className="row">
                <div className="container-fluid d-flex justify-content-center">
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    {tours.map((oneCard) => (
                      <div
                        className="card border-0 shadow-sm mb-4"
                        key={oneCard.id}
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
                              oneCard.image ||
                              "https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                            }
                            className="img-fluid"
                            alt={oneCard.name}
                          />
                          <Link to={`/tour/${oneCard._id}`}>
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </Link>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{oneCard.name}</h5>
                          <p className="card-text">
                            {oneCard.description.substring(0, 100)}
                          </p>
                          <Link
                            className="btn btn-outline-primary"
                            to={`/tour/${oneCard._id}`}
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

export default BookingClosed;
