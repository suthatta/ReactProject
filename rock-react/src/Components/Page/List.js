import React, { Component } from 'react'
import './List.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://portfolio-d23d4.firebaseio.com/projects.json')
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
          <h3>List</h3>
          <ul className="Project-Lists">
            {items.map(item => (
              <li className="Projects-list" key={item.id}>
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
export default List;