import React, { Component } from 'react'
import EventInfo from '../Components/EventInfo.js';

class EventInfoContainer extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents = () => {
    fetch('http://localhost:9000/api/events')
      .then((response) => response.json())
      .then(data => this.setState({
        data: data
      }))
      .catch(error => console.log(error))
  }

  render() {
    let info = this.state.data.map((eventInfo) => {
      return <EventInfo 
        rowid={eventInfo.rowid}
        eventName={eventInfo.eventName}
        eventDescription={eventInfo.eventDescription}
        location={eventInfo.location}
        time={eventInfo.time}
        />
    })
    return (
      <div>
        {info}
      </div>
    )
  }
}

export default EventInfoContainer
