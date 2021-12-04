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
import UpcomingTours from "./pages/Tour/UpcomingTours";
import BookingClosed from "./pages/Tour/BookingClosed";
import CompleteTours from "./pages/Tour/CompleteTours";
import Footer from "./components/Footer";
import CreateEditTour from "./pages/Tour/CreateEditTour";
import TourDetails from "./pages/Tour/TourDetails";

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

          <Route path="/upcoming-tours" element={<UpcomingTours />} />
          <Route path="/booking-closed-tours" element={<BookingClosed />} />
          <Route path="/completed-tours" element={<CompleteTours />} />
          <Route path="/create-tour" element={<CreateEditTour />} />
          <Route path="/tour/:id" element={<TourDetails />} />
        </Routes>
        {/* <Footer/> */}
      </main>
    </Router>
  );
}

export default App;
