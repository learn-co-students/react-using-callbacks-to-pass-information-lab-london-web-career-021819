import React, { Component } from "react";

export default class Cell extends Component {
  // initialze with color equal to
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
      // initial (background color is passed as a prop from Matrix in the genRow function - this never changes)
    };
  }

  // setColor invokes the newColor function in Matrix
  // it can do this because newColor function was passed (set) as a prop of Cell
  setColor = () => {
    const color = this.props.newColor();
    // get the color currently selected (stored in Matrix state)
    // set the state of Cell with that value
    this.setState({
      color
    });
  };

  render() {
    return (
      // when the cell is clicked call setColor
      <div
        onClick={this.setColor}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
