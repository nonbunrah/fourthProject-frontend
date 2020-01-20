import React, { Component } from 'react'

class EventInfo extends Component {

  handleDelete = () => {
    console.log(this.props.rowid)
    fetch(`http://localhost:9000/api/events/${this.props.rowid}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status === 200) {
        console.log("delete successful")
        true.location.reload(true);
        //this.props.history.push('/api/events')
      } else 
        console.log("delete unsuccessful")
    })
    .catch(error => console.log(error))
    alert('deleted')
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <b><u>{this.props.eventName}</u></b>
            <button 
              type="edit" 
              value="edit" 
            >Edit</button>
            <button 
              className="deleteButton"
              onClick={this.handleDelete}
              type="delete" 
              value="delete" 
            >Delete</button>
          </li>
            <ul> 
              <li><b>Description:</b> {this.props.eventDescription}</li> 
              <li><b>Location:</b> {this.props.location}</li>    
              <li><b>Start Time:</b> {this.props.time}</li>
            </ul>
        </ul>
      </div>
    )
  }
}

export default EventInfo
