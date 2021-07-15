import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="container p-lg-4 mb-lg-3">
          <div className="row text-center">
            <div className="col-md-12">
              <p className="footer_content">
                Copyright © 2021 Dingers Batting Cages - All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12">
              <a href="https://dingerstrainingcenter.com/">
                <span className="footer_content_section">Home</span>
              </a>
              <a href="/">
                <span className="footer_content_section">Rent A Cage</span>
              </a>
              <a href="https://dingerstrainingcenter.com/book-a-lesson">
                <span className="footer_content_section">Book a Lesson</span>
              </a>
              <a href="https://dingerstrainingcenter.com/dwayne-jones">
                <span className="footer_content_section">Dwayne Jones</span>
              </a>
              <a href="https://dingerstrainingcenter.com/anthony-martinez">
                <span className="footer_content_section">Anthony Martinez</span>
              </a>
              <a href="https://dingerstrainingcenter.com/jason-dehler">
                <span className="footer_content_section">Jason Dehler</span>
              </a>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12">
              <a href="https://dingerstrainingcenter.com/pitching-arnie-munoz">
                <span className="footer_content_section">
                  Pitching - Arnie Munoz
                </span>
              </a>
              <a href="https://dingerstrainingcenter.com/pitching-taylor-jordan">
                <span className="footer_content_section">
                  Pitching - Taylor Jordan
                </span>
              </a>
              <a href="https://dingerstrainingcenter.com/our-facility">
                <span className="footer_content_section">Our Facility</span>
              </a>
              <a href="https://dingerstrainingcenter.com/birthday-party-package">
                <span className="footer_content_section">
                  Birthday Party Package
                </span>
              </a>
              <a href="https://dingerstrainingcenter.com/medical-waiver">
                <span className="footer_content_section">Medical Waiver</span>
              </a>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-2 offset-5">
              <a href="https://dingerstrainingcenter.com/contact-us">
                <span className="footer_content_section">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
