var Button = React.createClass({
	getInitialState() {
		return {
			action : 'nochange'
		};
  	},
	handleClick: function() {
	   this.setState({action: 'hello'});
	   this.changeType();
	},
  	changeType() {
    	console.log("Type: " + this.state.action);
    	this.props.click();
  	},
	render(){
		return (
		<button onClick={this.handleClick} type="button" className="btn btn-warning mybtn">{this.props.buttonText}</button>
		);
	}
});