import React, { Component } from 'react'
import EventInfo from '../Components/EventInfo.js';

class EventInfoContainer extends Component {
  render() {
    let info = this.props.data.map((eventInfo, index) => {
      return <EventInfo 
        key={index}
        rowid={eventInfo.rowid}
        eventName={eventInfo.eventName}
        eventDescription={eventInfo.eventDescription}
        location={eventInfo.location}
        time={eventInfo.time}
        month={eventInfo.month}
        day={eventInfo.day}
        year={eventInfo.year}
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
