import React, { Component } from 'react';

export default class Api extends Component {
  constructor() {
    super()
    this.state = {
      items: null,
      isLoading: true,
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => {
        this.setState(
          {
            isLoading: false,
            items: json,
          })
      })
  }
  render() {
    const { isLoading, items } = this.state;
    console.log(items)

    if (isLoading) {
      return <div>Loading....</div>
    } else if (items && items.results) {
      return (
        <div><h1>Yes</h1>
          Picture:{items.results.picture.large}

        </div>
      )
    }
    // } else {
    //   return (<div>{items.data.picture.large}</div>)
    // }
    return ''
  }
}