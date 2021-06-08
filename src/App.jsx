// @ts-ignore
import React from 'react'
import { useState } from 'react'
import { Slider } from './components/Slider.jsx'
import { ColorSwatch } from './components/ColorSwatch'
import { Hsla } from './components/hsla'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))

  const newBackgroundColor = `hsl(${hue},${saturation}%,${light}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  function handleHueChange(event) {
    setHue(event.target.value)
  }

  function handleSatChange(event) {
    setSaturation(event.target.value)
  }

  function handleLightChange(event) {
    setLight(event.target.value)
  }

  function randomColor() {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <h1>Functional Color Picker!</h1>
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
            value={hue}
            max="360"
            onChange={handleHueChange}
          />
          <label>S</label>
          <Slider
            type="range"
            id="s"
            className="Saturation"
            value={saturation}
            max="100"
            onChange={handleSatChange}
          />
          <label>L</label>
          <Slider
            type="range"
            id="l"
            className="Light"
            value={light}
            max="100"
            onChange={handleLightChange}
          />
        </div>
      </div>
      <button className="RandomColor" onClick={randomColor}>
        Random Color!
      </button>
    </>
  )
}
