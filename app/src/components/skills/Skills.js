import React, { Component } from 'react';
import {observer} from 'mobx-react'

@observer
class Skills extends Component {

  renderSkillCards() {
    const store = this.props.store;
    const sort = (a,b) => {
      return parseInt(a.sort_order) - parseInt(b.sort_order);
    }
    const sorted = store.skills.sort(sort);
    const log = (p) => {
      console.log(p.card_sub_title, p.sort_order);
    }
    store.skills.forEach(log);
    sorted.forEach(log);
    console.log(store.skills, sorted);
    return sorted.map((skill) => {
        return (
        <div className="skill-box">
          <div className="skill-title">
            <p>{skill.skill_title}</p>
          </div>
          <div className="skill-text">
            <p>{skill.skill_text}</p>
          </div>
        </div>
        )
    });
  }

  render() {
    return (
      <section class="content-row">
        <div className="skills">
        
        {this.renderSkillCards()}
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 708" preserveAspectRatio="none"><path fill="#127bbc" d="M0.5,80.5l2400-80v628l-2400,80V80.5Z"></path></svg> */}
      </section>
    )
  }
}

export default Skills;
