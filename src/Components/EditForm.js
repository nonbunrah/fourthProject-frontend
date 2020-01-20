import React, { Component } from 'react'

class EditForm extends Component {

  componentDidMount = () => {
    console.log(this.props.location.state)
    if(this.props.location.state !== undefined) {
      document.getElementById('name').value=this.props.location.state.eventName
      document.getElementById('description').value=this.props.location.state.eventDescription
      document.getElementById('location').defaultValue=this.props.location.state.location
      document.getElementById('time').value=this.props.location.state.time

      this.setState({
        eventName: this.props.location.state.eventName,
        eventDescription: this.props.location.state.eventDescription,
        location: this.props.location.state.location,
        time: this.props.location.state.time
      })
    }
  }

  render () {
    return (
      <div>
        <h1>Event</h1>
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
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default EditForm
