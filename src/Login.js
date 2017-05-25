
var Login = React.createClass({
	
	getInitialState() {
		return {
			user: '',
			password: '',
		};
  	},

	handleUserChange: function(e) {
	   this.setState({user: e.target.value});
	},
	handlePasswordChange: function(e) {
	   this.setState({password: e.target.value});
	},
  	handleSubmit(e) {
  		e.preventDefault();
    	this.props.changeDisplayWhat(this.state.user);
    	this.sendLoginData();
  	},
	sendLoginData: function () {
		  // Fetch form values.
		  var formData = {
		    username: ReactDOM.findDOMNode(this.refs.user).value,
		    password: ReactDOM.findDOMNode(this.refs.pwd).value,
		  
		  };
		  // Send the form data.
		  var xmlhttp = new XMLHttpRequest();
		  var _this = this;
		  xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
		      	var response = xmlhttp.responseText;
		      	console.log("Response: "+response);
		      	_this.props.changeLogin(response);
				    }
		  };
		  xmlhttp.open('POST', 'send', true);
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
	
	render: function(){
		return (
		<div>
			<form id="loginform" className="col-sm-4 col-sm-offset-4 form-group form-group-lg" action="" onSubmit={this.handleSubmit}>
				<div >
					  <label htmlFor="usr">User ID:</label>
					  <input type="text" className="form-control input-lg" ref="user" value={this.state.user} onChange={this.handleUserChange}/><br/>
				</div>
				<div >
					<label htmlFor="pwd">Password:</label>
					<input type="password" className="form-control input-lg" ref="pwd" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
					<button type="submit" form="loginform" className="btn btn-success btn-lg" value="Submit" onSubmit={this.handleSubmit}>
					Submit</button>
				</div>
			</form>
		</div>
		);
	}

});