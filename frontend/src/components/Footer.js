import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-dark text-center text-white">
        <div className="container p-4">
          <div className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <div className="text-center">
            <h1>TravelCOM</h1>
          </div>

          <div className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
        <div className="text-center p-3">
          © 2021 Copyright{" "}
          <a className="text-white" href="travel.com">
            Travel.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
