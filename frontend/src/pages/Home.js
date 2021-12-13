import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { checkBookingByUser } from "../api";

function Home({ user }) {
  useEffect(() => {
    if (user !== null) {
      // check if the user is already booked any tour
      var userId = localStorage.getItem("id");
      checkBookingByUser(userId).then((res) => {
        console.log(res.data['data']);
        var isBooked = res.data['data'] === true ? true : false;
        localStorage.setItem("isBooked", isBooked);
      });
    }
  }, [user]);

  return (
    <div className="container">
      <div
        className="bg-image mt-5"
        style={{
          backgroundImage: `url("assets/images/bg.jpg")`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="display-4 text-center">TravelCOM</h1>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
            {user ? null : (
              <div className="row mt-5">
                <div className="col-md-6 mt-3">
                  <p className="text-center">
                    <Link to="/signin" className="btn btn-lg btn-info">
                      Sign In
                    </Link>
                  </p>
                </div>

                <div className="col-md-6 mt-3">
                  <p className="text-center">
                    <Link to="/signup" className="btn btn-lg btn-info">
                      Join Us
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
