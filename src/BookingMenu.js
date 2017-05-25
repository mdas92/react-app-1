var BookingMenu = React.createClass({

	handleClick(e){
		var selected = e.currentTarget.id;
		this.props.setType(selected);
	},
	render(){
		return (
		<div className="flex-container">
			<button id="Add Booking" type="button" className="btn btn-warning flex-item" onClick={this.handleClick}>Add New Booking</button>
			<button id="List All Bookings" type="button" className="btn btn-primary flex-item" onClick={this.handleClick}>List all bookings</button>
			<button id="Search" type="button" className="btn btn-danger flex-item" onClick={this.handleClick}>Generate Report</button>
		</div>	
			);
	}
});