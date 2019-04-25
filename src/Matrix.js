import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "#eee"
    };
  }

  // components change their own state
  
  handleClick = str => {
    this.setState({
      selectedColor: str
    });
  };

  // simply returns the selectedColor value currently stored in Matrix's state
  newColor = () => this.state.selectedColor

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell newColor={this.newColor} key={idx} color={val} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector handleClickPassedFromMatrix={this.handleClick} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
