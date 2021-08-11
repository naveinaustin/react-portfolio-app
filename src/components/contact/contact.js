import React, { Component } from 'react';
import $ from 'jquery';
import { store } from 'react-notifications-component';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };

        this.sendDetails = this.sendDetails.bind(this);
    };

    addNotification(title, message, type) {
       store.addNotification({
          title: title,
          message: message,
          type: type,
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
     };

     addSuccessNotification(message) {
      this.addNotification("Success!", message, "success");
     };

    addErrorNotification(message) {
      this.addNotification("Error!", message, "danger");
    }

    sendDetails(e) {
        e.preventDefault();
        if(document.getElementById("name").value==="") {
            this.addErrorNotification("Name is a required field");
            return;
        }
        if(document.getElementById("email").value==="") {
            this.addErrorNotification("Email is a required field");
            return;
        }
        var data = $("#contactForm").serializeArray();
        data.push({name:"date_time", value: new Date()});

        var self = this;
        $.ajax({
            url:'https://api.apispreadsheets.com/data/15682/',
            type:'post',
            data:data
        })
        .done(function(){
          self.addSuccessNotification("Your data has been submitted. We will get back to you.");
          self.clearForm();
        })
        .fail(function() {
           self.addErrorNotification("Your data was not submitted. Please try again later.");
        });
    }

    clearForm() {
        $('#name').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#message').val('');
    }

    render() {
        //If the value changes due to an ajax call then the following variable assignment cannot be used. You need to use this.state.
        var title = "";
        var address1 = "";
        var address2 = "";
        var address3 = "";
        var address4 = "";
        var phone = "";
        var email = "";
        if(this.props.data){
          title = this.props.data.title;
          address1 = this.props.data.address1;
          address2 = this.props.data.address2;
          address3 = this.props.data.address3;
          address4 = this.props.data.address4;
          phone = this.props.data.phone;
          email = this.props.data.email;
        }

        return (
            <div className="section contact-section" id="contact">
               <div className="container">
                     <div className="row">
                        <div className="col-md-4 col-12">
                            <h3><span className="sub-title">{title}</span></h3>
                        </div>
                        <div className="col-md-8 col-12 sub-section">
                           Am I a good fit or would I be a valuable addition to your team/company? Is there a project that you would like me to work on?
                           Please do not hesitate to contact me.
                        </div>
                     </div>  
                </div>
                <div className="container contact-me">
                    <div className="row">
                        <div className="offset-md-1 col-md-7 col-12 form">
                            <form id="contactForm" action="">
                                <div className="mb-3 row">
                                  <label htmlFor="name">Name <span className="required">*</span></label>
                                  <div>
                                    <input type="text" id="name" name="name" size="35" className="form-control"/>
                                  </div>
                                </div>
                                <div className="mb-3 row">
                                  <label htmlFor="email">Email <span className="required">*</span></label>
                                  <div>
                                    <input type="text" id="email" name="email" size="35" className="form-control"/>
                                  </div>
                                </div>
                                <div className="mb-3 row">
                                  <label htmlFor="subject">Subject</label>
                                  <div>
                                    <input type="text" id="subject" name="subject" size="35" className="form-control"/>
                                  </div>
                                </div>
                                 <div className="mb-3 row">
                                  <label htmlFor="message" className="col-12 col-md-2 col-form-label">Message</label>
                                  <div>
                                    <textarea cols="35" rows="8" id="message" name="message" className="form-control"/>
                                  </div>
                                </div>
                                <div className="mb-3 row btn-section">
                                  <div className="col-md-3 col-12">
                                    <button id="submit" name="submit" className="btn" onClick={this.sendDetails}>Submit</button>
                                  </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-12 contact mb-3">
                          <div className="row">
                            <div className="col-1">
                              <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="col-10">
                              <div>
                                {address1}
                              </div>
                              <div>
                                {address2}
                              </div>
                              <div>
                                {address3}
                              </div>
                              <div>
                                {address4}
                              </div>
                            </div>
                          </div>
                          <div className="row ">
                            <div className="col-1">
                             <i className="fa fa-phone"></i>
                            </div>
                            <div className="col-10">
                             <a href="tel:+919845913875">{phone}</a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-1">
                             <i className="fa fa-envelope"></i>
                            </div>
                            <div className="col-10">
                             {email}
                            </div>
                          </div>
                        </div>
                    </div>  
                </div>
            </div>

        );
    }    
}

export default Contact;