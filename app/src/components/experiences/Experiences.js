import React, { Component } from 'react';
import {observer} from 'mobx-react'

@observer
class Experiences extends Component {

  renderExperiences() {
    const store = this.props.store;
    const sort = (a,b) => {
      return parseInt(a.sort_order) - parseInt(b.sort_order);
    }
    const sorted = store.experiences.sort(sort);
    const log = (p) => {
      console.log(p.card_sub_title, p.sort_order);
    }
    store.experiences.forEach(log);
    sorted.forEach(log);
    console.log(store.experiences, sorted);
    return sorted.map((experience) => {
        return (
        <div className="experience-box">
          <span className="experience-title">
            <p>{experience.experience_title}:&nbsp;
            <span className="experience-text">
            {experience.experience_text}
            </span>
            </p>
          </span>
        </div>
        )
    });
  }

  render() {
    return (
      <section class="content-row">
        <div className="experiences">
        
        {this.renderExperiences()}
        </div>
      </section>
    )
  }
}

export default Experiences;
