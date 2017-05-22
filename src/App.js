var Banner=React.createClass({
  render: function() {
    return (
      <div id="banner" className="Banner">
        <div className="App-header">
          <img src="flogo.svg" className="App-logo" alt="logo" />
        </div>
        <h2>Welcome to FIHM</h2>
      </div>
    );
  }
});
var Login = React.createClass({
render: function(){
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
});

var Navbar =React.createClass({
render(i){
	const pages=['Home','Logout'];
	const pageList = pages.map((page) =>
	  <a key={'page_'+page+i} className="navbar-brand" href="#">{page}</a>
	);
	return <div id="nav" className="nav navbar-inverse navbar-top">{pageList}</div>;
	}
});

 ReactDOM.render(
 		<div>
 			<h1>Hello, World</h1>
 			<Navbar />
 			<Banner />
 			<Login />
 			</div>,
 			document.getElementById('root')
  			); 