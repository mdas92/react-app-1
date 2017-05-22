import React, { Component } from 'react';
import '../css/App.css';

class Login extends Component {
render(){
	return (
		<div id="login" className="text-center ">
			<form id="loginform" className="col-sm-4 col-sm-offset-4">
				<div className="form-group form-group-lg">
					  <label htmlFor="usr">User ID:</label>
					  <input type="text" className="form-control input-lg" id="usr"/><br/>
					</div>
				<div className="form-group form-group-lg">
					  <label htmlFor="pwd">Password:</label>
					  <input type="password" className="form-control input-lg" id="pwd"/><br/>
					<button type="submit" form="loginform" className="btn btn-success btn-lg" value="Submit">Submit</button>
				</div>
			</form>
		</div>
		);
	}
};
export default Login;
