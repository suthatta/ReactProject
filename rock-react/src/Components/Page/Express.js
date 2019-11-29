import React, { Component } from 'react'

class Express extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('/api/express')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>
    } else {
      return (
        <div className="wrapper">
          <h3>Express</h3>
          <ul>
            {items.data.map(item => (
              <li key={item.id}>
                Name :{item.name}
                <br></br>
                Description :{item.des}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}
export default Express;