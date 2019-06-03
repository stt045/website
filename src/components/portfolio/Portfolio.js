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
                    <img alt src="images/portfolio/console.jpg" />
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
                    <img alt src="{resumeData.portfolio.three.image}" />
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
                    <img alt src="{resumeData.portfolio.four.image}" />
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
              
              {/* EXTRA PORTFOLIO ITEMS TO ADD LATER ---
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/farmerboy.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/girl.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Girl</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  
              */}
            </div> 
          </div> 
          
          
          {/* Modal Popup
        --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={resumeData.portfolio.one.image} alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.one.title}</h4>
              <p>{resumeData.portfolio.one.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.one.intro}</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/stt045" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.two.title}</h4>
              <p>{resumeData.portfolio.two.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.two.intro}</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/stt045" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.three.title}</h4>
              <p>{resumeData.portfolio.three.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.three.intro}</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/stt045" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
            <div className="description-box">
              <h4>{resumeData.portfolio.four.title}</h4>
              <p>{resumeData.portfolio.four.description}</p>
              <span className="categories"><i className="fa fa-tag" />{resumeData.portfolio.four.intro}</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/stt045" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}


          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section>
    );
  }
}

export default Portfolio;