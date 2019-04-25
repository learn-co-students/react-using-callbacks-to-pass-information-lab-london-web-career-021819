import React, { Component } from 'react';

export default class ColorSelector extends Component {
//setColor method is passed from matrix as a prop.
//onClick, the colorChanger method is called, which uses the str
//from the map and calls setColor with it.
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const colorChanger = () => this.props.setColor(str)
      return (<div
        key={idx}
        className="color-swatch"
        onClick={colorChanger}
        style={{backgroundColor: str}}
        />)
    })
  )

  render() {
    return (
      <div id="colorSelector" >
        {this.makeColorSwatches()}
      </div>
    )
  }

}
