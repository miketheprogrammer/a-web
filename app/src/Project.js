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

@observer
class Project extends Component {

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
    console.log('wtf',this.props.store.projects_html, this.props);
    return (
      <div>
        <section className="wierd-page-problem-fix">
          <nav className="nav nav-primary">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
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
        <div class="page">
          <div class="content-row unsafe-block">
            <section class="top-spacing">&nbsp;</section>
            <div dangerouslySetInnerHTML={{__html: this.props.store.projects_html[this.props.project] ? this.props.store.projects_html[this.props.project].project_page : ''}}/>
          </div>
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

export default Project;
