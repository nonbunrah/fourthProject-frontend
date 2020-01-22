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
      eventName: this.props.event.eventName || "",
      eventDescription: this.props.event.eventDescription || "",
      location: this.props.event.location || "",
      time: this.props.event.time || ""
    })
  }
  // if componentDidUpdate is commented out, state is only changed one letter at a time
  // componentDidUpdate = (prevProps) => {
  //   if (this.props.event !== prevProps.event) {
  //     this.setState({
  //       eventName: this.props.event.eventName || "",
  //       eventDescription: this.props.event.eventDescription || "",
  //       location: this.props.event.location || "",
  //       time: this.props.event.time || ""
  //     })
  //   }
  // }

  // need to fix this so that update event doesn't stay stagnant
  // UPDATE: component is unmounting... when i refresh page, the editform/:id becomes stupid
  // UPDATE fixed that via componentDidUpdate

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.props.event.eventName)
    // console.log(event.target)
    // console.log(this.props.event.rowid)

    fetch(`http://localhost:9000/api/events/${this.props.event.rowid}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        eventName: this.state.eventName,
        eventDescription: this.state.eventDescription,
        location: this.state.location,
        time: this.state.time
      })
    })
     .then(()=> this.props.getEvents())
     .then(()=> this.props.history.push('/'))

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
