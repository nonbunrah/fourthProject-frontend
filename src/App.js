import React, {Component} from 'react';
import './App.css';
import CalendarContainer from './Containers/CalendarContainer.js'
import EventContainer from './Containers/EventContainer.js'
import EventInfoContainer from './Containers/EventInfoContainer';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header.js';
import EditForm from './Components/EditForm.js';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Calendar App</h1>
        {/* <EditForm /> */}
          {/* <Switch>
            <Route path='/EditForm' component={EditForm} />
          </Switch> */}
          <CalendarContainer />
          <EventContainer />
        <h1>Event Information</h1>
          <EventInfoContainer />
          <br />
        <footer> &copy; RJ Bamrah</footer>
      </div>
    )
  }
}

// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//         <h1>Third Project</h1>
//         <Header />
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/Names' component={NamesContainer} />
//             <Route path='/Form' component={Form} />
//             <Route path='/EditForm' component={EditForm} />
//             <Route path='/:id' component={Info} />
//           </Switch>
//       </div>
//     )
//   }
// }

export default App;
