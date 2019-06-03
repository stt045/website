import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects!</h1>

            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src={resumeData.portfolio.one.image} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{resumeData.portfolio.one.title}</h5>
                        <p>{resumeData.portfolio.one.intro}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src={resumeData.portfolio.two.image} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{resumeData.portfolio.two.title}</h5>
                        <p>{resumeData.portfolio.two.intro}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src={resumeData.portfolio.three.image} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{resumeData.portfolio.three.title}</h5>
                        <p>{resumeData.portfolio.three.intro}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src={resumeData.portfolio.four.image} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{resumeData.portfolio.four.title}</h5>
                        <p>{resumeData.portfolio.four.intro}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 

            </div> 
          </div> 
          
          
          {/* Modal Popup
        --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={resumeData.portfolio.one.image} alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.one.titleModal}</h4>
              <p>{resumeData.portfolio.one.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.one.intro}</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/stt045" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={resumeData.portfolio.two.imageModal} alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.two.titleModal}</h4>
              <p>{resumeData.portfolio.two.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.two.intro}</span>
            </div>
            <div className="link-box">
              <a href={resumeData.portfolio.two.detailsURL} target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={resumeData.portfolio.three.image} alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.three.titleModal}</h4>
              <p>{resumeData.portfolio.three.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.three.intro}</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/stt045" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={resumeData.portfolio.four.imageModal} alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.four.title}</h4>
              <p>{resumeData.portfolio.four.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.four.intro}</span>
            </div>
            <div className="link-box">
              <a href={resumeData.portfolio.four.detailsURL}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          
        </div> {/* row End */}
      </section>
    );
  }
}

export default Portfolio;