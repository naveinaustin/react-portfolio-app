import React, { Component } from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    };

    /*componentDidMount(){
        $('.carousel').carousel({
          interval: 2000
        });
    }*/

    render() {
        //If the value changes due to an ajax call then the following variable assignment cannot be used. You need to use this.state.
        var title="";
        if(this.props.data){
           title = this.props.data.title;
        }

        return (
            <div className="section volunteer-section" id="volunteer">
                <div className="container">
                     <div className="row">
                        <div className="col-md-4 col-12">
                            <h3><span className="sub-title">{title}</span></h3>
                        </div>
                        <div className="col-md-8 col-12 sub-section">
                            <div>
                                I have been volunteering at the Technical Agility Conference(TAC) since its inception in 2018. TAC is world's first Technical Agility themed conference that his held annually at Bangalore, India.
                            </div>
                            <div>
                                To know more about TAC2021 <a href="https://technicalagility.institute/tac2021/" target="_blank">click here</a>
                            </div>
                        </div>
                     </div>
                    
                </div>
                <div className="container carousel-section">
                    <div className="row">
                        <Carousel variant="dark" interval={3000}>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/Navein_2021.png" alt="First slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/group.jpg" alt="First slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/ellucian1.jpeg" alt="Second slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/gift_Copy.jpeg" alt="Third slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/TAC2018_Certificate.png" alt="First slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/ellucian2.jpeg" alt="Second slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/present.jpeg" alt="First slide" 
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="w-50" 
                            src="./images/volunteer/TAC_2019_Voluteer.jpeg" alt="Second slide" 
                            />
                          </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Volunteer;

/*

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" style={{height: 10 + 'em', width: 10 + 'em'}} src="./images/cert/pmi-agile-certified-practitioner-pmi-acp.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" style={{height: 10 + 'em', width: 10 + 'em'}} src="./images/cert/badge-10712.png" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" style={{height: 10 + 'em', width: 10 + 'em'}} src="./images/cert/seal-cspsm.png" alt="Third slide" />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
*/