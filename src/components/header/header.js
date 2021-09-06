import React, { Component } from 'react';
//import $ from 'jquery';
import $ from "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class Header extends Component {  
    componentDidMount() {
        $(document).ready(function() { 
            $('a.nav-link').click(function() {
                var navbar_collapse = $(".navbar-collapse");
                if(navbar_collapse.hasClass('show')) {
                    $(".navbar-toggler").click();
                }
            });
        });
    }  
   
    render() {
        function navigateToSection(id) {
            let elm = document.getElementById(id);
            if(elm) {
                setTimeout(function () {
                    window.scrollTo(elm.offsetLeft,elm.offsetTop - 50);
                },2);
            }
        };

        var imageUrl = `${process.env.PUBLIC_URL}/images/logo.png`;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Navein</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link active" href="#" id="nav-home" onClick={() => navigateToSection('home')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="nav-about" onClick={() => navigateToSection('about')}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="nav-resume" onClick={() => navigateToSection('resume')}>Resume</a>
                            </li>
                           <li className="nav-item">
                                <a className="nav-link" href="#" id="nav-technology" onClick={() => navigateToSection('technology')}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="nav-volunteer"  onClick={() => navigateToSection('volunteer')}>Volunteer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="nav-certification" onClick={() => navigateToSection('certification')}>Certifications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="nav-contact" onClick={() => navigateToSection('contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }    
}

export default Header;