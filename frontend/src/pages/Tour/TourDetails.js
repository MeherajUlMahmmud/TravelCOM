import React, { useState, useEffect } from "react";
import { getTourDetails } from "../../api";
import Footer from "../../components/Footer";

function TourDetails() {
  const tourId = window.location.pathname.split("/")[2];
  const userId = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTourDetails(tourId).then((res) => {
      console.log(res.data["data"]);
      setTour(res.data["data"]);
      convertDate(res.data["data"]);
      setLoading(false);
    });
    return () => {};
  }, []);

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

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
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
                  alt=""
                />
                <h2>{tour.name}</h2>
                {tour.userId === userId ? (
                  <div className="row">
                    <div className="col-md-6">
                      <a className="btn btn-info btn-md">Edit Deails</a>
                    </div>
                    <div className="col-md-6">
                      <a className="btn btn-danger btn-md">Delete</a>
                    </div>
                  </div>
                ) : null}
                {userId && role === "user" ? (
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-center">
                        <a className="btn btn-success btn-md">BOOK NOW</a>
                      </div>
                    </div>
                  </div>
                ) : null}
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h4>Tour Starts On: {tour.startDate}</h4>
            </div>
            <div className="col-md-4">
              <h4>Tour Ends On: {tour.endDate}</h4>
            </div>
            <div className="col-md-4">
              <h4>Tour Duration: {tour.duration} Days</h4>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <h5>Tour Details</h5>
              <p>{tour.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default TourDetails;
