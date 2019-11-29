import React from 'react'
export default class Form extends React.Component {
  render() {
    return (
      <div>Form Component
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="country..." />
          <button>Get Weather </button>
        </form>
      </div>

    )
  }
}