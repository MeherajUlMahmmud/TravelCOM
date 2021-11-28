import "./App.css";
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";
import Topbar from "./component/topbar/Topbar";
import Footer from "./component/Footer";
import SerchMap from "./component/google_map/SerchMap";

function App() {
  //user
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Router>
      <Topbar user={user} />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login" show={user ? user.email : "no user"}>
          <LogIn />
        </Route>
        <Route path="/"></Route>
      </Switch>
      <SerchMap />
      {/* <h1>User:{user ? user.email : "no user"}</h1> */}
      <Footer user={user} />
    </Router>
  );
}

export default App;
//step 1: Creaete firebase-configue file
//step 2: Create stets to check on change of input fields
//step 3:
//step 4:
