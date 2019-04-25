import React, { Component } from "react";

export default class ColorSelector extends Component {
  // this component needs a way to fire the Matrix handleClick
  makeColorSwatches = () =>
    [
      "#F00",
      "#F80",
      "#FF0",
      "#0F0",
      "#00F",
      "#508",
      "#90D",
      "#FFF",
      "#000",
      "#13e212"
    ].map((str, idx) => {
      const setColorSelector = () => this.props.handleClickPassedFromMatrix(str);
      return (
        <div
          key={idx}
          className="color-swatch"
          style={{ backgroundColor: str }}
          // added this event listener
          onClick={setColorSelector}
        />
      );
    });

  render() {
    return <div id="colorSelector">{this.makeColorSwatches()}</div>;
  }
}
