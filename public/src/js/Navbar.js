import React, { Component } from 'react';
import '../css/App.css';

class Navbar extends Component {
render(i){
	const pages=['Home','Logout'];
	const pageList = pages.map((page) =>
	  <a key={'page_'+page+i} className="navbar-brand" href="#">{page}</a>
	);
	return <div id="nav" className="nav navbar-inverse navbar-top">{pageList}</div>;
	}
};

export default Navbar;