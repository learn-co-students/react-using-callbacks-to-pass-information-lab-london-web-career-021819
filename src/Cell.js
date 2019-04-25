import React, { Component } from 'react';

export default class Cell extends Component {

  state = {
    color: this.props.color
  }

  changeColor = () => {
    this.setState({
      color: this.props.fukaColor
    })
  }

  render() {
    return (
      <div className="cell" onMouseMove={this.changeColor} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
