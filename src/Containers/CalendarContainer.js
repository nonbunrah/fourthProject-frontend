import React, {Component} from 'react';
import moment from 'moment';
import Calendar from '../Components/Calendar.js';

class CalendarContainer extends Component {

	state = {
		dateContext: moment(),
		today: moment(),
		showMonthPopup: false,
		showYearPopup: false
	};

	// previousMonth = () => {
	// 	this.setState({
	// 		dateContext: //moment.js for 1 month ago
	// 	})
	// }

	//functions to pass down into calendar as props

	render () {
		return (
			<Calendar 
				nextMonth = {this.nextMonth}
				previousMonth = {this.previousMonth}
				today={this.state.today } 
				dateContext={this.state.dateContext}/>
		)
	}
}

export default CalendarContainer;