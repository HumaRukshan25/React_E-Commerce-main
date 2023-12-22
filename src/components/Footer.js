import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .social-icon {
            margin-right: 10px;
          }
        `}
      </style>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made by{" "}
              <a href="https://HumaRukshan.dev" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Huma Rukshan</a>
            </p>
            <a className="text-dark fs-4 social-icon" href="https://github.com/HumaRukshan25" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4 social-icon" href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="text-dark fs-4 social-icon" href="https://open.spotify.com" target="_blank" rel="noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
            <a className="text-dark fs-4 social-icon" href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
