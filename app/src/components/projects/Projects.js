import React, { Component } from 'react';
import {observer} from 'mobx-react'

@observer
class Projects extends Component {

  renderProjectCards() {
    const store = this.props.store;
    const sort = (a,b) => {
      return parseInt(a.sort_order) - parseInt(b.sort_order);
    }
    const sorted = store.projects.sort(sort);
    const log = (p) => {
      console.log(p.card_sub_title, p.sort_order);
    }
    store.projects.forEach(log);
    sorted.forEach(log);
    console.log(store.projects, sorted);
    return sorted.map((project) => {
        return (<div className="cell">
          <div className="card">
            <div className="card-image">
              <img className="contain-image" src={project.card_image} alt="Needs Image">
              </img>
            </div>
            <div className="card-div">
              <p>{project.card_sub_title}</p>
            </div>
          </div>
        </div>
        )
    });
  }

  render() {
    return (
      <section class="content-row">
        <div className="projects">
        {this.renderProjectCards()}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 708" preserveAspectRatio="none"><path fill="#ac129b" d="M0.5,80.5l2400-80v628l-2400,80V80.5Z"></path></svg>
      </section>
    )
  }
}

export default Projects;
