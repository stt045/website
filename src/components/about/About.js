import React, { Component } from 'react';

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={resumeData.about.headshot} alt="true" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.about.blurb}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Steven Tran</span><br />
                  <span>stt045@ucsd.edu</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/Headshot.jpg" className="button" target="_blank"><i className="fa fa-download"/>Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> 
    );
  }
}

export default About;