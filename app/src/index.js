import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApplicationStore from './stores/application';

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

ReactDOM.render(<App store={ applicationStore }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

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
.then((body) => {
  body.forEach(() => {
    console.log(project.acf);
  })
})
