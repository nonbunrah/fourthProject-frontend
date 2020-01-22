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