import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    };

    render() {
        //TODO: run grunt/gulp to minimize images
        //If the value changes due to an ajax call then the following variable assignment cannot be used. You need to use this.state.
        var title="";
        var carouselItemList;
        if(this.props.data){
            title = this.props.data.title;
            carouselItemList=this.props.data.carousel.map(function(item, index) {
                    var imgUrl = `${process.env.PUBLIC_URL}` + item.image;
                    return (
                        <Carousel.Item key={index}>
                            <img className="w-50" 
                            src={imgUrl} alt={item.title} 
                            />
                        </Carousel.Item>
                    );
                });
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
                                To know more about TAC2021 <a href="https://technicalagility.institute/tac2021/" target="_blank" rel="noreferrer">click here</a>
                            </div>
                        </div>
                     </div>
                    
                </div>
                <div className="container carousel-section">
                    <div className="row">
                        <Carousel variant="dark" interval={3000}>
                          {carouselItemList}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Volunteer;