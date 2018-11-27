import React, { Component } from 'react';
import _ from 'lodash';
class LevelMeter extends Component {
  render() {
    const style = { fill: 'transparent', strokeWidth: '3', stroke: 'rgb(0,0,0)' };
    const innerStyle = { fill: 'orange' };

    var range = _.range(1, this.props.value + 1);

    let rects = range.map(r => ({
      x: 0,
      y: this.props.height - r * (this.props.height / this.props.max),
      width: this.props.width,
      height: this.props.height / this.props.max,
    }));
    console.table(rects);
    return (
      <svg height={this.props.height} width={this.props.width}>
        <rect height={this.props.height} width={this.props.width} style={style} />
        {rects.map(r => (
          <rect height={r.height} width={r.width} style={innerStyle} x={r.x} y={r.y} />
        ))}
      </svg>
    );
  }
}

LevelMeter.defaultProps = {
  height: 500,
  width: 200,
  max: 10,
  value: 3,
};

export default LevelMeter;
