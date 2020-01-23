import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={`/Calendar`}>
            Click here
          </Link> to access the calendar!
        </h1>         
      </div>
    )
  }
}

export default Home
