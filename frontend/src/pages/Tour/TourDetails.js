import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  closeBooking,
  completeTour,
  deleteTour,
  getBookedTourByTourIdAndUserId,
  checkBookingAbilityByTourIdAndUserId,
  getTourDetails,
} from "../../api";
import Footer from "../../components/Footer";

function TourDetails() {
  const tourId = window.location.pathname.split("/")[2];
  const userId = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  const [isAbleToBook, setIsAbleToBook] = useState(true);
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(true);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    getTourDetails(tourId).then((res) => {
      console.log(res.data["data"]);
      setTour(res.data["data"]);
      convertDate(res.data["data"]);
      setLoading(false);
    });

    if (role === "user") {
      getBookedTourByTourIdAndUserId({ tourId, userId }).then((res) => {
        console.log(res.data["data"]);
        setIsBooked(res.data["data"]);
      });

      checkBookingAbilityByTourIdAndUserId({ tourId, userId }).then((res) => {
        console.log(res.data["data"]);
        setIsAbleToBook(res.data["data"]);
        console.log(isAbleToBook);
      });
    }
    return () => {};
  }, [tourId]);

  const convertDate = (tour) => {
    tour.startDate = new Date(tour.startDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    tour.endDate = new Date(tour.endDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDelete = () => {
    setLoading(true);
    deleteTour(tourId).then((res) => {
      console.log(res);
      setLoading(false);
      window.location.href = "/upcoming-tours";
    });
  };

  const handleCloseBooking = () => {
    setLoading(true);
    console.log("close");
    closeBooking(tourId).then((res) => {
      setTour(res.data["data"]);
      setLoading(false);
    });
  };

  const handleComplete = () => {
    setLoading(true);
    console.log("complete");
    completeTour(tourId).then((res) => {
      setTour(res.data["data"]);
      setLoading(false);
    });
  };

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="container mb-5 mt-5">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center mb-5">
                  <img
                    src={
                      tour.image ||
                      "https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                    }
                    className="img-fluid mb-3"
                    alt={tour.name}
                  />
                  <h2>{tour.name}</h2>
                  <h4>Location : {tour.location}</h4>

                  {tour.isCompleted ? (
                    <TourCompleted />
                  ) : (
                    <div className="row">
                      <div className="col-md-12">
                        {tour.bookingOpen ? (
                          <div>
                            {tour.userId === userId ? (
                              <BookingOpenForCoordinator tourId={tourId} />
                            ) : null}

                            {role === "user" ? (
                              isAbleToBook === false ? (
                                <BookedOtherTour />
                              ) : isBooked ? (
                                <BookedThisTour />
                              ) : (
                                <BookNow tourId={tourId} />
                              )
                            ) : null}
                          </div>
                        ) : (
                          <div>
                            <button className="btn btn-secondary m-3" disabled>
                              <i className="fa fa-exclamation-triangle"></i>{" "}
                              Booking is closed.
                            </button>
                            {role === "user" && isBooked ? (
                              <BookedThisTour />
                            ) : null}
                            {tour.userId === userId ? (
                              <MarkAsCompleted
                                handleComplete={handleComplete}
                              />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h5 className="note note-info">
                  Tour Starts On: {tour.startDate}
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="note note-info">Tour Ends On: {tour.endDate}</h5>
              </div>
              <div className="col-md-4">
                <h5 className="note note-info">
                  Duration: {tour.duration} Days
                </h5>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <h5 className="note">Tour Details</h5>
                <p>{tour.description}</p>
              </div>
            </div>
            {/* show location on map */}
            <div className="row mt-2">
              <div className="col-md-12">
                <h5 className="note">Location</h5>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="map"
                      tabIndex={0}
                      width="100%"
                      height="400"
                      id="gmap_canvas"
                      src={`https://maps.google.com/maps?q=${tour.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete <u>{tour.name}</u>?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5>
                    Are you sure you want to delete <u>{tour.name}</u>?
                  </h5>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                    data-mdb-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="bookingCloseModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Close booking for <u>{tour.name}</u>?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5>
                    Are you sure you want to close booking for{" "}
                    <u>{tour.name}</u>?
                  </h5>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleCloseBooking}
                    data-mdb-dismiss="modal"
                  >
                    Close Booking
                  </button>
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

function BookingOpenForCoordinator(props) {
  return (
    <div>
      <Link className="btn btn-info btn-md m-3" to={`/update-tour/${props.tourId}`}>
        <i className="fas fa-edit"></i> Update Details
      </Link>
      <button
        className="btn btn-primary btn-md m-3"
        type="button"
        data-mdb-toggle="modal"
        data-mdb-target="#bookingCloseModal"
      >
        <i class="far fa-times-circle"></i> Close Booking
      </button>
      <button
        className="btn btn-danger btn-md m-3"
        type="button"
        data-mdb-toggle="modal"
        data-mdb-target="#deleteModal"
      >
        <i className="fas fa-trash-alt"></i> Delete
      </button>
    </div>
  );
}

function BookedThisTour() {
  return (
    <p className="h5 mt-3">
      <i className="fas fa-check-circle text-success"></i> You have booked this
      tour
    </p>
  );
}

function BookedOtherTour() {
  return (
    <p className="h5 mt-3">
      <i className="fa fa-exclamation-triangle text-warning"></i> You have
      already booked other tour on this date
    </p>
  );
}

function BookNow(props) {
  console.log(props.tourId);
  return (
    <Link
      to={`/tour/${props.tourId}/booking`}
      className="btn btn-success btn-md mt-3"
    >
      BOOK NOW
    </Link>
  );
}

function TourCompleted() {
  return (
    <button className="btn btn-success m-3" disabled>
      <i className="fa fa-check"></i> Tour Completed
    </button>
  );
}

function MarkAsCompleted(props) {
  return (
    <button
      className="btn btn-success m-3"
      type="button"
      onClick={props.handleComplete}
    >
      <i className="fa fa-check"></i> Mark as Complete
    </button>
  );
}

export default TourDetails;
