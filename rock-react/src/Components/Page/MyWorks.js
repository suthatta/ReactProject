import React, { Component } from 'react'
import './MyWorks.css'

class MyWorks extends Component {
  worksItems = ['List', 'Hooks', 'Express']

  render() {
    return <div className="myWorks-container">
      < h2 > React Fetching API</h2 >
      <div className="myWorks-flex">
        <div className="myWorks-lists">
          <ul><li>List</li>
            <li>Hooks</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="myWorks-contents">DIv2</div>
      </div>
    </div >
  }

}

export default MyWorks;