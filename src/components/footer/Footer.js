import React, { Component } from 'react';

class Footer extends Component {
    render() {
      let resumeData = this.props.resumeData;
      return (
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href={resumeData.links.facebook} target="_blank"><i className="fa fa-facebook" /></a></li>
                <li><a href={resumeData.links.instagram} target="_blank"><i className="fa fa-instagram" /></a></li>
                <li><a href={resumeData.links.github} target="_blank"><i className="fa fa-github" /></a></li>
                <li><a href={resumeData.links.linkedin} target="_blank"><i className="fa fa-linkedin" /></a></li>
              </ul>
              <ul className="copyright">
                <li>{resumeData.footer.copyright}</li> 
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> 
      );
    }
}

export default Footer;