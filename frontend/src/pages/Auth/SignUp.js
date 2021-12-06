import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import { createUser } from "../../api/index";
import Footer from "../../components/Footer";

function SignUp() {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    console.log(user);
    if (user !== null) {
      window.location.href = "/";
    }
    return () => {};
  }, [user]);

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      var uid = auth.currentUser.uid;
      createUser({ uid, name, email, role })
        .then((res) => {
          localStorage.setItem("id", res.data["data"]["_id"]);
          localStorage.setItem("uid", res.data["data"]["uid"]);
          localStorage.setItem("name", res.data["data"]["name"]);
          localStorage.setItem("email", res.data["data"]["email"]);
          localStorage.setItem("role", res.data["data"]["role"]);
          console.log(res.data["data"]);
          window.location = "/";
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };

  const onDummyChange = (e) => {
    e.preventDefault();
    console.log(name, email, role, password, confirmPassword);
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
                    <label className="text-dark" htmlFor="name">
                      Name
                    </label>
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
                    <label className="text-dark" htmlFor="email">
                      Email Address
                    </label>
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

                  <div className="form-group">
                    <label className="text-dark">Role</label>
                    <select
                      className="form-control p-2"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="user">User</option>
                      <option value="guide">Tour Guide</option>
                      <option value="coordinator">Tour Coordinator</option>
                    </select>
                    <small className="form-text text-muted">
                      Select your role.
                    </small>
                  </div>

                  <div className="form-group mt-3 mb-3">
                    <label className="text-dark" htmlFor="password">
                      Password
                    </label>
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
                    <label className="text-dark" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
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
                        role.length === 0 ||
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

                <h5 className="text-center mb-5">
                  Already have an account? <Link to="/signin">Sign In</Link>
                </h5>
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
