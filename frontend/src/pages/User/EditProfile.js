import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import Footer from "../../components/Footer";
import { getUserDetails, updateUserDetails } from "../../api";

function EditProfile() {
  const id = localStorage.getItem("id");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    if (uid) {
      getUserDetails(uid).then((res) => {
        console.log("Getting data");
        console.log(res.data["data"]);
        setName(res.data["data"]["name"]);
        setBio(res.data["data"]["bio"]);
        setPicture(res.data["data"]["picture"]);
        setProfession(res.data["data"]["profession"]);
        setLocation(res.data["data"]["location"]);
        setFacebook(res.data["data"]["facebook"]);
        setInstagram(res.data["data"]["instagram"]);
      });
    } else {
      window.location.href = "/signin";
    }
    return () => {};
  }, [uid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      id,
      name,
      bio,
      picture,
      profession,
      location,
      facebook,
      instagram
    );
    updateUserDetails({
      id,
      name,
      bio,
      picture,
      profession,
      location,
      facebook,
      instagram,
    })
      .then((res) => {
        localStorage.setItem("name", res.data["data"]["name"]);
        window.location.href = "/profile";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <h3 className="text-center">Update Profile</h3>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="ms-5 me-5">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="text-dark">Name</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <label className="text-dark">Picture</label>
                      <div className="form-control p-2">
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) => setPicture(base64)}
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <label className="text-dark">Profession</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="Profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <label className="text-dark">Facebook</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="https://www.facebook.com/zuck"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="text-dark">Bio</label>
                      <textarea
                        className="form-control p-2"
                        placeholder="Bio"
                        value={bio}
                        rows="5"
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <label className="text-dark">Location</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <label className="text-dark">Instagram</label>
                      <input
                        type="text"
                        className="form-control p-2"
                        placeholder="https://www.instagram.com/zuck/"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    {...((name.length === 0 ) && {
                      disabled: true,
                    })}
                    onClick={handleSubmit}
                  >
                    Update Profile Information
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
