import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/User/Profile";
import Navbar from "./components/Navbar";
import EditProfile from "./pages/User/EditProfile";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Router>
      <main>
        <Navbar user={user} />
        <Routes>
          <Route path="/" exact element={<Home user={user} />} />
          <Route path="/signin" element={<SignIn user={user} />} />
          <Route path="/signup" element={<SignUp user={user} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
        {/* <Footer/> */}
      </main>
    </Router>
  );
}

export default App;
