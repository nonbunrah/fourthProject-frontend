import React, { Component } from 'react'

state = {
  rowid: ""
}

class Form extends Component {
  render() {
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

export default Form
