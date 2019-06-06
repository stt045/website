import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials"> 
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>My favorite quotes</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>{resumeData.testimonials.one.quote}</p>
                      <cite>{resumeData.testimonials.one.cite}</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>{resumeData.testimonials.two.quote}</p>
                      <cite>{resumeData.testimonials.two.cite}</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>{resumeData.testimonials.three.quote}</p>
                      <cite>{resumeData.testimonials.three.cite}</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
    );
  }
}

export default Testimonials;