var Homepage = React.createClass({
	getInitialState(){
		return {type:'default'};
	},
	setHomepageType(ch){
		this.setState({type: ch});
	},
	render(){
		if(this.props.displayWhat == 'user')
			this.props.changeDisplayWhat();
		else
			return (
			<div>
				<h1>Welcome, {this.props.username}</h1>
				<BookingMenu setType={this.setHomepageType}/>
				<BookingArea type={this.state.type}/>
			</div>
				);
	}
});