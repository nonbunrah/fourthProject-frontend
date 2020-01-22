import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class EditForm extends Component {
  state = {
    eventName: "",
    eventDescription: "",
    location: "",
    time: ""
  }

  componentDidMount = () => {
    this.setState({
      eventName: this.props.event.eventName,
      eventDescription: this.props.event.eventDescription,
      location: this.props.event.location,
      time: this.props.event.time
    })
  }

  // fix this so that update event doesn't 
  handleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.setState({[event.target.rowid]:value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/api/events/${this.props.eventid}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        eventName: this.state.eventName,
        eventDescription: this.state.eventDescription,
        location: this.state.location,
        time: this.state.time
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Update Event</h1>
        <form className="editForm" onSubmit={this.handleSubmit}>
          <label>
            Event Name: 
            <input 
              id="eventName"
              type="text" 
              name="eventName" 
              placeholder="Event Name"
              onChange={this.handleChange}
              value={this.state.eventName}
            />
          </label>
          <br />
          <br />
          <label>
            Event Description:
            <input 
              id="inputDescription"
              type="text" 
              name="eventDescription" 
              placeholder="Event Description"
              onChange={this.handleChange}
              value={this.state.eventDescription}
            />
          </label>
          <br />
          <br />
          <label>
            Location:
            <input 
              id="location"
              type="text" 
              name="location" 
              placeholder="Location"
              onChange={this.handleChange} 
              value={this.state.location}
            />
          </label>
          <br />
          <br />
          <label>
            Time:
            <input 
              id="time"
              type="text" 
              name="time" 
              placeholder="Time"
              onChange={this.handleChange} 
              value={this.state.time}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="submit" />
          <Link to={'/'}>
            <button>back</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default EditForm;
