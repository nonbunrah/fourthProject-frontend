import React, {Component} from 'react';
import moment from 'moment';
import './Calendar.css'

class Calendar extends Component {

	state = {
		dateContext: this.props.dateContext
	};

	nextMonth = () => {
		this.setState({
			dateContext: this.state.dateContext.add(1, 'months')
		})
	}

	previousMonth = () => {
		this.setState({
			dateContext: this.state.dateContext.subtract(1, 'months')
		})
	}

	weekdays = moment.weekdays();
	weekdaysShort = moment.weekdaysShort();
	months = moment.months();

	year = () => {
		return this.props.dateContext.format("Y");
	}

	month = () => {
		return this.props.dateContext.format("MMMM");
	}

	daysInMonth = () => {
		return this.props.dateContext.daysInMonth();
	}

	currentDate = () => {
		return this.props.dateContext.get("date");
	}

	currentDay = () => {
		return this.props.dateContext.format("D");
	}

	firstDayOfMonth = () => {
		let dateContext = this.props.dateContext;
		let firstDay = moment(dateContext).startOf('month').format('d');
		return firstDay;
	}

	render () {
		let weekdays = this.weekdaysShort.map((day) => {
			return (
				<td key={day} className="week-day">{day}</td>
			)
		});

		let blanks = [];
		for (let i = 0; i < this.firstDayOfMonth(); i++) {
			blanks.push(<td className="emptySlot">
				{""}
			</td>
			);
		}

		console.log("blanks: ", blanks);

		let daysInMonth = [];
		for (let d = 1; d <= this.daysInMonth(); d++) {
			let className = (d == this.currentDay() ? "day current-day": "day");
			daysInMonth.push(
				<td key={d} className={className} >
					<span>
						{d}
					</span>
				</td>
			)
		}

		console.log("days:", daysInMonth);

		let totalSlots = [...blanks, ...daysInMonth];
		let rows = [];
		let cells = [];

		totalSlots.forEach((row, i) => {
			if(i % 7 !== 0) {
				cells.push(row);
			} else {
				let insertRow = cells.slice();
				rows.push(insertRow);
				cells = [];
				cells.push(row);
			} 
			if(i === totalSlots.length - 1) {
				let insertRow = cells.slice();
				rows.push(insertRow);
			}
		});

		let trElements = rows.map((d, i) => {
			return (
				<tr key={i*100}>
					{d}
				</tr>
			);
		});

		return (
			<div className = "calendar">
        <h1>Calendar</h1>
				<button onClick={this.previousMonth} className="previousMonth">Previous Month</button>
				<button onClick={this.nextMonth} className="nextMonth">Next Month</button>
				<h2>{this.props.dateContext.format('MMMM')} {this.props.dateContext.format('YYYY')}</h2>
				<table className="calendar">
					<thead>
						<tr className="cal=header">

						</tr>
					</thead>
					<tbody>
						<tr>
							{weekdays}
						</tr>
						{trElements}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Calendar;