import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApplicationStore from './stores/application';

const applicationStore = new ApplicationStore();

setTimeout(() => {
  applicationStore.setState('underConstruction', 'is not under construction.')
  setTimeout(() => {
    applicationStore.setState('underConstruction', 'ooops');
  }, 3 * 1000)
}, 3 * 1000)

ReactDOM.render(<App store={ applicationStore }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

fetch('https://test.miketheprogrammer.com/wp-json/wp/v2/acme_product')
.then((r) => {
  console.log(r);
  return r.json()
}).then((body) => {
  console.log(body);
})
