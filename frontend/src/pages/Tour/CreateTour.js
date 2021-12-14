import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { createTour } from "../../api";
import Footer from "../../components/Footer";

function CreateTour() {
  const userId = localStorage.getItem("id");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    calculateDuration(startDate, endDate);
    return () => {};
  }, [startDate, endDate]);

  const calculateDuration = () => {
    console.log(startDate, endDate);
    if (startDate && endDate) {
      console.log("Calculating Duration");
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDuration(diffDays+1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting");
    console.log(
      name,
      description,
      image,
      location,
      startDate,
      endDate,
      duration
    );
    createTour({
      userId,
      name,
      description,
      image,
      location,
      startDate,
      endDate,
      duration,
    })
      .then((res) => {
        console.log(res);
        window.location.href = "/upcoming-tours";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container mb-5">
        <h1 className="text-center m-5">Create a New Tour</h1>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group m-3">
                    <label className="text-dark">Tour Name</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter Tour Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group m-3">
                    {image ? (
                      <div>
                        <img
                          src={image}
                          style={{
                            width: "50%",
                            height: "auto",
                          }}
                        />
                        <br />
                      </div>
                    ) : null}
                    <label>Tour Cover Image</label>
                    <div className="form-control p-2">
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setImage(base64)}
                      />
                    </div>
                  </div>

                  <div className="form-group m-3">
                    <label>Tour Location</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter Tour Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-3">
                    <label>Tour Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Tour Description"
                      rows="8"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group m-3">
                    <label>Tour Start Date</label>
                    <input
                      type="date"
                      className="form-control p-2"
                      placeholder="Tour Start Date"
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        calculateDuration();
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group m-3">
                    <label>Tour End Date</label>
                    <input
                      type="date"
                      className="form-control p-2"
                      placeholder="Tour End Date"
                      value={endDate}
                      onChange={(e) => {
                        setEndDate(e.target.value);
                        calculateDuration();
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group m-3">
                    <label>Tour Duration</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Tour Duration"
                      value={duration + " Days"}
                      readOnly
                    />
                  </div>
                  {duration < 1 ? (
                    <small className="text-danger ms-3">
                      Tour duration must be greater than 1 day
                    </small>
                  ) : null}
                </div>
              </div>

              <div className="text-center ">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                  {...((name.length < 5 ||
                    description.length < 5 ||
                    image === undefined ||
                    location.length < 5 ||
                    duration < 1) && {
                    disabled: true,
                  })}
                >
                  Create New Tour
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateTour;
