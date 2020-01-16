import React, {Component} from 'react';
import './App.css';
import CalendarContainer from './Containers/CalendarContainer.js'
import EventContainer from './Containers/EventContainer.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <CalendarContainer />
        <EventContainer />
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
