import React, {Component} from "react";

class About extends Component {
	 constructor(props) {
        super(props);
        this.state = {
          name: ""
        };

        this.viewResume = this.viewResume.bind(this);
    };

    viewResume(resumeType) {
    	let pdfWindow = window.open("");
		pdfWindow.document.write('<embed src="https://sumanbogati.github.io/sample.pdf" width="100%" height="!00%" />');
    }

	render() {

    	if(this.props.data && this.props.data.photoUrl) {
    		//TODO: run grunt/gulp to minimize images
    		var photoUrl = `${process.env.PUBLIC_URL}/${this.props.data.photoUrl}`;
    		var title = this.props.data.title;
    	}
        return (
            <div className="section about-section" id="about">
            	<div className="container">
	            	<div className="row">
		                <div className="col-md-4 col-0">
		                	<img className="image-style rounded-circle" src={photoUrl} alt="Navein Austin Fernandes"/>
		                </div>
		                <div className="col-md-8 col-12">
		                	<h2>{title}</h2>
		                	<div className="about-me">
		                		<p>
			                		Hello, I am a passionate developer with diverse set of skills. As a programmer with extensive experience, I am comfortable developing both frontend and backend applications.
			                		The idea of finishing off a project in an innovative way is always appealing to me. My desire to learn is constant and you will find me studying something all the time. 
			                	</p>
			                	<p>
			                		Basketball and listening to music are two of my favorite pastimes outside of work. Furthermore, I volunteer at an annual agile conference in Bengaluru, India.
			                	</p>
		                	</div>
		                </div>
		            </div>
		            <div className="row download-resume d-none">
		            	<div className=" offset-md-4 col-md-8 col-12">
                            <button id="submit" name="submit" className="btn" onClick={this.viewResume}><i className="fa fa-download"></i>&nbsp;Download Resume</button>
                        </div>
                    </div> 
		        </div>
            </div>
        );
    }    
}

export default About;