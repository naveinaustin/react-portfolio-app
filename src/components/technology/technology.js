import React, { Component } from 'react';

class Technology extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    };

    render() {  
        var techList;
        if(this.props.data){
            var title = this.props.data.title;
            if(this.props.data.techList) {
                techList=this.props.data.techList.map(function(tech) {
                    var imgUrl = `${process.env.PUBLIC_URL}/${tech.image}`;
                    return <li key={tech.name}><img src={imgUrl} alt={tech.title} className="logo"/><div className="tech-title">{tech.title}</div><div>{tech.description}</div></li>
                });
            }
        }

        return (
            <div className="section technology-section" id="technology">      
                <div className="container">
                     <div className="row">
                        <div className="col-md-4 col-12">
                            <h3><span className="sub-title">{title}</span></h3>
                        </div>
                        <div className="col-md-8 col-12 sub-section">
                            I have been working on a number of technologies and tools over the years. Here listed are some of them.
                            The list also includes technologies that I am learning or have a limited knowledge off. These are listed at the bottom.
                        </div>
                     </div>
                    
                </div>
                <div className="container">
                    <div className="row">
                        <ul className="tech-list">
                         {techList}
                        </ul>
                    </div>
                    <div style={{fontWeight:"bold"}}>** All images shown above are for depicting the technology used/learnt. No copyright infringement is intended.</div>
                 </div>
            </div>
        );
    }    
}

export default Technology;