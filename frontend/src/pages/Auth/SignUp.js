import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function SignUp() {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signUpHandler = () => {};

  return (
    <div>
      <Navbar user={false} />
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
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/id/237/300/300"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <p className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={signUpHandler}
                      {...((name.length < 2 ||
                        !email.match(emailRegex) ||
                        password.length < 4 ||
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
    </div>
  );
}

export default SignUp;
