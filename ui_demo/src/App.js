import React, { Component } from 'react';
import LevelMeter from './levelMeterComponent';
import './App.css';

class App extends Component {
  handleChange = e => {
    let value = Number.parseInt(e.target.value);
    this.props.valueChanged(value);
  };

  render() {
    return (
      <div className="App">
        <input value={this.props.value} type="number" onChange={this.handleChange} />
        <LevelMeter max={10} value={this.props.value} />
      </div>
    );
  }
}

export default App;
