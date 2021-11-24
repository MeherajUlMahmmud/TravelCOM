import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const user = false;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">TravelCOM</h1>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>


            <div className="row mt-5">
              <div className="col-md-6">
                <p className="text-center">
                  <Link to="/signin" className="btn btn-lg btn-info">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="col-md-6">
                <p className="text-center">
                  <Link to="/signup" className="btn btn-lg btn-info">
                    Join Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
