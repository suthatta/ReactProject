import React, { Component } from 'react'
//import { Calender } from '../Calender/Calender'
import Title from '../Weather/Title'
import Form from '../Weather/Form'
import Weather from '../Weather/Weather'
const API_KEY = '7a3263c0e1f442cb960315364ff41996'
export default class Home extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data)
    if (city && country) {
      this.setState = ({
        temperature: data.main.temp,
        city: data.className,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }

  }

  render() {
    return (<div className="home-content">
      <h3>Hi there!</h3>
      <h4>Home is here</h4>
      <h4>Please call me home!</h4>
      <h4>Please come back home! :O </h4>
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    </div>);
  }

}
