import React, { Component } from 'react';
import logo from './logo@3x.png';
import twitterIcon from './twitter_icon.svg'
import linkedInIcon from './linkedin_icon.svg'
import emailIcon from './email_icon.png'
import './App.css';
import {observer} from 'mobx-react'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Experiences from './components/experiences/Experiences'
// import './css/acf.css'
// import './css/field-group.css'
// import './css/global.css'
// import './css/input.css'
@observer
class App extends Component {

  renderUnderConstruction() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.store.underConstruction}
            {/*amandaroaf.me is under construction.*/}
          </p>
        </header>
      </div>
    );
  }


  renderFull() {
    return (
      <div>
        <section className="wierd-page-problem-fix">
          <nav className="nav nav-primary">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <nav className="nav nav-secondary">
            <ul>
              <li>
                <a href={this.props.store.contact.linkedIn}><img src={linkedInIcon} alt="lnkdIn" /></a>
              </li>
              <li>
                <a href={this.props.store.contact.twitter}><img src={twitterIcon} alt="Tw" /></a>
              </li>
              <li>
                <a href={`mailto:`+this.props.store.contact.email}><img src={emailIcon} alt="Mail" /></a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="logo-box">
          <img src={logo} className="app-logo-2" alt="logo" />
        </section>

        <header className="intro" dangerouslySetInnerHTML={{__html: this.props.store.description}}>

          {/*<p>Hey, I’m Amanda!</p>
          <p>
            I am a user experience designer living in Richmond, VA.  I work in web, mobile and service design. My career path has taken me from working as a nonprofit leader to applying my skills to the world of technology. I believe that good experiences come from commitment to empathy, data and design.
          </p>*/}
        </header>
        <div className="svg-wrap">
          <header id="projects" className="section-header">
            <p>My Projects</p>
          </header>
          <Projects store={ this.props.store }></Projects>
          <header id="about" className="section-header">
            <p>Skills</p>
          </header>
          <Skills store={ this.props.store }></Skills>
          <header className="section-header-experiences">
            <p>Experiences</p>
          </header>
          <Experiences store={ this.props.store }></Experiences>
          <div className="resume-link-wrapper">
            <a className="resume-link" target="_blank" href={this.props.store.resume.pdf_link}>You can download my full resume here.</a>
          </div>
          <div id="contact" className="email-link-wrapper">
            <span className="email-text">Let’s connect! Email me at&nbsp;
              <a className="email-link" href={'mailto:'+this.props.store.contact.email}>{this.props.store.contact.email}</a>
            </span>
          </div>
          <svg 
              stroke-opacity="0"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 2400 1416" 
              preserveAspectRatio="none">
              <g>
                      <polygon points="2400,600 0,600 0,1416 2400,1200"
                      stroke="black" stroke-width="3" fill="#127bbc"></polygon>
              </g> 
              <g>
                  <polygon points="2400,0 0,170 0,600 2400,708"
                  stroke="black" stroke-width="3" fill="#ac129b"></polygon>
              </g> 
          </svg>
        </div>
      </div>
    )
  }
  render() {
    const devMode = window.location.href.search('development=true') > -1;
    console.log(window.location.href);
    // if (devMode) {
      // return this.renderFull();
    // }
    return this.renderFull();
    // return this.renderUnderConstruction();

  }
}

export default App;
