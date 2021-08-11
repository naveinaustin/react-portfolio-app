import React, { Component } from 'react';
import imageUrl from '../../workspace-1280538_1280.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    };

    render() {
        //If the value changes due to an ajax call then the following variable assignment cannot be used. You need to use this.state.
        var name = "";
        var social;
        if(this.props.data){
          name = this.props.data.name
          social=this.props.data.social.map(function(network){
            return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
          });
        }

        return (
            <div className="section home-section" id="home" style={{backgroundImage: `url(${imageUrl})` }}>
                <div>
                    <div className="home-banner">
                        <h1>{name}</h1>
                        <div className="home-info">I am a Software Engineer currently located in the Silicon Valley of India.</div>
                        <div className="home-info">My experience spans both frontend and backend technologies.</div>
                        <div className="home-info">Scroll down to see more details about me.</div>
                        <hr/>
                        <ul className="social list-unstyled">
                            {social}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Home;