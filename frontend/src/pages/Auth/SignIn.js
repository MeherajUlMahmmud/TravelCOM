import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInHandler = () => {};

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
              Welcome back!
              <br />
              Please sign in to continue.
            </h3>

            <div className="row mt-3">
              <div className="col-md-6">
                <form>
                  <div className="form-group mt-5 mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control p-2"
                      id="email"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-4 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control p-2"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <p className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      onClick={signInHandler}
                      {...((!email.match(emailRegex) ||
                        password.length < 4) && {
                        disabled: true,
                      })}
                    >
                      Sign In
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
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/id/237/300/300"
                    alt="Sign In"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
