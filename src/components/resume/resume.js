import React, { Component } from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    };

    render() {  
        var workTitle = "";
        var educationTitle = "";
        var work;
        var education;
        if(this.props.data) {
            if(this.props.data.work) {
              workTitle = this.props.data.work.title;
              work = this.props.data.work.companies.map(function(company, index) {
                return (
                    <div className="each-section" key={index}>
                        <div className="role"><h4>{company.role}</h4></div>
                        <span className="company">{company.name}</span>
                        <span className="separator">•</span><span className="tenure">{company.duration}</span>
                        <span className="separator">•</span><span className="location">{company.location}</span>
                        <div className="work-desc">
                            <p>{company.description1}</p>
                            <p>{company.description2}</p>
                        </div>
                    </div>
                )
              });
            }
            if(this.props.data.education) {
              educationTitle = this.props.data.education.title;
              education  = this.props.data.education.schools.map(function(school, index) {
                return (
                    <div className="each-section" key={index}>
                        <div className="role"><h4>{school.degree}</h4></div>
                        <span className="college-name">{school.collegeName}</span>
                        <span className="separator">•</span><span className="completion">{school.completion}</span>
                        <span className="separator">•</span><span className="score">{school.score}</span>
                        <div className="location">
                            {school.location}
                        </div>
                    </div>
                )
              });
            }
        }

        return (
            <div className="section resume-section" id="resume">      
                <div className="container work">
                     <div className="row">
                        <div className="col-md-4 col-12">
                            <h3><span className="sub-title">{workTitle}</span></h3>
                        </div>
                        <div className="col-md-8 col-12 sub-section">
                            {work}
                        </div>
                     </div>
                </div>
                <div className="resume-divider"><hr /></div>
                <div className="container education">
                     <div className="row">
                        <div className="col-md-4 col-12">
                            <h3><span className="sub-title">{educationTitle}</span></h3>
                        </div>
                        <div className="col-md-8 col-12 sub-section">
                            {education}
                        </div>
                     </div>
                </div>
            </div>
        );
    }    
}

export default Resume;