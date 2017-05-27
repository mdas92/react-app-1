var BookingArea = React.createClass({
	getInitialState(){
		return {message: 'default'};
	},
	handleAdd(e){
		e.preventDefault();
		console.log("handling..");
		//return;
		//this.setState({message: "Handled submit."})
		this.sendBookingData();
	},
	sendBookingData: function () {
		  // Fetch form values.
		  var formData = {
		    name: ReactDOM.findDOMNode(this.refs.name).value,
		    phone: ReactDOM.findDOMNode(this.refs.phone).value,
		    dob: ReactDOM.findDOMNode(this.refs.dob).value,
		   	amount: ReactDOM.findDOMNode(this.refs.amount).value
		  };
		  console.log("Form data: ");
		  console.log(formData);
		  // Send the form data.
		  var xmlhttp = new XMLHttpRequest();
		  var _this = this;
		  xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState === 4) {
		      console.log("Response text:"+xmlhttp.responseText);
		      var response = JSON.parse(xmlhttp.responseText);
		      if (xmlhttp.status === 200 && response.status === 'OK') {
		        _this.setState({ message: 'Submitted.' });
		        console.log('Submitted');
		      }
		      else {
		        _this.setState({ message: 'Sorry, there has been an error.' });
		      }
		    }
		  };
		  xmlhttp.open('POST', 'add', true);
		  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		  xmlhttp.send(this.requestBuildQueryString(formData));
		},
	requestBuildQueryString: function (params) {
		    var queryString = [];
		    for(var property in params)
		      if (params.hasOwnProperty(property)) {
		        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
		      }
		    return queryString.join('&');
		  },
	
	render(){
	if(this.props.type == 'Add Booking')
		var bookingArea = (
			<form id="addbookingform" className="col-flex-container" onSubmit={this.handleAdd}>
				<div className="flex-item">
					<label >Name:</label>
					<input type="text" className="form-control" ref="name"/><br/>
				</div>
				<div className="flex-item">
					<label >Phone No.:</label>
					<input type="tel" className="form-control" ref="phone"/><br/>
				</div>
				<div className="flex-item">
					<label >Date of Birth:</label>
					<input type="date" className="form-control" ref="dob"/><br/>
				</div>
				<div className="flex-item">
					<label >Amount(in Rs.):</label>
					<input type="text" className="form-control" ref="amount"/><br/>
				</div>
				<div className="flex-item">
					<button type="submit" form="addbookingform" className="btn btn-success btn-lg" value="Submit" >
					Submit</button>
				</div>
				<br/><br/>
				<div>{this.state.message}</div>
			</form>
		);
	
	return <div className="flex-container">{bookingArea}</div>
	}
});