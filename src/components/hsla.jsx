import React from 'react'

export class Hsla extends React.Component {
  render() {
    return <input value={this.props.color} readOnly />
  }
}
