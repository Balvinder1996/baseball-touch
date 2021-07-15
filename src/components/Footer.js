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
              <span className="footer_content_section">Home</span>
              <span className="footer_content_section">Rent A Cage</span>
              <span className="footer_content_section">Book a Lesson</span>
              <span className="footer_content_section">Dwayne Jones</span>
              <span className="footer_content_section">Anthony Martinez</span>
              <span className="footer_content_section">Jason Dehler</span>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12">
              <span className="footer_content_section">
                Pitching - Arnie Munoz
              </span>
              <span className="footer_content_section">
                Pitching - Taylor Jordan
              </span>
              <span className="footer_content_section">Our Facility</span>
              <span className="footer_content_section">
                Birthday Party Package
              </span>
              <span className="footer_content_section">Medical Waiver</span>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-2 offset-5">
              <span className="footer_content_section">Contact Us</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
