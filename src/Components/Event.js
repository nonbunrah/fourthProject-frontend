import React, {Component} from 'react';

class Event extends Component {
  render () {
    return (
      <div>
        <h1>Event</h1>
        <form>
          <label>
            Event Name: 
            <input type="text" name="name" placeholder="Event Name" />
          </label>
          <br />
          <br />
          <label>
            Event Description:
            <input type="text" name="description" placeholder="Event Description" />
          </label>
          <br />
          <br />
          <label>
            Location:
            <input type="text" name="location" placeholder="Location" />
          </label>
          <br />
          <br />
          <label>
            Time:
            <input type="text" name="time" placeholder="Time" />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Event;