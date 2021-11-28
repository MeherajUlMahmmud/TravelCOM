import { useState } from "react";
import { auth } from "../firebase-config";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import "./login.css";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [loginerror, setLoginerror] = useState([]);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    if (!loginEmail) {
      console.log("email field is empty");
    } else if (!loginPassword) {
      console.log("password field is empty");
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.code);
        setLoginerror(error.code);
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="containerLogin">
      {!user ? (
        <div>
          <h1>Login</h1>
          <input
            placeholder="Email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />

          <button className="btnLogin" onClick={login}>
            Login
          </button>
        </div>
      ) : (
        <button className="btnLogout" onClick={logout}>
          Log Out
        </button>
      )}

      <div>{loginerror ? loginerror : ""}</div>
    </div>
  );
};

export default LogIn;
