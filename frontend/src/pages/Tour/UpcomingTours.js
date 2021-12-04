import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function UpcomingTours() {
  let cardDetails = [];

  let N = 20;
  for (let i = 1; i < N; i++) {
    cardDetails.push({
      id: i,
      title: "Card Title " + i,
      text: "Card Text " + i + " write something for card",
      url: `/tour/${i}`,
      button: "Button " + String(i),
    });
  }

  return (
    <div>
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
                  {cardDetails.map((oneCard) => (
                    <div
                      className="card border m-2"
                      style={{
                        maxWidth: "40rem",
                      }}
                    >
                      <div
                        className="bg-image hover-overlay ripple"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                          className="img-fluid"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{oneCard.title}</h4>
                        <p className="card-text">{oneCard.text}</p>
                        <Link
                          className="btn btn-outline-primary me-3 btn-lg"
                          to={oneCard.url}
                        >
                          See Details
                        </Link>
                        <Link
                          className="btn btn-outline-primary btn-lg"
                          to={oneCard.url}
                        >
                          Book Now
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
      <Footer />
    </div>
  );
}

export default UpcomingTours;
