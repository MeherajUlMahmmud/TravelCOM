import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTourDetails, bookingTour } from "../../api";

function TourBooking() {
  const tourId = window.location.pathname.split("/")[2];
  const userId = localStorage.getItem("id");
  const [tour, setTour] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phone, setPhone] = useState("");
  const [transactionID, setTransactionID] = useState("");

  useEffect(() => {
    getTourDetails(tourId).then((res) => {
      console.log(res.data["data"]);
      setTour(res.data["data"]);
      setIsLoading(false);
    });
    return () => {};
  }, []);

  function handleSubmit() {
    console.log(tour);
    console.log(tourId);
    console.log(paymentMethod);
    console.log(phone);
    console.log(transactionID);

    bookingTour({ tourId, userId, paymentMethod, phone, transactionID }).then(
      (res) => {
        console.log(res.data);
      }
    );
  }

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center m-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center m-5 text-dark">Tour Booking</h2>
              <div className="row">
                <div className="col-md-6">
                  <Link className="h4 mb-2" to={`/tour/${tourId}`}>
                    <strong>Tour Name:</strong> {tour.name}
                  </Link>
                  <p className="h4 mb-4">
                    <strong>Tour Location:</strong> {tour.location}
                  </p>
                  <p className="h6">
                    <strong>Tour Details:</strong>{" "}
                    {tour.description.substring(0, 250)}
                  </p>
                  {tour.description.length > 250 && (
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                    >
                      Read More
                    </button>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select Payment Method</label>
                    <select
                      className="form-control p-2"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="">Select One</option>
                      <option value="bkash">bKash</option>
                      <option value="rocket">Rocket</option>
                      <option value="nagad">Nagad</option>
                    </select>
                  </div>
                  <div className="form-group mt-3">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      className="form-control p-2"
                      placeholder="Enter Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Transaction ID</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter Transaction ID"
                      onChange={(e) => setTransactionID(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      onClick={handleSubmit}
                      {...((paymentMethod === "" ||
                        phone.length < 11 ||
                        transactionID.length < 6) && {
                        disabled: true,
                      })}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tour Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{tour.description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourBooking;
