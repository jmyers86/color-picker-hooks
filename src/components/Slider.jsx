import React from 'react'

export class Slider extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        className={this.props.className}
        value={this.props.value}
        max={this.props.max}
        onChange={this.props.onChange}
      />
    )
  }
}
