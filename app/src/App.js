import React, { Component } from 'react';
import logo from './logo@3x.png';
import twitterIcon from './twitter_icon.svg'
import linkedInIcon from './linkedin_icon.svg'
import emailIcon from './email_icon.png'
import './App.css';
import {observer} from 'mobx-react'
import Projects from './components/projects/Projects'
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
                <a href="#linkedIn"><img src={linkedInIcon} alt="lnkdIn" /></a>
              </li>
              <li>
                <a href="#twitter"><img src={twitterIcon} alt="Tw" /></a>
              </li>
              <li>
                <a href="#mail"><img src={emailIcon} alt="Mail" /></a>
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

        <header className="section-header">
          <p>My Projects</p>
        </header>
        <Projects store={ this.props.store }></Projects>
        <header className="section-header">
          <p>Skills</p>
        </header>
      </div>
    )
  }
  render() {
    const devMode = window.location.href.search('development=true') > -1;
    console.log(window.location.href);
    if (devMode) {
      return this.renderFull();
    }
    return this.renderUnderConstruction();

  }
}

export default App;
