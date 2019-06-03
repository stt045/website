import React, { Component } from 'react';


class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        {/* Education ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.resume.education.one.name}</h3>
                <p className="info"> {resumeData.resume.education.one.major} and {resumeData.resume.education.one.minor} <span>•</span> <em className="date">{resumeData.resume.education.one.start}{resumeData.resume.education.one.end}</em></p>
                <p> {resumeData.resume.education.one.description} </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.resume.education.two.name}</h3>
                <p className="info">{resumeData.resume.education.two.major}<span>•</span> <em className="date">{resumeData.resume.education.two.start}{resumeData.resume.education.two.end}</em></p>
                <p>{resumeData.resume.education.two.description}</p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.resume.work.one.companyName}</h3>
                <p className="info"> {resumeData.resume.work.one.jobTitle} <span>•</span> <em className="date">{resumeData.resume.work.one.start}{resumeData.resume.work.one.end}</em></p>
                <p> {resumeData.resume.work.one.description} </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.resume.work.two.companyName}</h3>
                <p className="info"> {resumeData.resume.work.two.jobTitle} <span>•</span> <em className="date">{resumeData.resume.work.two.start}{resumeData.resume.work.two.end}  </em></p>
                <p>{resumeData.resume.work.two.description}</p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills  ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skills.description}</p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Javacript (jquery, node, express)</em></li>
                <li><span className="bar-expand illustrator" /><em>Swift</em></li>
                <li><span className="bar-expand wordpress" /><em>C/C++, JAVA</em></li>
                <li><span className="bar-expand css" /><em>HTML/CSS</em></li>
                <li><span className="bar-expand html5" /><em>Something</em></li>
                <li><span className="bar-expand jquery" /><em>git</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
    );
  }
}

export default Resume;