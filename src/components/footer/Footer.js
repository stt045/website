import React, { Component } from 'react';

class Footer extends Component {
    render() {
      let resumeData = this.props.resumeData;
      return (
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/steven.tran.0283" target="_blank"><i className="fa fa-facebook" target="_blank"/></a></li>
                <li><a href="https://www.instagram.com/steventraaan/" target="_blank"><i className="fa fa-instagram" target="_blank"/></a></li>
                <li><a href="https://github.com/stt045" target="_blank"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/steventran045/" target="_blank"><i className="fa fa-linkedin" target="_blank"/></a></li>
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