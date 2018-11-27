import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let externalState = { value: 0 };

function valueChanged(v) {
  externalState.value = v;
  renderApp();
}

function renderApp() {
  ReactDOM.render(<App value={externalState.value} valueChanged={valueChanged} />, document.getElementById('root'));
}

renderApp();

//This turns module hot reloading on
// if (module.hot) {
//   module.hot.accept(['./App.js'], () => renderApp());
// }
