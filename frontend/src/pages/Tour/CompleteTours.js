import React from "react";
import { Link } from "react-router-dom";

function CompleteTours() {
  let cardDetails = [];

  let N = 20;
  for (let i = 1; i < N; i++) {
    cardDetails.push({
      id: i,
      title: "Card Title " + i,
      text: "Card Text " + i + " write something for card",
      url: i,
      button: "Button " + String(i),
    });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center m-5">
              <h1>Completed Tours</h1>
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
                        <h5 className="card-title">{oneCard.title}</h5>
                        <p className="card-text">{oneCard.text}</p>
                        <Link
                          className="btn btn-outline-primary"
                          to={oneCard.url}
                        >
                          {oneCard.button}
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
    </div>
  );
}

export default CompleteTours;
