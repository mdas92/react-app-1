var Root = React.createClass({
	render(){
		return (
			<div>
				<Navbar />
				<Main />
			</div>
			);
	}
});
ReactDOM.render(
	  <Root />,
 	document.getElementById('root')
  			); 