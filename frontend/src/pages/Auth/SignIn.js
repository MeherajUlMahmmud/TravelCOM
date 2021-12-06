import React, { useState, useEffect } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { getUserDetails } from "../../api";

function SignIn() {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user !== null) {
      window.location.href = "/";
    }
  }, [user]);

  const signInHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      var uid = auth.currentUser.uid;
      getUserDetails(uid)
        .then((res) => {
          localStorage.setItem("id", res.data["data"]["_id"]);
          localStorage.setItem("uid", res.data["data"]["uid"]);
          localStorage.setItem("name", res.data["data"]["name"]);
          localStorage.setItem("email", res.data["data"]["email"]);
          localStorage.setItem("role", res.data["data"]["role"]);
          console.log(res.data["data"]);
          setLoading(false);
          // window.location = "/";
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log(err);
        });
    } catch {
      setLoading(false);
      setError("Invalid email or password");
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
              Welcome back!
              <br />
              Please sign in to continue.
            </h3>

            <div className="row mt-3">
              <div className="col-md-6">
                <form className="mt-5">
                  <div className="form-group mt-5 mb-3">
                    <label className="text-dark" htmlFor="email">
                      Email
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
                  <div className="form-group mt-4 mb-3">
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

                  {loading ? (
                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        onClick={signInHandler}
                        {...((!email.match(emailRegex) ||
                          password.length < 6) && {
                          disabled: true,
                        })}
                      >
                        Sign In
                      </button>
                    </div>
                  )}
                </form>
                {error && (
                  <div className="text-center">
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  </div>
                )}
                <h5 className="text-center">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </h5>
              </div>
              <div className="col-md-6 mb-3">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    src="assets/images/eiffel-tower.jpg"
                    alt="eiffel-tower"
                    style={{ width: "400px", height: "500px" }}
                  />
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

export default SignIn;
