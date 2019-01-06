import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Project from './Project';
import * as serviceWorker from './serviceWorker';
import ApplicationStore from './stores/application';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const applicationStore = new ApplicationStore();
//
// function changeMessage() {
//   const timer = 2;
//   setTimeout(() => {
//     applicationStore.setState('underConstruction', 'is not under construction.')
//     setTimeout(() => {
//       applicationStore.setState('underConstruction', 'ooops');
//       setTimeout(() => {
//         applicationStore.setState('underConstruction', 'amandaroaf.me is under construction');
//         changeMessage();
//       }, timer * 1000);
//     }, timer * 1000);
//   }, timer * 1000);
// }
// changeMessage();




// ReactDOM.render(<App store={ applicationStore }/>, document.getElementById('root'));
ReactDOM.render(
  <Router>
  <div>
    <Switch>
    <Route path="/projects/:slug" component={(props) => {
        return (<Project project={ props.match.params.slug } store={ applicationStore }/>)
      }} />
      <Route path="" component={() => <App store={ applicationStore }/>} />
    </Switch>
  </div>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



const fetchAllData = () => {
  fetch('https://amandaroaf.me/wp-json/wp/v2/application_state')
  .then((r) => {
    console.log(r);
    return r.json()
  }).then((body) => {
    if (body.length > 0) {
      const appState = body[0]
      if (appState.acf && appState.acf.under_construction) {
        applicationStore.setState('underConstruction', appState.acf.under_construction);
      }
      if (appState.acf && appState.acf.description) {
        applicationStore.setState('description', appState.acf.description);
      }
    }
  })

  fetch('https://amandaroaf.me/wp-json/wp/v2/projects')
  .then(r => r.json())
  .then((projects) => {
    const projects_html = {}
    projects = projects
    .filter((project) => {
      return project.status === "publish";
    })
    .map((project) => {
      projects_html[project.slug] = {
        project_page: project.acf.project_page || '',
      }
      return {...project.acf, slug: project.slug};
    });
    console.log(projects);
    applicationStore.setState('projects', projects);
    console.log(projects_html);
    applicationStore.setState('projects_html', projects_html);
  })

  fetch('https://amandaroaf.me/wp-json/wp/v2/skills')
  .then(r => r.json())
  .then((skills) => {
    skills = skills
    .filter((skill) => {
      return skill.status === "publish";
    })
    .map((skill) => {
      return {...skill.acf, slug: skill.slug};
    });
    console.log(skills);
    applicationStore.setState('skills', skills);
  })


  fetch('https://amandaroaf.me/wp-json/wp/v2/experiences')
  .then(r => r.json())
  .then((experiences) => {
    experiences = experiences
    .filter((experience) => {
      return experience.status === "publish";
    })
    .map((experience) => {
      return {...experience.acf, slug: experience.slug};
    });
    console.log(experiences);
    applicationStore.setState('experiences', experiences);
  })


}

fetchAllData();
setInterval(fetchAllData, 10000);