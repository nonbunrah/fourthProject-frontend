import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class EventInfo extends Component {
  
  // DELETE 
  handleDelete = () => {
    console.log(this.props.event.rowid)
    fetch(`http://localhost:9000/api/events/${this.props.event.rowid}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status === 200) {
        console.log("delete successful")
        true.location.reload(true);
        //this.props.event.history.push('/api/events')
      } else 
        console.log("delete unsuccessful")
    })
    .catch(error => console.log(error))
    alert('Deleted Event')
    //refreshes page after delete has been done
    window.location.reload(true)
  }

  render() {
    return (
      <div>
        <ul className="biggerList">
          <li>
            <b><u>{this.props.event.eventName}</u></b>
            <Link to={`/EditForm/${this.props.event.rowid}`}>
              <button>
                Edit
              </button>
            </Link>
            <button 
              className="deleteButton"
              onClick={this.handleDelete}
              type="delete" 
              value="delete" 
            >Delete</button>
          </li>
            <ul> 
              <li><b>Description:</b> {this.props.event.eventDescription}</li> 
              <li><b>Location:</b> {this.props.event.location}</li>    
              <li><b>Start Time:</b> {this.props.event.time}</li>
              <li><b>Date:</b> {this.props.event.month}/{this.props.event.day}/{this.props.event.year}</li>
            </ul>
        </ul>
      </div>
    )
  }
}

export default EventInfo
