import React, {Component} from "react";

class About extends Component {
	constructor(props) {
		super(props);
	}

    render() {

    	if(this.props.data && this.props.data.photoUrl) {
    		var photoUrl = this.props.data.photoUrl;
    		var title = this.props.data.title;
    		//var photoImg=<img src={photoUrl} />;
    	}
        return (
            <div className="section about-section" id="about">
            	<div className="container">
	            	<div className="row">
		                <div className="col-md-4 col-0">
		                	<img className="image-style" src={photoUrl} />
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
		        </div>
            </div>
        );
    }    
}

export default About;