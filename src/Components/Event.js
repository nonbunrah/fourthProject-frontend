import React, {Component} from 'react';

const initialState = {
  eventName: "",
  eventDescription: "",
  location: "",
  time: ""
}

class Event extends Component {
  state = {
    eventName: "",
    eventDescription: "",
    location: "",
    time: "",
 }

  handleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.setState({[name]:value})
    console.log(value)
  }
  
  // POST request via form
  handleSubmit = (event) => {
    fetch('http://localhost:9000/api/events', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
      .then(response => this.setState(initialState))
      console.log("event submitted")
  };

  render () {
    return (
      <div className="eventForm">
        <h1>Add Event</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Event Name: 
            <input 
              type="text" 
              name="eventName" 
              placeholder="Event Name"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Event Description: 
            <input 
              type="text" 
              name="eventDescription" 
              placeholder="Event Description"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Location: 
            <input 
              type="text" 
              name="location" 
              placeholder="Location"
              onChange={this.handleChange} 
            />
          </label>
          <br />
          <br />
          <label>
            Time: 
            <input 
              type="text" 
              name="time" 
              placeholder="Time"
              onChange={this.handleChange} 
            />
          </label>
          <br />
          <br />
          <label>
            Month: 
            <input 
              type="int" 
              name="month" 
              placeholder="Month"
              onChange={this.handleChange} 
            />
          </label>
          <br />
          <br />
          <label>
            Day: 
            <input 
              type="int" 
              name="day" 
              placeholder="Day"
              onChange={this.handleChange} 
            />
          </label>
          <br />
          <br />
          <label>
            Year: 
            <input 
              type="int" 
              name="year" 
              placeholder="Year"
              onChange={this.handleChange} 
            />
          </label>
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
        <br />
        <br />
      </div>
    )
  }
}

export default Event;