import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div><br />
        <h1>Welcome to the Full Stack Calendar Scheduling Application!</h1>
        <h1>
          <Link to={`/Calendar`}>Click here</Link> to access the calendar!
        </h1>         
      </div>
    )
  }
}

export default Home
