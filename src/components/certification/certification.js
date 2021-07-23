import React, { Component } from 'react';

class Certification extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    };

    render() {  
        var certList;
        var title = "";
        if(this.props.data) {
            title = this.props.data.title;
            if(this.props.data.certList) {
                certList=this.props.data.certList.map(function(cert) {
                    var imgUrl = `${process.env.PUBLIC_URL}` + "/" + cert.image;
                    if(cert.link && cert.link !== "" && cert.dimension && cert.dimension !== "") {
                        return <li key={cert.name}><a href={cert.link} target="_blank"><img style={cert.dimension} src={cert.image} alt={cert.title} className="logo"/></a><div className="cert-title">{cert.title}</div></li>
                    } else if(cert.link && cert.link !== "") {
                        return <li key={cert.name}><a href={cert.link} target="_blank"><img src={imgUrl} alt={cert.title} className="logo"/></a><div className="cert-title">{cert.title}</div></li>
                    } else if(cert.dimension && cert.dimension !== "") {
                        return <li key={cert.name}><img style={cert.dimension} src={imgUrl} alt={cert.title} className="logo"/><div className="cert-title">{cert.title}</div></li>
                    }
                    return <li key={cert.name}><img src={imgUrl} alt={cert.title} className="logo"/><div className="cert-title">{cert.title}</div></li>
                });
            }
        }

        return (
            <div className="section certification-section" id="certification">      
                <div className="container">
                     <div className="row">
                        <div className="col-md-4 col-12">
                            <h3><span className="sub-title">{title}</span></h3>
                        </div>
                        <div className="col-md-8 col-12 sub-section">
                            A list of certifications that I have achieved over the years.
                        </div>
                     </div>
                    
                </div>
                <div className="container">
                    <div className="row">
                        <ul className="cert-list">
                         {certList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Certification;