import React, { Component } from 'react';
import logo from './logo@3x.png';
import twitterIcon from './twitter_icon.svg'
import linkedInIcon from './linkedin_icon.svg'
import emailIcon from './email_icon.png'
import './App.css';

class App extends Component {

  renderUnderConstruction() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            amandaroaf.me is under construction.
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

        <header className="intro">
          <p>Hey, I’m Amanda!</p>
          <p>
            I am a user experience designer living in Richmond, VA.  I work in web, mobile and service design. My career path has taken me from working as a nonprofit leader to applying my skills to the world of technology. I believe that good experiences come from commitment to empathy, data and design.
          </p>
        </header>

        <header className="section-header">
          <p>My Projects</p>
        </header>

        <section class="content-row">
          <ul class="work" id="work">
            <li><a href="/project-the-studio.html" title="Project - The Studio"><img src="img/work-the-studio.jpg" width="500"></img></a></li>
            <li><a href="/project-triodos.html" title="Project - Triodos"><img src="img/work-triodos.jpg" width="500"></img></a></li>
            <li><a href="/project-gousto.html" title="Project - Gousto"><img src="img/work-gousto.jpg" width="500"></img></a></li>
            <li><a href="/project-brilliant-project.html" title="Project - Brilliant Project"><img src="img/work-brilliant-project.jpg" width="500"></img></a></li>
            <li><a href="/project-coop-at-home.html" title="Project - coop@home"><img src="img/work-coop.jpg" width="500"></img></a></li>
            <li><a href="/project-chat-app.html" title="Chat App"><img src="img/work-metalab.jpg" width="500"></img></a></li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 708" preserveAspectRatio="none"><path fill="#ac129b" d="M0.5,80.5l2400-80v628l-2400,80V80.5Z"></path></svg>
        </section>
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
