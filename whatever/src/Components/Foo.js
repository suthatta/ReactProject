import React, { Component } from 'react'

export default class Foo extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    }
    this.changeToggle = this.changeToggle.bind(this)
  }
  changeToggle() {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle
    })
  }
  render() {
    const { toggle } = this.state;
    const greeting = toggle ? "Hello" : "GoodBye"
    return (
      <div onClick={this.changeToggle}>{greeting} {this.props.name}</div>
    )
  }
}