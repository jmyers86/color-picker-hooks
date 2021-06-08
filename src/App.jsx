import React from 'react'
import { Slider } from './components/Slider.jsx'
import { ColorSwatch } from './components/ColorSwatch'
import { Hsla } from './components/hsla'

export class App extends React.Component {
  state = {
    h: Math.floor(Math.random() * 360),
    s: Math.floor(Math.random() * 100),
    l: Math.floor(Math.random() * 100),
  }

  handleHueChange = (event) => {
    this.setState({ h: event.target.value })
  }

  handleSatChange = (event) => {
    this.setState({ s: event.target.value })
  }

  handleLightChange = (event) => {
    this.setState({ l: event.target.value })
  }

  randomColor = () => {
    this.setState({
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 100),
      l: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const newBackgroundColor = `hsl(${this.state.h},${this.state.s}%,${this.state.l}%)`
    const newStyle = { backgroundColor: newBackgroundColor }

    return (
      <>
        <h1>Classy Color Picker</h1>
        <div className="Picker">
          <div className="Color">
            <div className="ColorTitle">Color</div>
            <ColorSwatch style={newStyle}></ColorSwatch>
            <Hsla color={newBackgroundColor}></Hsla>
          </div>
          <div className="Sliders">
            <label> H</label>
            <Slider
              type="range"
              id="h"
              className="Hue"
              value={this.state.h}
              max="360"
              onChange={this.handleHueChange}
            />
            <label>S</label>
            <Slider
              type="range"
              id="s"
              className="Saturation"
              value={this.state.s}
              max="100"
              onChange={this.handleSatChange}
            />
            <label>L</label>
            <Slider
              type="range"
              id="l"
              className="Light"
              value={this.state.l}
              max="100"
              onChange={this.handleLightChange}
            />
          </div>
        </div>
        <button className="RandomColor" onClick={this.randomColor}>
          Random Color!
        </button>
      </>
    )
  }
}
