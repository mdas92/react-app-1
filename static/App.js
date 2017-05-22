
<<<<<<< HEAD
var Banner = React.createClass({
	render: function () {
		return React.createElement(
			"div",
			{ id: "banner", className: "Banner" },
			React.createElement(
				"div",
				{ className: "App-header" },
				React.createElement("img", { src: "flogo.svg", className: "App-logo", alt: "logo" })
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
	render: function () {
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
	render(i) {
		const pages = ['Home', 'Logout'];
		const pageList = pages.map(page => React.createElement(
			"a",
			{ key: 'page_' + page + i, className: "navbar-brand", href: "#" },
			page
		));
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
		"Hello, World"
	),
	React.createElement(Navbar, null),
	React.createElement(Banner, null),
	React.createElement(Login, null)
=======
ReactDOM.render(React.createElement(
			'h1',
			null,
			'Hello World'
>>>>>>> origin/master
), document.getElementById('root'));