import React, { Component } from 'react';
import moment from 'moment';
import { DatetimePicker } from './rc-datetime-picker';

export class Calender extends Component {
  constructor() {
    super();
    this.state = {
      moment: moment()
    }
  }
  handleChange = (moment) => {
    this.setState({
      moment
    });
  }

  render() {
    return (
      <div>
        < DatetimePicker
          moment={this.state.moment}
          onChange={this.handleChange} />
      </div>)
  }
}
