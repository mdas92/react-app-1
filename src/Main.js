var Main = React.createClass({
	getInitialState: function() {
	    return {
	      displayWhat: '',
	      loginStatus: ''
	    };
	  },
	changeDisplayWhat(name){
		if(name == 'papia')
				name = 'Papia Das';
		this.setState({displayWhat: name }); 
	},
	changeLoginStatus(status){
		this.setState({loginStatus: status}); 
	},
	render(){
		if(this.state.loginStatus == 'success')
			return <Homepage username={this.state.displayWhat}/>;

		else if(this.state.loginStatus == 'failed')
			return (
				<div>	
					<Banner/>
					<div className="text-danger errMsg">Login Failed. Please Try Again.</div>
					<Login changeDisplayWhat={this.changeDisplayWhat} changeLogin={this.changeLoginStatus}/>
				</div>
			);

		else
			return (
				<div>	
					<Banner/>
					<Login changeDisplayWhat={this.changeDisplayWhat} changeLogin={this.changeLoginStatus}/>
				</div>
			);
	}
});