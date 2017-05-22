"use strict";

/*import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './lib/App';
import Login from './lib/Login';
import Navbar from './lib/Navbar';
import './index.css'; 
import logo from '../ar/flogo.svg';*/

var Banner = React.createClass({
	displayName: "Banner",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "banner", className: "Banner" },
			React.createElement(
				"div",
				{ className: "App-header" },
				React.createElement("img", { src: "./ar/flogo.svg", className: "App-logo", alt: "logo" })
			),
			React.createElement(
				"h2",
				null,
				"Welcome to FIHM"
			)
		);
	}
});

var Login = React.createClass({
	displayName: "Login",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "login", className: "text-center " },
			React.createElement(
				"form",
				{ id: "loginform", className: "col-sm-4 col-sm-offset-4" },
				React.createElement(
					"div",
					{ className: "form-group form-group-lg" },
					React.createElement(
						"label",
						{ htmlFor: "usr" },
						"User ID:"
					),
					React.createElement("input", { type: "text", className: "form-control input-lg", id: "usr" }),
					React.createElement("br", null)
				),
				React.createElement(
					"div",
					{ className: "form-group form-group-lg" },
					React.createElement(
						"label",
						{ htmlFor: "pwd" },
						"Password:"
					),
					React.createElement("input", { type: "password", className: "form-control input-lg", id: "pwd" }),
					React.createElement("br", null),
					React.createElement(
						"button",
						{ type: "submit", form: "loginform", className: "btn btn-success btn-lg", value: "Submit" },
						"Submit"
					)
				)
			)
		);
	}
});

var Navbar = React.createClass({
	displayName: "Navbar",

	render: function render(i) {
		var pages = ['Home', 'Logout'];
		var pageList = pages.map(function (page) {
			return React.createElement(
				"a",
				{ key: 'page_' + page + i, className: "navbar-brand", href: "#" },
				page
			);
		});
		return React.createElement(
			"div",
			{ id: "nav", className: "nav navbar-inverse navbar-top" },
			pageList
		);
	}
});

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Hello World"
	),
	React.createElement(Navbar, null),
	React.createElement(Banner, null),
	React.createElement(Login, null)
), document.getElementById('root'));
