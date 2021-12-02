import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function SignUp() {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      window.location = "/";
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">TravelCOM</h1>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>

            <h3 className="text-center mt-3">
              Welcome!
              <br />
              Please sign up to continue.
            </h3>

            <div className="row mt-3">
              <div className="col-md-6 mb-3">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    src="assets/images/vehicle.jpg"
                    alt="vehicle"
                    style={{ width: "400px", height: "500px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      id="name"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <small className="form-text text-muted">
                      Enter your full name.
                    </small>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control p-2"
                      id="email"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <small className="form-text text-muted">
                      Enter a valid email address.
                    </small>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control p-2"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <small className="form-text text-muted">
                      Password must be at least 6 characters long.
                    </small>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control p-2"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <small className="form-text text-muted">
                      Re-type your password.
                    </small>
                  </div>

                  <p className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      onClick={signUpHandler}
                      {...((!email.match(emailRegex) ||
                        password.length < 6 ||
                        password !== confirmPassword) && {
                        disabled: true,
                      })}
                    >
                      Sign Up
                    </button>
                  </p>
                </form>
                {error && (
                  <div className="text-center">
                    <div class="alert alert-danger" role="alert">
                      {error}
                    </div>
                  </div>
                )}

                <p className="text-center">
                  Already have an account? <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;