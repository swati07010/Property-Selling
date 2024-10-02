import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h3>Company</h3>
            <p>
              <a href="#" className="text-white">
                About Us
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Careers
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Contact
              </a>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h3>Services</h3>
            <p>
              <a href="#" className="text-white">
                Web Development
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                App Development
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                SEO
              </a>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h3>Follow Us</h3>
            <p>
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
