import React, { useState } from "react";
import Footer from "../../components/Footer";

function CreateEditTour() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [duration, setDuration] = useState(0);

  const calculateDuration = () => {
    console.log(startDate, endDate);
    if (startDate && endDate) {
      console.log(startDate, endDate);
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDuration(diffDays);
    }
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center m-5">
              <h1>Create a New Tour</h1>
              <hr />
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group m-3">
                    <label className="text-dark">Tour Name</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter Tour Name"
                    />
                  </div>

                  <div className="form-group m-3">
                    <label>Tour Cover Image</label>
                    <input type="file" className="form-control p-2" />
                  </div>

                  <div className="form-group m-3">
                    <label>Tour Location</label>
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter Tour Location"
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
                </div>
              </div>

              <div className="text-center ">
                <button className="btn btn-primary btn-lg" type="submit">
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

export default CreateEditTour;
