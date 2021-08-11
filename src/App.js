//import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Resume from './components/resume/resume';
import Technology from './components/technology/technology';
import Certification from './components/certification/certification';
import Volunteer from './components/volunteer/volunteer';
import Contact from './components/contact/contact';
import React, { Component } from 'react';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

/*
TODO: Add a quote using blockquote 2.09
*/

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resumeData: { }
    };
  };


   getResumeData(){
    $.ajax({
      url:`${process.env.PUBLIC_URL}/resume-data.json`,
      dataType:'json',
      cache: false,
      success: function(data) {
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <ReactNotification />
        <Header />
        <div className="">
          <Home data={this.state.resumeData.home}/>
          <About data={this.state.resumeData.about}/>
          <Resume data={this.state.resumeData.resume}/>
          <Technology data={this.state.resumeData.technology} />
          <Volunteer data={this.state.resumeData.volunteer}/>
          <Certification data={this.state.resumeData.certification} />
          <Contact data={this.state.resumeData.contact} />
          <Footer data={this.state.resumeData.footer} />
        </div>
      </div>
    );
  }
}

export default App;
