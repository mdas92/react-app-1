
var Navbar =React.createClass({
render(i){
	const pages=['Home','Logout'];
	const pageList = pages.map((page) =>
	  <a key={'page_'+page+i} className="navbar-brand" href="#">{page}</a>
	);
	return <div id="nav" className="nav navbar-inverse navbar-top">{pageList}</div>;
	}
});
