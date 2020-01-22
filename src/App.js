import React, {Component} from 'react';
import './App.css';
import CalendarContainer from './Containers/CalendarContainer.js'
import EventContainer from './Containers/EventContainer.js'
import EventInfoContainer from './Containers/EventInfoContainer';
import EditForm from './Components/EditForm.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
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

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/EditForm/:id' render={(props) => {
              let editedEvent = this.state.data.find(function(ele) {
                return ele.rowid === parseInt(props.match.params.id)
              })
              console.log(editedEvent);
              // filter out the matching event from this.state.data
              return (
                this.state.data.length
                ? <EditForm {...props} event={editedEvent} getEvents={this.getEvents}/>
                : "Loading..."
              )
              // if i take out the empty object, says cannot read 'eventName' of undefined in EditForm componentDidMount
              // if we find an event, return the component, if not error out or do something else 
            }} />
            <Route exact path='/' render={(props) => (
              <div>
                <h1>Calendar App</h1>
                <CalendarContainer />
                  <EventContainer />
                <h1>Event Information</h1>
                  <EventInfoContainer data={this.state.data} />
              </div> 
            )} />
          </Switch>
        </BrowserRouter>
          <br />
        <footer> &copy; RJ Bamrah</footer>
      </div>
    )
  }
}

export default App;
