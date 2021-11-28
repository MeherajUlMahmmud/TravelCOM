import React, { useState, useEffect } from "react";

function EditProfile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   setName(user.name);
  //   setBio(user.bio);
  //   setPicture(user.picture);
  //   setProfession(user.profession);
  //   setLocation(user.location);
  //   setFacebook(user.facebook);
  //   setInstagram(user.instagram);
  // }, []);

  const handleSubmit = () => {
    console.log(name, bio, picture, profession, location, facebook, instagram);
  }

  return (
    <div>
      <div className="container mt-3 ">
        <h3 className="text-center">Edit Profile</h3>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="ms-5 me-5">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    className="form-control p-2"
                    id="bio"
                    rows="3"
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="picture">Picture</label>
                  <input
                    type="file"
                    className="form-control p-2"
                    id="picture"
                    placeholder="Profile Picture"
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="profession">Profession</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    id="profession"
                    placeholder="Profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    id="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    id="facebook"
                    placeholder="https://www.facebook.com/zuck"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    id="instagram"
                    placeholder="https://www.instagram.com/zuck/"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
